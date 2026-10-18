---
name: 账本 · Ledger
description: 私人财务记录：苹果系统风格的多币种桌面记账
colors:
  accent: "#0a66d6"
  accent-text: "#0959c0"
  accent-tint: "rgba(10,102,214,.08)"
  accent-ring: "rgba(10,102,214,.18)"
  income: "#1f7a35"
  income-tint: "rgba(31,122,53,.10)"
  transfer: "#4846c4"
  transfer-tint: "rgba(88,86,214,.08)"
  destructive: "#d70015"
  destructive-text: "#c4001a"
  destructive-tint: "rgba(215,0,21,.08)"
  warning: "#b25000"
  warning-text: "#a34700"
  warning-tint: "rgba(255,149,0,.12)"
  label: "#1c1c1e"
  label-secondary: "#3a3a3c"
  label-tertiary: "#636366"
  grouped-ground: "#f2f2f7"
  surface: "#ffffff"
  fill: "#efeff2"
  sidebar: "#e9e9ee"
  separator: "rgba(60,60,67,.12)"
  separator-strong: "rgba(60,60,67,.22)"
  selection: "rgba(60,60,67,.10)"
  overlay: "rgba(0,0,0,.3)"
  toast: "rgba(28,28,30,.94)"
  dark-accent: "#0a66d6"
  dark-accent-text: "#64a8ff"
  dark-accent-tint: "rgba(100,168,255,.12)"
  dark-accent-ring: "rgba(100,168,255,.2)"
  dark-income: "#30d158"
  dark-income-tint: "rgba(48,209,88,.14)"
  dark-transfer: "#a5a3ff"
  dark-destructive: "#d70015"
  dark-destructive-text: "#ff6961"
  dark-destructive-tint: "rgba(255,105,97,.14)"
  dark-warning-text: "#ffb340"
  dark-warning-tint: "rgba(255,179,64,.14)"
  dark-label: "#f2f2f7"
  dark-label-secondary: "#d1d1d6"
  dark-label-tertiary: "#98989f"
  dark-grouped-ground: "#161618"
  dark-surface: "#232326"
  dark-fill: "#2e2e32"
  dark-sidebar: "#1d1d20"
  dark-separator: "rgba(255,255,255,.09)"
  dark-separator-strong: "rgba(255,255,255,.17)"
  dark-selection: "rgba(255,255,255,.10)"
  dark-segment-thumb: "#5a5a5e"
  dark-overlay: "rgba(0,0,0,.55)"
  dark-toast: "rgba(72,72,74,.96)"
typography:
  large-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Helvetica Neue\", \"Microsoft YaHei\", system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.4px"
  amount-entry:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    letterSpacing: "-0.6px"
    fontFeature: "tnum"
  total:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    letterSpacing: "-0.6px"
    fontFeature: "tnum"
  stat:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    letterSpacing: "-0.3px"
    fontFeature: "tnum"
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", \"Helvetica Neue\", \"Microsoft YaHei\", system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  row-amount:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    fontFeature: "tnum"
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0"
  caption:
    fontFamily: "-apple-system, BlinkMacSystemFont, \"SF Pro Text\", \"PingFang SC\", system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  xs: "7px"
  row-icon: "8px"
  segment: "9px"
  sm: "10px"
  md: "12px"
  modal: "14px"
  sheet: "16px"
  pill: "999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  xxl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0 28px"
    height: "40px"
  button-primary-mobile:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    height: "46px"
    width: "100%"
  button-plain:
    backgroundColor: "transparent"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "40px"
  button-plain-hover:
    backgroundColor: "{colors.accent-tint}"
  button-small-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.row-icon}"
    padding: "6px 14px"
    height: "32px"
  button-small-neutral:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.label}"
    rounded: "{rounded.row-icon}"
    padding: "6px 14px"
    height: "32px"
  button-small-destructive:
    backgroundColor: "{colors.destructive-tint}"
    textColor: "{colors.destructive-text}"
    rounded: "{rounded.row-icon}"
    padding: "6px 14px"
    height: "32px"
  segmented-control:
    backgroundColor: "{colors.fill}"
    rounded: "{rounded.segment}"
    padding: "2px"
  segmented-control-segment:
    textColor: "{colors.label}"
    rounded: "{rounded.xs}"
    padding: "6px 22px"
    height: "32px"
  segmented-control-segment-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.label}"
  chip:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.label}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
    height: "36px"
  chip-hover:
    backgroundColor: "{colors.selection}"
  chip-selected:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent-text}"
  input:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.label}"
    rounded: "{rounded.sm}"
    padding: "9px 12px"
    height: "40px"
  input-focus:
    backgroundColor: "{colors.surface}"
  amount-field:
    backgroundColor: "{colors.fill}"
    textColor: "{colors.label}"
    typography: "{typography.amount-entry}"
    rounded: "{rounded.sm}"
    padding: "0 4px 0 18px"
    height: "64px"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "20px 22px"
  grouped-list:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "0 16px"
  list-row:
    textColor: "{colors.label}"
    typography: "{typography.body}"
    padding: "12px 16px"
    height: "54px"
  list-row-hover:
    backgroundColor: "{colors.selection}"
  nav-item:
    textColor: "{colors.label}"
    rounded: "{rounded.sm}"
    padding: "9px 11px"
    height: "40px"
  nav-item-active:
    backgroundColor: "{colors.selection}"
    textColor: "{colors.label}"
  modal:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.modal}"
    padding: "16px 20px 20px"
  toast:
    backgroundColor: "{colors.toast}"
    textColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "11px 16px"
