const FX_BASE = 'https://api.frankfurter.dev/v1';
const SUPPORTED = ['CNY', 'HKD', 'AUD', 'USD', 'EUR', 'GBP'];
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function json(data, status = 200, cacheSeconds = 0) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8' };
  if (cacheSeconds > 0) {
    headers['Cache-Control'] = `public, s-maxage=${cacheSeconds}, stale-while-revalidate=86400`;
  }
  return new Response(JSON.stringify(data), { status, headers });
}

/**
 * 汇率查询。返回「1 外币 = N 人民币」，前端拿来即用（无需再做倒数）。
 * GET /api/rates                  → 最新汇率
 * GET /api/rates?date=2026-04-26  → 该日汇率（非交易日由上游回退到最近交易日）
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const date = url.searchParams.get('date');

    if (date && !DATE_RE.test(date)) {
      return json({ error: '日期格式应为 YYYY-MM-DD' }, 400);
    }

    const symbols = SUPPORTED.filter(c => c !== 'CNY').join(',');
    const path = date ? `/${date}` : '/latest';

    try {
      const res = await fetch(`${FX_BASE}${path}?base=CNY&symbols=${symbols}`);

      if (!res.ok) {
        return json({ error: '汇率源暂时不可用' }, 502);
      }

      const body = await res.json();

      // 上游给的是「1 CNY = N 外币」，取倒数换成「1 外币 = N 人民币」
      const rates = { CNY: 1 };
      for (const [cur, perCny] of Object.entries(body.rates || {})) {
        if (perCny > 0) rates[cur] = 1 / perCny;
      }

      // 历史汇率不会再变，可以长缓存；最新汇率缓存 1 小时
      const cacheSeconds = date ? 604800 : 3600;

      return json({ date: body.date, rates }, 200, cacheSeconds);
    } catch (e) {
      return json({ error: '汇率获取失败' }, 502);
    }
  },
};
