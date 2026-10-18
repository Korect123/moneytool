---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: 今日（index.html 首页 + 全站外壳）

Mode: Operate. Primary viewport: desktop web (1440); phone secondary. Build path: code-led.

Audience & job: the owner alone, at a desk, opens the app to record a transaction and see today's money at a glance; occasionally on iPhone.
Proof/content: real multi-currency accounts (CNY/AUD, HKD soon), frozen FX per record, sync state.
Constraints: single static index.html, no build; keep every existing id/function; never touch data shape, deductExpense/saveToCloud/loadFromCloud/migrateData, auth. All existing features stay reachable (AI 记账, 问账本, 批量, 周期账单, 存钱目标, 借出还款, 月度回顾).
This round: 今日 page (rebuilt from sec-add, default tab) + whole-app shell and shared components restyled; 总览/账单/统计/设置 only restyled, not re-laid-out.
Reference bar (user-chosen): Apple's own apps (Wallet, Reminders, Health), 钱迹, Copilot Money.

## Direction contract

THESIS: The category standard, played straight at full craft: an Apple-idiom desktop money app where opening the app means recording, refusing the dashboard-first arrangement (hero number, KPI tiles, card grid) the old 总览 led with.

OWN-WORLD: System font (PingFang SC / -apple-system), #f2f2f7 grouped ground, white inset-grouped lists with hairline separators, one accent #0a66d6, income green, expense in label ink, secondary label grey #6d6d72, tabular numerals, 10–12px continuous-corner radius, no gradients, glass, emoji, ✦, gold or ink-wash.

STORY: The owner sees today (date, spent, received), records a transaction in one pass (type → amount → category → account → Enter; the 支出/收入/挪钱 control leads because 挪钱 swaps the whole form for the move form, so the switch must sit above both forms), sees the new row appear with its balance-after, and trusts the totals because converted amounts show their frozen rate and sync state is always visible.

FIRST VIEWPORT: Left sidebar (今日 · 总览 · 账单 · 统计 · 设置, sync state at its foot). Centre: large title 今天 with date, today's 支出/收入 at right; the record card (big amount field, 支出/收入/挪钱 segmented control, category chips, account chips with currency, 备注, 记一笔 primary button); today's records as an inset grouped list beneath. Right column: 总资产 card (≈ total in CNY, AUD share noted) and the accounts list with per-currency balances.

FORM: canon (standing exit), chosen by the user over the roll; ordered list position n/a. seed:62a1a2c84d39ea58

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