---

# Design System: 账本 · Ledger

## Overview

**Creative North Star: "系统自带的账本"**

这套界面的目标是让账本看起来像苹果系统自带的一个 App：系统字体、`#f2f2f7` 灰色分组底、白色内嵌分组列表、发丝分隔线、唯一的强调蓝。它不发明自己的视觉语言，而是把同类标准做法（钱包、提醒事项、健康、钱迹、Copilot Money）以完整的工艺执行到位。打开即记账：页面的视觉重心是记一笔的卡片和今天的记录列表，而不是一个大数字加一排 KPI 卡片。

密度是桌面应用的密度：左侧 200px 侧边栏（≥1200px 时 220px），中间主列，右侧 320–360px 的资产栏；正文 14px，行高 1.5，行与行之间靠缩进发丝线分隔，不靠卡片框。颜色的工作只有三件：强调蓝表示“可操作 / 已选中”，绿色表示收入，靛蓝表示转账；支出用正文墨色，不用红色。深色模式只重定义变量，结构零改动。

这套世界取代了已退役的宣纸 / 金色 / 水墨 / 朱红印章风格。旧样式规则仍留在 `<style>` 上半部分，被 `/* ===== 系统风格（2026-10-18）` 覆盖块整体压过；判断“系统是什么”时以覆盖块和实际渲染为准。

**Key Characteristics:**
- 系统字体栈（PingFang SC / -apple-system），所有金额使用等宽数字（`font-variant-numeric: tabular-nums`）
- 灰色分组底 + 白色内嵌分组列表，缩进发丝分隔线
- 唯一强调色：蓝；收入绿；支出 = 正文墨色；转账靛蓝
- 选择态是“淡蓝底 + 1px 蓝色内描边”，不是实心填充
- 几乎无阴影；深色模式完全无卡片阴影
- 无渐变、无毛玻璃、无 emoji、无装饰符号、无金色、无水墨

## Colors

一个强调蓝落在中性的系统灰阶上，语义色只用于金额的方向。

**变量命名陷阱（必读）：** 代码沿用了旧世界的变量名，值已经全部换掉。`--gold` / `--gold-bright` 现在是强调蓝（accent），`--gold-t` 是蓝色文字（accent-text），`--gold-bg` / `--gold-a08` / `--gold-a10` / `--gold-a15` 是蓝色淡底与焦点环；`--green` 是收入；`--exp` 是支出色，等于 `var(--ink)`；`--blue` / `--blue-t` 实际是靛蓝（转账），不是强调蓝；`--card` 是输入框 / 胶囊的填充色（fill），**不是**卡片背景，卡片背景是 `--surface`；`--paper` 是分组底。新代码请按本文的角色名理解，不要因为名字叫 gold 就用它画金色。

### Primary
- **系统强调蓝**（accent / `--gold`）：主按钮填充、选中月份标签、日历选中日、进度条、导航图标。深色模式下填充保持不变。
- **强调蓝文字**（accent-text / `--gold-t`）：链接、纯文字按钮（批量添加、编辑、退出）、选中胶囊的文字、键盘焦点轮廓。深色模式提亮为 dark-accent-text。
- **强调淡底**（accent-tint / `--gold-bg`）：选中胶囊底色、纯文字按钮 hover、新记录行的闪烁底。焦点环使用 accent-ring（`--gold-a15`）。

### Secondary
- **收入绿**（income / `--green`）：收入金额、今日收入数字、同步成功圆点、成功提示。深色模式为 dark-income。

