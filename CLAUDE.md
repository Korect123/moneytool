# CLAUDE.md — 账本 Ledger (moneytool)

> 每次新对话开始，先读本文件，再读 `docs/PROGRESS.md`。

## 项目是什么

- 单页 PWA 记账应用，纯前端 + Supabase 云同步，主要给手机用。
- 用户登录后，所有数据（账户、余额、流水、预算、周期账单、分类预算）以**一个 JSON blob** 存进 Supabase `ledger` 表，按 `user_id` 一行。
- 图表用 Chart.js；有一个"问账本"AI 功能（`callLedgerAI`）。

## 怎么跑起来

- 纯静态，**没有构建步骤**，依赖是本地 vendor 文件（`supabase.min.js`、`chart.min.js`），不走 npm。
- 本地预览：在项目目录执行 `python3 -m http.server 8080`，浏览器打开 `http://localhost:8080`。
- 部署：推到 GitHub 后由托管平台（GitHub Pages / Vercel 等）发布。

## 代码结构 / 约定

- 原生 JS，函数都是全局；命名规范：`getX` 取数、`renderX` 渲染、`saveX` 保存。
- 代码按 `/* ===== 区块名 ===== */` 注释分区。**改任何东西前，先 grep 定位到对应区块和函数，不要通读整个文件、不要凭印象重写。**
- 所有业务数据放在全局 `data` 对象。**任何修改 `data` 之后，必须触发 `debouncedSync()`** 才会存到云端。
- 金额显示统一走 `fmt` / `fmtAmt` / `fmtCur`，不要自己拼 `¥` 字符串。
- 日期统一走 `localDateStr` / `fmtDate` 等工具函数。

## 红线（别碰 / 别回退，除非我明确点名）

- **不要改 `data` 的顶层字段名**：`accounts`、`balances`、`records`、`budget`、`recurringBills`、`categoryBudgets`。云端存量数据全靠这些 key，改名 = 老用户数据读不出来。
- **不要动 `migrateData()`（老数据迁移）**，它保证老用户升级后数据不丢。
- **不要重构认证流程** `doAuth` / `enterApp` / `initSupabase` 的核心逻辑。
- **金额 / 余额 / 扣款相关逻辑**（`deductExpense`、`saveToCloud`、`loadFromCloud`）改动前先用中文说清方案，等我确认再改。
- 不要一次性重写整个 `<style>` 或整个 `<script>`；只改需要改的区块。

## 我的偏好

- 中文沟通，少废话，直接做，改完自己在浏览器里验证。
- 审美：宣纸底 + 金色点缀的中式极简。配色定稿在 `:root` 的 CSS 变量里，别乱换。
- 移动端优先。

## 每次改动后的自查

至少走一遍关键流程：登录 → 记一笔支出 → 看总览和图表 → 退出登录再进。
确认没报错、金额对、云端有同步成功提示。

## 记忆协议

我说"记住 / 保留 / 这个做得好 / 以后别忘了"时：把结论按日期追加到 `docs/PROGRESS.md`，涉及红线的同时更新本文件。
