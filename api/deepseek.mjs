const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const ALLOWED_MODEL = 'deepseek-v4-flash';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
}

async function verifySupabaseUser(authHeader) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('服务器缺少 Supabase 环境变量');
  }

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const res = await fetch(`${supabaseUrl}/auth/v1/user`, {
    method: 'GET',
    headers: {
      apikey: supabaseAnonKey,
      Authorization: authHeader,
    },
  });

  if (!res.ok) return null;

  return await res.json();
}

function buildLedgerParseRequest(payload, user) {
  const text = String(payload?.text || '').trim();
  const today = String(payload?.today || '');
  const accounts = Array.isArray(payload?.accounts) ? payload.accounts : [];

  if (!text) {
    throw new Error('缺少记账文本');
  }

  const firstWallet = accounts[0]?.id || '';

  const accountText = accounts
    .map(a => `${a.id}=${a.name}(${a.currency})`)
    .join('、');

  const prompt = `
你是记账助手。请从用户描述中提取所有记账信息，只返回 JSON，不要解释。

必须返回这个格式：
{
  "records": [
    {
      "type": "expense 或 income",
      "amount": 数字,
      "desc": "分类",
      "note": "备注，可为空字符串",
      "wallet": "账户id",
      "date": "YYYY-MM-DD",
      "borrower": "借给谁，可为空字符串"
    }
  ]
}

支出分类只能从这些里选（按语义判断，选最贴切的一个）：
- 吃饭：正餐、外卖、零食、奶茶、咖啡、小卖部
- 交通：打车、地铁、公交、加油、停车、单程高铁机票（非整趟旅游）
- 购物：买衣服、数码、日用品、潮玩手办、会员/软件订阅、话费、送别人的礼物
- 居住：房租、水电燃气、住宿
- 旅游：整趟出行的打包花费（出去玩、旅游、景区门票）
- 医疗：看病、买药、体检、保险
- 学习工作：学费、科研、书籍、办公、考试报名
- 资金流转：借钱给别人
- 其他：实在归不进以上任何一类

收入分类只能选：工资/收入、资金流转、其他

如果用户说“借给某人”，则：
type = "expense"
desc = "资金流转"
borrower = 对方姓名

注意：买基金、股票、理财等“投资”不是消费，本工具用账户转账记录，请不要把它当作支出；
若用户明确在说投资买入，desc 用“其他”，并在 note 写明“投资-基金/股票”，提醒用户手动用“挪钱”转入投资账户。

如果没有明确账户，使用这个账户：${firstWallet}
如果没有明确日期，使用今天：${today}

可用账户：
${accountText}

用户描述：
${text}
`.trim();

  return {
    model: ALLOWED_MODEL,
    thinking: { type: 'disabled' },
    temperature: 0,
    max_tokens: 320,
    response_format: { type: 'json_object' },
    user_id: user.id,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  };
}

function buildFinanceSummaryRequest(payload, user) {
  const summary = payload?.summary;

  if (!summary || typeof summary !== 'object') {
    throw new Error('缺少财务汇总数据');
  }

  const prompt = `
你是个人财务分析助手。请根据下面的月度财务汇总，输出简短、可执行的中文结论。

要求：
1. 不要输出表格；
2. 先说明收入、支出、净收支；
3. 找出最大支出分类；
4. 如果预算有风险，请提醒；
5. 最后给 2 条具体建议；
6. 总字数控制在 180 字以内。

财务汇总：
${JSON.stringify(summary)}
`.trim();

  return {
    model: ALLOWED_MODEL,
    thinking: { type: 'disabled' },
    temperature: 0.2,
    max_tokens: 420,
    user_id: user.id,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  };
}

export default {
  async fetch(request) {
    try {
      if (request.method !== 'POST') {
        return json({ error: 'Method not allowed' }, 405);
      }

      const apiKey = process.env.DEEPSEEK_API_KEY;

      if (!apiKey) {
        return json({ error: '服务器缺少 DeepSeek API Key' }, 500);
      }

      const user = await verifySupabaseUser(request.headers.get('Authorization'));

      if (!user) {
        return json({ error: '请先登录' }, 401);
      }

      const body = await request.json();
      const task = body?.task;
      const payload = body?.payload || {};

      let deepseekBody;

      if (task === 'ledger_parse') {
        deepseekBody = buildLedgerParseRequest(payload, user);
      } else if (task === 'finance_summary') {
        deepseekBody = buildFinanceSummaryRequest(payload, user);
      } else {
        return json({ error: '未知 AI 任务' }, 400);
      }

      const deepseekRes = await fetch(DEEPSEEK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(deepseekBody),
      });

      const result = await deepseekRes.json();

      if (!deepseekRes.ok) {
        return json(
          {
            error: result?.error?.message || 'DeepSeek 请求失败',
          },
          deepseekRes.status
        );
      }

      const content = result?.choices?.[0]?.message?.content || '';

      if (task === 'ledger_parse') {
        let parsed;

        try {
          parsed = JSON.parse(content);
        } catch {
          return json({ error: 'AI 返回内容不是有效 JSON' }, 502);
        }

        return json({
          records: Array.isArray(parsed.records) ? parsed.records : [],
          usage: result.usage || null,
          model: result.model || ALLOWED_MODEL,
        });
      }

      return json({
        text: content.trim(),
        usage: result.usage || null,
        model: result.model || ALLOWED_MODEL,
      });
    } catch (err) {
      return json(
        {
          error: err?.message || '服务器错误',
        },
        500
      );
    }
  },
};