### Tertiary
- **转账靛蓝**（transfer / `--blue-t`）：记录行里的转账金额与“转入”说明。只用于转账方向，不作为第二强调色。

### Neutral
- **正文墨**（label / `--ink`）：正文、标题，以及**支出金额**（`--exp`）。
- **次级灰**（label-secondary / `--ink2`）：表单标签、图标、次要说明。
- **三级灰**（label-tertiary / `--ink3`）：日期副标题、行内副信息、计数、币种代码。
- **分组底**（grouped-ground / `--paper`）：页面底色，也用于卡片内部的嵌套信息块（汇率说明、洞察项）。
- **表面白**（surface / `--surface`）：卡片、分组列表、弹窗、移动端底部标签栏。
- **填充灰**（fill / `--card`）：输入框、胶囊、分段控件轨道、行图标底、进度条轨道。
- **侧边栏灰**（sidebar / `--sidebar-bg`）：侧边栏底色，比分组底略深。
- **分隔线**（separator / `--border`；separator-strong / `--border2`）：发丝分隔与卡片内分区线。
- **选中 / hover 灰**（selection / `--sel`）：导航当前项、列表行 hover。

### 状态色
- **危险红**（destructive / `--red`，文字 destructive-text，淡底 destructive-tint）：删除按钮（淡红底 + 红字）、错误提示、导航未读徽标。
- **警示橙**（warning / `--amber`，文字 warning-text，淡底 warning-tint）：借出未还、借款字段、“未折算”类提示、警示提示条。

### 图表色板（既有，非本世界意图）
`CAT_CHART_LIGHT` / `CAT_CHART_DARK`（index.html `<script>` 中）本轮刻意未改，仍是旧世界的分类色板；`CATS` 数据里的分类 `color`/`emoji` 字段同理。它们是现存资产，不代表本系统的配色意图；记录行与分类胶囊的图标已被强制为中性灰（fill 底 + label-secondary）。

### Named Rules
**The One Accent Rule.** 只有一种强调色：蓝。可点击、已选中、当前焦点才用蓝；不新增第二个品牌色。
**The Ink Expense Rule.** 支出金额用正文墨色，收入用绿色。不用红色表示支出，红色只留给删除与错误。
**The Read the Role, Not the Name Rule.** `--gold*` 是蓝、`--card` 是填充、`--blue` 是靛蓝。按角色取色，不按变量名猜。

## Typography

**Display Font:** 系统字体（-apple-system / SF Pro Text / PingFang SC，回退 Helvetica Neue、Microsoft YaHei、system-ui）
**Body Font:** 同上，全站单一字体栈 `--font`

**Character:** 完全交给系统字体，层级只靠字号、字重和负字距建立；数字一律等宽，让金额列对齐、跳动时不抖。

### Hierarchy
- **Large Title**（700，28px，行高 1.2，-0.4px；移动端 26px）：页面大标题“今天”“总览”等，下方跟 14px 三级灰副标题。
- **Amount Entry**（600，32px，-0.6px，等宽数字）：记一笔卡片里的金额输入，前置 26px 币种符号。
- **Total**（700，30px，-0.6px，等宽数字）：总资产卡的合计。
- **Stat**（600，22px，-0.3px，等宽数字；移动端 19px）：页头右侧今日支出 / 收入。
- **Headline**（600，17px）：弹窗标题；设置卡片标题为 15px。
- **Title**（600，14px）：卡片 / 面板标题、一句话记账标签。
- **Body**（400–500，14px，行高 1.5）：正文、列表行主文字（500）、胶囊文字。
- **Row Amount**（600，15px，等宽数字）：记录行金额。
- **Label**（500，13px，无字距、不大写）：表单字段标签（label-secondary）；分组标题为 13px / 600 / 三级灰。
- **Caption**（400，12px）：行内副信息、币种、计数、折算金额（三级灰）。

移动端所有输入控件字号为 16px，防止 iOS 聚焦放大。

### Named Rules
**The Tabular Money Rule.** 任何显示金额的元素都必须 `font-variant-numeric: tabular-nums` 且 `white-space: nowrap`。
**The No Small Caps Rule.** 标签是 13px 常规大小写的中文，不加字距、不全大写、不做眉标。

## Layout

桌面三栏：固定侧边栏 200px（≥1200px 为 220px），主区页头内边距 30px 32px 0，主体内边距 20px 32px 56px。“今日”页主体为两列网格：`minmax(0,1fr) 320px`（≥1280px 时右栏 360px），列间距 24px；右栏为总资产卡 + 账户分组列表，粘性定位。≤960px 收为单列；≤768px 侧边栏让位给底部标签栏，页头内边距 16px，主体 14px 16px 100px（为底栏留位），同步状态以胶囊形式出现在页头右侧。

间距节奏为 4 的倍数：4 / 8 / 12 / 16 / 20 / 24 / 32。胶囊间距 8px，表单分组间距 16px，卡片之间 24px，卡片内边距 16–22px。

记一笔表单在桌面端是一个网格：金额 → 分类 → 账户 → 备注 | 日期（170px）| 批量添加 | 主按钮，最后一行四列对齐；移动端主按钮占满整行并在底栏上方吸附。

## Elevation & Depth

以色调分层为主：灰色分组底上放白色表面，白色表面里放灰色填充控件。浅色模式下卡片只有一层几乎不可见的阴影（`--sh`），深色模式完全没有卡片阴影，层次全靠 `#161618 → #232326 → #2e2e32` 三级明度。真正的投影只出现在浮层上：分段控件的滑块、弹窗、提示条、登录卡片。卡片 hover 不抬升。

### Shadow Vocabulary
- **Card hairline**（`box-shadow: 0 1px 2px rgba(0,0,0,.04)`；深色为 none）：所有卡片与分组列表。
- **Segment thumb**（`box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 0 0 .5px rgba(0,0,0,.04)`）：分段控件选中段。
- **Modal**（`box-shadow: 0 20px 50px rgba(0,0,0,.18), 0 0 0 .5px rgba(0,0,0,.08)`）：弹窗与移动端底部抽屉。
- **Toast**（`box-shadow: 0 8px 24px rgba(0,0,0,.18)`）：提示条。
- **Auth card**（`box-shadow: 0 1px 3px rgba(0,0,0,.06), 0 12px 32px rgba(0,0,0,.06)`）：登录卡片。
- **Sticky CTA lift**（`box-shadow: 0 6px 16px rgba(10,102,214,.25)`，仅 ≤768px）：吸附在底栏上方的主按钮，用来与下方滚动内容分离。
- **Focus ring**（`box-shadow: 0 0 0 3px` accent-ring）：输入框、金额框聚焦；键盘焦点另用 `outline: 2px solid` accent-text、`outline-offset: 2px`。

### Named Rules
**The Flat Card Rule.** 卡片静止时是平的，hover 也不抬升、不位移；阴影只属于浮在内容之上的东西。

## Shapes

连续圆角的系统语言：卡片与分组列表 12px，输入框与主按钮 10px，分段控件轨道 9px、滑块 7px，行图标与小按钮 8px，账户字母图标 7px，弹窗 14px，移动端底部抽屉顶部 16px，分类 / 账户胶囊、徽标与同步胶囊为全圆（999px）。卡片无描边；分隔线是 1px 发丝线，在列表里从图标右侧开始（记录行缩进 60px，账户行 58px），不贯穿整行。弹窗关闭按钮是 32px 圆形填充灰按钮。

## Components

### Buttons
系统按钮：实心蓝只出现在每个区域的那一个主操作上，其余全部是文字按钮或填充灰按钮。
- **Shape:** 10px 圆角；小号按钮 8px。
- **Primary:** 强调蓝底白字，600 字重 15px；桌面 40px 高、左右 28px；移动端 46px 高占满整行。按钮文字随类型变化（记录支出 / 记录收入），颜色不变。
- **Hover / Focus:** 不位移、不加阴影，最多降到 0.9 透明度；键盘焦点为 2px 蓝色轮廓、偏移 2px。
- **Plain:** 透明底蓝字（批量添加、查看全部、编辑），hover 时出现淡蓝底。
- **Small (设置页):** 32px 高、8px 圆角；主要为蓝底白字，中性为填充灰底墨字，危险为淡红底红字。
- **Destructive:** 弹窗删除按钮 44px 高，淡红底 + 红字，不用实心红。

### Segmented Control
支出 / 收入 / 挪钱，位于记一笔卡片顶部、两个表单之上。
- **Track:** 填充灰，9px 圆角，2px 内边距。
- **Segment:** 32px 高，左右 22px，13px 墨色文字，7px 圆角。
- **Active:** 白色滑块 + 600 字重 + segment thumb 阴影；深色模式滑块为 dark-segment-thumb。三种类型的选中态完全相同，不按类型换色。

### Chips
- **Style:** 全圆胶囊，填充灰底，无描边，36px 最小高度，左右 14px；分类胶囊前置 16px 单色线性图标（label-secondary）；账户胶囊后置 12px 三级灰币种符号。
- **State:** hover 为 selection 灰；选中为淡蓝底 + 1px 蓝色内描边（`inset 0 0 0 1px`），文字与图标转为蓝色 600 字重。同一选择态用于分类、账户、批量行分类。

### Cards / Containers
- **Corner Style:** 12px。
- **Background:** 表面白（深色 dark-surface）。
- **Shadow Strategy:** card hairline，见 Elevation。
- **Border:** 无；卡片内部分区用 1px 分隔线（如记一笔卡片中分段控件行与表单之间）。
- **Internal Padding:** 记一笔卡片 20px 22px（移动端 16px），总资产卡 18px 20px，面板 16px，图表卡 18px 20px。

### Inputs / Fields
- **Style:** 填充灰底，透明 1px 边框，10px 圆角，最小高度 40px；下拉框右侧自绘 12px 灰色 V 形箭头。
- **Focus:** 背景切到表面白，边框变蓝，外加 3px 淡蓝焦点环；光标为蓝色。
- **Amount field:** 64px 高的大号金额框，币种符号 / 输入 / 计算器按钮在一行内 flex 排列，任何长度的币种符号都不压字；聚焦行为同输入框。

### Grouped List (记录 / 账户)
- **Style:** 白色分组卡片，左右 16px 内边距，行无圆角，行高 ≥54px。
- **Row:** 32px 圆角方形中性图标（8px 圆角）+ 14px/500 标题 + 12px 三级灰副信息（账户 · 余额）；右侧 15px 等宽金额，外币下方附 12px 折算金额。
- **Separator:** 相邻行之间的缩进发丝线。
- **States:** hover 为 selection 灰；整行可点编辑；行操作按钮在可 hover 设备上仅 hover / 聚焦时显示；新记录以 0.28s 下落淡入 + 1.6s 淡蓝闪烁出现。

### Navigation
- **Sidebar:** 侧边栏灰底，右侧 1px 分隔线；品牌字“账本”20px/700。导航项 40px 高、14px 墨色文字、18px 蓝色线性图标；当前项为 selection 灰底 + 600 字重，不用蓝色底。未读徽标为红色全圆。底部为账号邮箱、蓝字“退出”和同步状态（7px 圆点，成功为收入绿）。
- **Mobile tab bar:** 表面白底，顶部 1px 分隔线，项高 52px，未选三级灰，选中为强调蓝文字。

### Modal
- 表面白，14px 圆角，无描边，modal 阴影；遮罩为 overlay（深色更深），无模糊。标题 17px，关闭按钮 32px 圆形填充灰。移动端变为底部抽屉：贴底、顶部 16px 圆角、最高 92vh。

### Toast
- 深色胶囊（toast 色，深色模式 dark-toast），白字 14px，12px 圆角；桌面在顶部居中，移动端在底栏上方。成功前置一个 16px 描线对勾（绘制动画 0.4s）；错误为实心危险红，警示为实心警示橙；撤销按钮为淡白底亮蓝字。

## Do's and Don'ts

### Do:
- **Do** 按角色取色：强调蓝用 `--gold` / `--gold-t`，填充用 `--card`，表面用 `--surface`，分组底用 `--paper`。
- **Do** 所有金额使用等宽数字且不换行；外币金额旁标注折算后的人民币（三级灰 12px）。
- **Do** 用“淡蓝底 + 1px 蓝色内描边”表示胶囊选中，用 selection 灰表示导航当前项和行 hover。
- **Do** 新增列表沿用内嵌分组列表：白卡 12px 圆角、行内 32px 中性图标、缩进发丝分隔线。
- **Do** 深色模式只改变量，不另写结构；新增颜色必须同时给出深色值。
- **Do** 每个动效都在 `prefers-reduced-motion` 下有静态退路。

### Don't:
- **Don't** 用红色表示支出；红色只用于删除、错误和未读徽标。
- **Don't** 引入渐变、毛玻璃、emoji、✦ 等装饰符号、金色或水墨元素。
- **Don't** 给卡片加描边，或让卡片 hover 时抬升、位移。
- **Don't** 给分段控件按支出 / 收入 / 挪钱换颜色；选中态统一为白色滑块。
- **Don't** 在标签上加字距、全大写或眉标；标签就是 13px 中文。
- **Don't** 把旧世界的图表分类色板当作本系统的配色依据去扩展。
