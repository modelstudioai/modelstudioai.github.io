---
layout: doc
title: 岗位能力样板
permalink: /playbook/
description: 按岗位找你的能力样板 — 30 分钟跑通你的第一个 AI 工作流
---

# 岗位能力样板（Playbook）

> 不确定自己能用到哪些能力？看这里。
> 8 个岗位，每个岗位一份「想清楚 → 动手做 → 检查对不对」的完整样板，**附 30 分钟最小流程 + 复制即用的提示词**。
>
> 👉 **第一次用？** 先看 [⚙️ 5 分钟环境准备](#setup)，装好 CLI + API Key 再来。

---

## 30 秒对号入座

你今天主要要做什么？点一个最像的，直接跳到你的样板：

<div class="role-grid">

  <a class="role-card" href="#kw">
    <span class="emoji">📚</span>
    <h3>知识工作者</h3>
    <p>研究员 / 分析师 / 编辑<br/>写报告、做调研、整理资料</p>
  </a>

  <a class="role-card" href="#dz">
    <span class="emoji">🎨</span>
    <h3>设计师</h3>
    <p>视觉 / 创意 / 内容创作<br/>出图、出视频、做海报</p>
  </a>

  <a class="role-card" href="#dev">
    <span class="emoji">💻</span>
    <h3>AI 开发团队</h3>
    <p>工程师 / Agent 搭建者<br/>接 API、搭 Agent、做产品</p>
  </a>

  <a class="role-card" href="#fin">
    <span class="emoji">📈</span>
    <h3>投研咨询</h3>
    <p>研究员 / 分析师<br/>拉数据、做估值、写研报</p>
  </a>

  <a class="role-card" href="#cs">
    <span class="emoji">📞</span>
    <h3>客服运营</h3>
    <p>客服 / 工单 / 用户运营<br/>回复用户、处理工单</p>
  </a>

  <a class="role-card" href="#mkt">
    <span class="emoji">📣</span>
    <h3>内容营销</h3>
    <p>运营 / 文案 / 品牌<br/>写文章、出配图、做短视频</p>
  </a>

  <a class="role-card" href="#ops">
    <span class="emoji">⚙️</span>
    <h3>AI Ops</h3>
    <p>运维 / SRE / 平台<br/>监控用量、调配额、保 SLA</p>
  </a>

  <a class="role-card" href="#legal">
    <span class="emoji">⚖️</span>
    <h3>法务合规</h3>
    <p>合同审查 / 合规<br/>条款比对、出意见</p>
  </a>

</div>

---

## 术语速查

本手册用 **Trinity 三角色** 描述每个岗位的工作回路，对应你可能熟悉的别名：

| 三角色 | 别名 | 你在做什么 |
|---|---|---|
| **Thinker** | Sync · 想清楚 | 同步信息、定方向、选工具 |
| **Worker** | Work · 动手做 | 出活、产出交付物 |
| **Verifier** | Verify · 把关 | 核查、审计、质量门 |

**一张图看懂回路**：`Thinker 想清楚 → Worker 动手做 → Verifier 检查对不对 → 不行就退回 Thinker/Worker`，循环直到通过。

---

<a id="setup"></a>

## ⚙️ 5 分钟环境准备

> **常见疑问先回答**：
> - **要 clone 这些 repo 吗？** → ❌ 不用。本手册里所有 `npx skills add ...` 都是远程一键安装，自动下载到你电脑上的 `~/.bailian/skills/` 目录，**不用 git clone 任何项目**。
> - **不会写代码 / 不爱用命令行怎么办？** → 跳过 CLI 安装，直接装 [OpenWork 桌面应用](/openwork/)，一切都是图形界面，鼠标点点就能跑。
> - **我已经在用 Cursor / Cline / Claude Desktop / Windsurf？** → 完美。装完下面的 CLI，所有 `bl` 命令和 Skills 在你已有的 Agent 里都能直接调用。

### A · 必装三件套（5 分钟，一次配完长期复用）

> 「百炼 CLI」（命令名 `bl`）是 [阿里云百炼 CLI 产品页](https://bailian.console.aliyun.com/cli?source_channel=cli_github&) 的命令行客户端，本节装的就是它。

| # | 装什么 | 怎么装 | 验证 |
|---|---|---|---|
| ① | **Node.js ≥ 18**<br/>（运行 CLI 和 Skills 的基础环境） | 去 [nodejs.org](https://nodejs.org) 下载 LTS 版本，双击安装 | 终端运行 `node -v`，看到 `v18.x` 或更高即可 |
| ② | **百炼 CLI**（命令名 `bl`） | 终端运行 `npm install -g bailian-cli` | `bl --version` 出版本号即可 |
| ③ | **百炼 API Key** | 点 [这里申请 Key](https://bailian.console.aliyun.com/cn-beijing/?source_channel=key_github&tab=app#/api-key) → 复制 → 终端运行 `bl auth login --api-key` → 粘贴 | `bl auth status` 显示账号信息即可 |

**装完跑一条测试命令**（任何能联网的电脑都应该秒回）：

```bash
bl text chat "你好，用一句话介绍一下你自己"
```

看到一段中文回复 = 全部就绪 ✅。

### B · 选一个 Agent 跑动环境（二选一，看你的习惯）

CLI 本身只是「能力管道」，需要一个 **Agent** 来调用它、串成工作流。两种主流玩法：

| 方案 | 适合谁 | 怎么开始 | 体验 |
|---|---|---|---|
| **🟢 OpenWork（开源桌面 Agent）** | 不会写代码 / 想点点鼠标完成 | 去 [OpenWork Releases](https://github.com/modelstudioai/openwork/releases) 下载 `.dmg` (Mac) / `.exe` (Win) 双击安装 → 在设置里填同一个 API Key 即可 | 图形界面，所有 `bl` 命令背后帮你跑；适合大多数岗位 |
| **🟦 你已经在用的 AI 编辑器** | 已经在用 Cursor / Cline / Claude Desktop / Windsurf | 已经装好的话什么都不用做。在对话框里说："请用 `bl text chat` 帮我..." 就行 | 终端 + 代码编辑器联动，开发者更顺手 |

> 两种环境**装好的 Skills 都通用**——你今天用 OpenWork 装的 `canvas-design`，明天在 Cursor 里也能直接被调用。

### C · Skills 怎么用？（一句话讲清楚）

```
你在 Agent 里说：「请帮我做一张小红书海报」
        ↓
Agent 发现需要 canvas-design 这个 skill
        ↓
你执行（或 Agent 主动建议执行）：
    npx skills add anthropics/skills:canvas-design -g
        ↓
Skill 被下载并装到 ~/.bailian/skills/canvas-design/
        ↓
Agent 自动加载这个 skill，按它的步骤完成工作
        ↓
你看到结果（图 / 视频 / 文字）
```

**关键点**：
- `-g` = global（装到用户目录，所有项目共享）；不加 `-g` 只装到当前文件夹
- 装过一次后，所有 Agent（OpenWork / Cursor / Claude Desktop）都能用，不用重复装
- 删除 Skill：`npx skills remove <name> -g`
- 看已装哪些：`npx skills list -g`

### D · 装不上？常见 3 个问题

| 现象 | 原因 | 解决 |
|---|---|---|
| `npm install -g bailian-cli` 报 `permission denied` | macOS 全局目录权限 | 用 `sudo npm install -g bailian-cli`，或装 [nvm](https://github.com/nvm-sh/nvm) 避免权限问题 |
| `bl auth login` 后命令还报 `401` | API Key 复制时带了空格 / 换行 | 重新 `bl auth logout` → 干净地重新复制 Key 粘贴 |
| Windows 上 `bl` 命令找不到 | npm 全局 bin 不在 PATH | 重启终端；或把 `npm config get prefix` 输出的路径加到环境变量 PATH |

> 还遇到问题？在 [GitHub Issues](https://github.com/modelstudioai/cli/issues/new) 提问，或看 [FAQ](/faq/)。

---

<a id="kw"></a>

## 📚 知识工作者

**你是谁**：研究员、分析师、编辑、咨询顾问 — 大量时间在「读资料 → 出文字」之间循环。

**典型场景**：一周内要写一份「2026 年 AI Coding 工具市场调研报告」，需要查 30+ 篇资料、整理数据、画图表、最后输出 8000 字 PDF。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 模型推荐 | "做长文档总结该用哪个模型？" | CLI | `bl advisor recommend` |
| 平台文档导航 | 自动翻百炼平台文档找参数/错误码 | 官方 Skill | `npx skills add modelstudioai/skills:bailian-docs-llm-wiki -g` |
| 技能发现 | "有没有现成能做 PPT 的 skill？" | 社区 Skill | `npx skills add vercel-labs/skills:find-skills -g` |
| 文档结构规划 | 帮你列大纲、拆章节 | 社区 Skill | `npx skills add anthropics/skills:doc-coauthoring -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 文本对话 | 写段落、改文案、做摘要 | CLI | `bl text chat "..."` |
| 视觉理解 | 报表截图 → 自动提取数据 | CLI | `bl vision describe --image report.png` |
| 语音识别 | 访谈录音 → 文字稿（30 种语言） | CLI | `bl speech recognize --audio interview.m4a` |
| 知识库检索 | 一堆 PDF 扔进去后随时提问 | CLI | `bl knowledge retrieve "..."` |
| 联网搜索 | 实时查最新行业数据 | CLI | `bl search web "2026 AI coding market size"` |
| 实时翻译 | 看外文资料 / 出双语版 | 项目 | [livetranslatedemo](https://github.com/modelstudioai/livetranslatedemo) |
| 团队周报 | 自动汇总进度 | 社区 Skill | `npx skills add anthropics/skills:internal-comms -g` |
| Office 文档 | 出 Word/Excel/PDF/PPT | 社区 Skill | `npx skills add anthropics/skills:docx -g`（docx/xlsx/pdf/pptx 同源） |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 模型对比验证 | 同一段问两个模型，看答案是否一致 | CLI | `bl advisor recommend` 对比模式 |
| 去 AI 味 | 让文字读起来像人写的 | 社区 Skill | `npx skills add donghuixin/AI-Vibe-Writing-Skills -g` |
| AI 文本检测 | 看看像不像 AI 生成 | 社区 Skill | `npx skills add louis030195/gptzero-mcp -g` |
| 多轮审查 | 文件预览、版本对比 | 项目 | [OpenWork](/openwork/) |

### 🚀 30 分钟最小流程

**目标**：从一张行业报告 PDF 出发，生成一份 1500 字摘要 + 3 个核心数据点。

```bash
# 步骤 1（5 分钟）：让模型读完报告
bl vision describe --image report-2026.pdf \
  --prompt "请提取这份报告里所有数字类指标（市场规模/增长率/份额），按表格输出"

# 步骤 2（10 分钟）：生成结构化摘要
bl text chat "我有一份 AI Coding 市场报告，请帮我写一段 1500 字的中文摘要，
包含：(1) 市场规模和增长率；(2) Top 3 玩家及差异化；(3) 未来 12 个月趋势预测。
以下是我提取的数据：[粘贴步骤 1 输出]"

# 步骤 3（10 分钟）：联网补充最新动态
bl search web "AI coding assistant market 2026 Cursor Windsurf revenue"

# 步骤 4（5 分钟）：去 AI 味 + 输出 Word
# 在 OpenWork 里调用 AI-Vibe-Writing-Skills 改写一遍 → 用 docx skill 排版
```

**示例提示词**（复制即用）：

> "我是一名行业分析师，正在写一份关于 AI 编程助手市场的中文调研报告。请帮我把以下数据组织成 3 个清晰的小节，每节配一个 2 句话的核心结论，整体语气专业但不晦涩，避免 AI 套话（不要出现"综上所述""值得注意的是"）。数据：[粘贴]"

---

<a id="dz"></a>

## 🎨 设计师 / 创意工作者

**你是谁**：视觉设计师、内容创作者、自媒体作者 — 每天在「构思 → 出素材 → 调整」之间循环。

**典型场景**：新品发布要做一套物料：1 张主视觉海报 + 1 条 30 秒产品短片 + 5 张社媒配图 + 1 段 60 秒中文旁白。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 视频 Prompt 配方 | 怎么写 prompt 让 AI 出好视频 | 项目 | [awesome-happyhorse-prompts](https://github.com/modelstudioai/awesome-happyhorse-prompts) |
| 设计风格规划 | 50+ 风格方案选型 | 社区 Skill | `npx skills add davila7/claude-code-templates:ui-ux-pro-max -g` |
| 真人剧本策划 | 写脚本 / 分镜 / 真人叙事 | 社区 Skill | `npx skills add Shanyin-ai/shanyin-screenwriting-master -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 图像生成 | 文字 → 图片（Qwen-Image 2.0） | CLI | `bl image generate --prompt "..."` |
| 图像编辑 | 多图合成、局部编辑 | CLI | `bl image edit --image a.png --image b.png` |
| 视频生成 | 文生视频 / 图生视频（[HappyHorse 1.1](https://bailian.console.aliyun.com/?source_channel=hh_github&tab=model_experience#/model-market/detail/wan2.2-t2v-plus) 模型） | CLI | `bl video generate --prompt "..."` |
| 语音合成 | 配音 + 声音克隆 | CLI | `bl speech synthesize --text "..." --voice ref.wav` |
| 端到端短片 | 编剧 → 导演 → 渲染 → QA 一条龙 | 官方 Skill | `npx skills add modelstudioai/skills:spark-video -g` |
| 互动视频 Prompt | 拼装漫剧/虚拟偶像 | 官方 Skill | `npx skills add modelstudioai/skills:happyhorse-prompt-studio -g` |
| 互动小说游戏 | 小说 → 分支剧情 + AI 配图 | 官方 Skill | `npx skills add modelstudioai/skills:novel-game -g` |
| 海报 / 推广页 | 节日视觉、活动落地页 | 社区 Skill | `npx skills add anthropics/skills:canvas-design -g`、`anthropics/skills:frontend-design` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 成果预览 | 多张图 / 多个版本并排看 | 项目 | [OpenWork](/openwork/) |
| 分镜一致性校验 | 3×3 分镜法看角色一致性 | 项目 | [awesome-happyhorse-prompts](https://github.com/modelstudioai/awesome-happyhorse-prompts) |

### 🚀 30 分钟最小流程

**目标**：一句话产品介绍 → 一套发布物料（1 主视觉 + 1 短片 + 1 配音）。

```bash
# 步骤 1（5 分钟）：主视觉海报
bl image generate \
  --prompt "宁静的极简产品海报，浅米色背景，正中放置一台银色无线耳机，
旁边手写体英文 'Sound · Reimagined'，柔和侧光，9:16 竖版" \
  --aspect-ratio 9:16

# 步骤 2（15 分钟，可并行）：30 秒短片
bl video generate \
  --prompt "镜头慢慢推近一台银色无线耳机，背景从晨雾过渡到日出金光，
最后弹出文字 Sound Reimagined" \
  --duration 30

# 步骤 3（5 分钟）：60 秒中文旁白
bl speech synthesize \
  --text "重新想象声音。每一次佩戴，都是和世界的重新连接。" \
  --voice cosyvoice-v3-flash:female-warm \
  --output narration.mp3

# 步骤 4（5 分钟）：3 张社媒配图（不同场景）
for scene in "户外慢跑" "通勤地铁" "深夜书房"; do
  bl image generate --prompt "$scene 场景中佩戴银色无线耳机的人物特写" --aspect-ratio 1:1
done
```

**示例提示词**（复制即用）：

> "请帮我画一张小红书风格的产品种草图：主体是 [产品]，背景是 [场景]，色调 [色调描述]，画面里加入手写体英文标语 '[英文标语]'，整体氛围 [情绪]，9:16 竖版尺寸。避免：低质量、文字模糊、AI 味强的塑料感。"

---

<a id="dev"></a>

## 💻 AI 开发团队

**你是谁**：工程师、Agent 开发者、产品技术负责人 — 在「选模型 → 写代码 → 测试」间循环。

**典型场景**：3 天内做一个能查公司知识库 + 调用 Jira 的客服 Agent，对接微信工作群。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 模型推荐 | 场景化选型 + 价格对比 | CLI | `bl advisor recommend` |
| 应用浏览 | 看已发布的 Agent 找灵感 | CLI | `bl app list` |
| MCP 发现 | 看有哪些外部工具能集成 | CLI | `bl mcp list` / `bl mcp inspect <name>` |
| 技能图谱 | 全网 Skill 索引 / 竞品分析 | 社区 Skill | `npx skills add GPTtang/skill-atlas -g` |
| 技术博客 | 看团队技术洞察案例 | 项目 | [blog](https://github.com/modelstudioai/blog) |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| MCP 工具调用 | 一行命令操作 GitHub/数据库 | CLI | `bl mcp call <server> <tool> --args '{...}'` |
| Agent / Workflow | 调用已发布的 Agent | CLI | `bl app call <app_id>` |
| 桌面 Agent | 命令执行、文件修改、多步骤 | 项目 | [OpenWork](/openwork/) |
| 开发新 Skill | 把你的工作流封装成 skill | 社区 Skill | `npx skills add anthropics/skills:skill-creator -g` |
| 搭 MCP Server | 把任何 API 暴露为 MCP 工具 | 社区 Skill | `npx skills add anthropics/skills:mcp-builder -g` |
| Go 后端脚手架 | 用 GoFrame 快速写接口 | 社区 Skill | `npx skills add gogf/skills:goframe-v2 -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 端到端测试 | 自动跑完整工作流测试 | 社区 Skill | `npx skills add affaan-m/everything-claude-code:e2e-testing -g` |
| 用量统计 | 各模型调用次数 / Token | CLI | `bl usage stats` |
| 配额检查 | 实时 RPM/TPM 是否撞限 | CLI | `bl quota check` |
| 配置校验 | 当前 endpoint / 工作空间 | CLI | `bl config show` |
| 三步上手验证 | 文档站标准验证流程 | 项目 | [文档站](/guide/) |

### 🚀 30 分钟最小流程

**目标**：用 CLI 搭一个能查知识库 + 调用外部 API 的迷你 Agent，本地跑通。

```bash
# 步骤 1（3 分钟）：选模型
bl advisor recommend "我要做一个客服 Agent，需要中文好、支持 function call、单次成本 < 0.01 元"

# 步骤 2（5 分钟）：建知识库
bl knowledge create --name "company_kb"
bl knowledge upload --kb company_kb --file ./docs/faq.pdf
bl knowledge upload --kb company_kb --file ./docs/products.md

# 步骤 3（5 分钟）：看有哪些 MCP 工具能用
bl mcp list                # 看现成的服务
bl mcp inspect github     # 看 GitHub 工具的具体能力

# 步骤 4（10 分钟）：用 mcp-builder 把内部 Jira API 包装成 MCP server
# 在 Cursor / OpenWork 里说："用 mcp-builder 帮我把 https://jira.company.com/rest/api/2 包装成 MCP server"

# 步骤 5（5 分钟）：跑端到端测试
bl text chat "我的订单 #12345 为什么还没发货？" \
  --knowledge company_kb \
  --mcp jira-mcp
# 检查响应是否同时引用了知识库内容 + Jira 工单状态

# 步骤 6（2 分钟）：看消耗
bl usage stats --last 1h
```

**示例提示词**（复制即用）：

> "我在用 Bailian CLI 搭一个客服 Agent。请基于以下需求设计一个最小化的工具调用流程：用户问题 → 先从知识库 [name] 检索 → 如果是订单相关问题，调用 jira-mcp 的 search-issues 工具 → 否则直接回答。请用伪代码或 Python 函数形式给我。"

---

<a id="fin"></a>

## 📈 投研咨询

**你是谁**：行业研究员、投研分析师、咨询顾问 — 在「建框架 → 拉数据 → 出结论」间循环。

**典型场景**：5 天内出一份《2026 Q2 储能行业》深度报告，含 Top 10 公司对标 + 3 个细分赛道判断。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 金融分析框架 | A 股 / 基金 / 宏观时间序列 | 官方 Skill | `npx skills add modelstudioai/skills:financial-expert -g` |
| 市场调研 | 行业对标 / 竞品分析 | 社区 Skill | `npx skills add ceoniuer/shaoqi-marketplace -g` |
| 模型对比 | 选择最适合金融文本的模型 | CLI | `bl advisor recommend` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 财务数据查询 | 拉 A 股 / 基金 / 宏观数据 | 官方 Skill | financial-expert 子命令 |
| 联网搜索 | 实时行情 / 突发新闻 | CLI | `bl search web "..."` |
| 视觉理解 | 财报截图 / K 线图 → 数据 | CLI | `bl vision describe --image chart.png` |
| 写分析段落 | 长文本输出 | CLI | `bl text chat` |
| Excel / Word 排版 | 出研报正式格式 | 社区 Skill | `npx skills add anthropics/skills:xlsx -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 数据源交叉验证 | 同一指标多模型问一遍 | CLI | `bl advisor recommend` 对比 |
| 多会话隔离 | 不同标的分窗口记录追溯 | 项目 | [OpenWork](/openwork/) |
| 内容真实性 | 验证模型有没有编数据 | 社区 Skill | `npx skills add louis030195/gptzero-mcp -g` |

### 🚀 30 分钟最小流程

**目标**：选一家上市公司，5 个维度出一份初稿对标分析。

```bash
# 步骤 1（5 分钟）：建分析框架
# 在 OpenWork / Cursor 里调用 financial-expert
# 说："用 financial-expert 给我一个储能行业 Top 3 公司的横向对标框架"

# 步骤 2（10 分钟）：拉公开数据
bl search web "宁德时代 比亚迪 国轩高科 2026 Q1 营收 净利润"

# 步骤 3（5 分钟）：解析最新财报截图
bl vision describe --image 2026Q1-report.pdf \
  --prompt "请提取所有营收、毛利率、研发投入数据，按公司分组输出"

# 步骤 4（10 分钟）：生成对标分析段落
bl text chat "请基于以下数据，写一段 800 字的横向对标分析，
覆盖：(1) 收入端 (2) 盈利能力 (3) 研发强度 (4) 估值水平 (5) 未来 6 个月催化剂。
数据：[粘贴步骤 2、3]"

# 步骤 5（验证）：交叉验证
bl advisor recommend "对比 qwen-max 和 qwen-plus 在金融文本生成上的表现差异"
```

**示例提示词**（复制即用）：

> "我是储能行业研究员，请基于以下三家公司 2026Q1 财报数据，输出一份 800 字横向对标段落。要求：(1) 引用数据必须标注来源年份；(2) 不要使用绝对化用词（"最佳""唯一"）；(3) 末尾给一个 1-5 分的投资优先级排序，并简述理由。数据：[粘贴]"

---

<a id="cs"></a>

## 📞 客服运营

**你是谁**：在线客服、工单处理、用户社群运营 — 每天大量「听需求 → 给方案 → 验合规」。

**典型场景**：一个新产品上线后，需要在 48 小时内消化用户的 200+ 工单（含语音留言、多语言询问、合规敏感问题）。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 平台文档导航 | 按用户意图匹配知识来源 | 官方 Skill | `npx skills add modelstudioai/skills:bailian-docs-llm-wiki -g` |
| 社媒策略 | 用户运营 / 社群规划 | 社区 Skill | `npx skills add blacktwist/social-media-skills -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 文本对话 | 生成回复话术 | CLI | `bl text chat "..."` |
| 知识库检索 | 跨会话记忆 + 多模态 RAG | CLI | `bl knowledge retrieve` |
| Workflow 调用 | 自动跑工单流程 | CLI | `bl app call <workflow_id>` |
| 语音识别 | 客户语音留言 → 文字 | CLI | `bl speech recognize --audio msg.m4a` |
| 多语言翻译 | 海外客户实时翻译 | 项目 | [livetranslatedemo](https://github.com/modelstudioai/livetranslatedemo) |
| 营销话术 | 转化型回复模板 | 社区 Skill | `npx skills add gushuaialan1/marketing-writer -g` |
| 公众号排版 | 公告 / 通知排版 | 社区 Skill | `npx skills add huangserva/servasyy_skills -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 权限审查 | 多账号隔离 + 结果审查 | 项目 | [OpenWork](/openwork/) |
| 文风自然化 | 让 AI 回复不像 AI | 社区 Skill | `npx skills add donghuixin/AI-Vibe-Writing-Skills -g` |
| 免费额度预警 | 看够不够这周用 | CLI | `bl usage free` |

### 🚀 30 分钟最小流程

**目标**：从一段 3 分钟的中文用户语音留言出发，生成一份合规、自然的工单回复。

```bash
# 步骤 1（2 分钟）：语音转文字
bl speech recognize --audio voicemail-12345.m4a --language zh

# 步骤 2（3 分钟）：建知识库（一次性，长期复用）
bl knowledge create --name "support_kb"
bl knowledge upload --kb support_kb --file ./faq.md
bl knowledge upload --kb support_kb --file ./refund-policy.pdf

# 步骤 3（10 分钟）：用知识库生成回复
bl text chat "用户的问题是：[粘贴步骤 1 输出]。
请基于知识库 support_kb 给一份正式但温暖的中文回复，
不超过 200 字，结尾留一个明确的下一步（比如要求用户提供订单号）。" \
  --knowledge support_kb

# 步骤 4（10 分钟）：检查 + 去 AI 味
# 在 OpenWork 里用 AI-Vibe-Writing-Skills 改写一遍

# 步骤 5（5 分钟）：批量处理剩余 199 条
# 写一个 for 循环，把上面流程跑一遍
```

**示例提示词**（复制即用）：

> "我是客服。用户来询问 [问题]。请基于知识库给一份回复，要求：(1) 不超过 150 字；(2) 用「您」称呼；(3) 不要出现"我们郑重承诺""请您理解"这类公式化表达；(4) 如果知识库没有答案，明确说"这个问题我需要请同事核实，预计 2 小时内回复您"，不要瞎答。"

---

<a id="mkt"></a>

## 📣 内容营销

**你是谁**：公众号 / 小红书 / 视频号运营、品牌内容策划。

**典型场景**：新品上市要在 3 天内做出 1 篇公众号长文 + 5 张配图 + 1 条 30 秒短视频 + 1 段配音。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 选题策略 | 热点追踪 + 选题角度 | 社区 Skill | `npx skills add blacktwist/social-media-skills -g` |
| 分镜配方 | 视频 Prompt 方法论 | 项目 | [awesome-happyhorse-prompts](https://github.com/modelstudioai/awesome-happyhorse-prompts) |
| 真人剧本 | 叙事 / 真人出镜规划 | 社区 Skill | `npx skills add Shanyin-ai/shanyin-screenwriting-master -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 写文案 | 公众号长文 / 小红书 | CLI | `bl text chat` |
| 出配图 | 文字 → 图 | CLI | `bl image generate` |
| 出短视频 | 文字 / 图 → 视频（[HappyHorse 1.1](https://bailian.console.aliyun.com/?source_channel=hh_github&tab=model_experience#/model-market/detail/wan2.2-t2v-plus) 模型） | CLI | `bl video generate` |
| 配旁白 | 声音克隆 | CLI | `bl speech synthesize` |
| 端到端短片 | 编剧 → 渲染 → 拼接 | 官方 Skill | `npx skills add modelstudioai/skills:spark-video -g` |
| 互动叙事 | 长内容做成游戏 | 官方 Skill | `npx skills add modelstudioai/skills:novel-game -g` |
| 营销文案 | 产品介绍 / 落地页 | 社区 Skill | `npx skills add gushuaialan1/marketing-writer -g` |
| 海报 | 节日 / 活动视觉 | 社区 Skill | `npx skills add anthropics/skills:canvas-design -g` |
| 互动视频 | 漫剧 / 虚拟偶像 | 官方 Skill | `npx skills add modelstudioai/skills:happyhorse-prompt-studio -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 多版本预览 | 文字 + 图 + 视频并排 | 项目 | [OpenWork](/openwork/) |
| AI 文本检测 | 看像不像 AI 写的 | 社区 Skill | `npx skills add louis030195/gptzero-mcp -g` |
| 去 AI 味 | 文风自然化 | 社区 Skill | `npx skills add donghuixin/AI-Vibe-Writing-Skills -g` |

### 🚀 30 分钟最小流程

**目标**：新品介绍页 → 1 篇公众号推文 + 5 张配图 + 1 条 30s 短片。

```bash
# 步骤 1（5 分钟）：写文案
bl text chat "我是 [品牌] 的运营，要写一篇公众号推文介绍新产品 [产品]。
受众是 25-35 岁城市白领。要求：(1) 开头 50 字内抓住注意力；
(2) 中段用 3 个生活场景说明使用价值；(3) 结尾给行动指令；
(4) 全文 1200 字以内，不要用「家人们」这类老梗。"

# 步骤 2（5 分钟，并行）：5 张配图
for scene in "晨间咖啡桌" "通勤地铁" "办公桌特写" "周末露营" "深夜书房"; do
  bl image generate \
    --prompt "$scene 场景，自然光，主体放 [产品]，构图留白，4:5 竖版"
done

# 步骤 3（10 分钟，并行）：30 秒短视频
bl video generate \
  --prompt "镜头从 [起始画面] 缓慢推近 [产品]，最后弹出文字 [品牌口号]" \
  --duration 30

# 步骤 4（5 分钟）：配音
bl speech synthesize \
  --text "[把推文开头第一段拿来当旁白]" \
  --voice cosyvoice-v3-flash:female-warm

# 步骤 5（5 分钟）：去 AI 味
# 在 OpenWork 里用 AI-Vibe-Writing-Skills 过一遍文案
```

**示例提示词**（复制即用）：

> "请帮我写一篇小红书种草笔记，主角是 [产品]，目标用户是 25-35 岁女性，TA 关心 [关心点]。要求：(1) 200 字以内；(2) 开头用一个反问钩子；(3) 加 3 个 emoji 但不要过多；(4) 末尾留 5 个相关 hashtag；(5) 禁用「绝对」「最」「第一」这类违反广告法的词。"

---

<a id="ops"></a>

## ⚙️ AI Ops（运维 / 平台）

**你是谁**：AI 平台运维、SRE、DevOps — 保证 AI 服务稳定运行、用量可控、SLA 达标。

**典型场景**：本月公司全员开始用 CLI，需要看清楚谁在用、用了多少、有没有撞限速、要不要扩配额。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 用量趋势 | 按模型 / 工作空间看历史 | CLI | `bl usage stats` |
| 实时负载 | 看是否快撞限速 | CLI | `bl quota check` |
| 模型选型 | 性价比更高的替代方案 | CLI | `bl advisor recommend` |
| 应用全景 | 团队都发布了什么 Agent | CLI | `bl app list` |
| 工具库索引 | 项目规划工具推荐 | 社区 Skill | `npx skills add diao10/skills_repository -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 申请提速 | 大促前临时加配额 | CLI | `bl quota request --rpm 1000` |
| 改配置 | 切工作空间 / 改 endpoint | CLI | `bl config set` |
| 工作空间管理 | 多团队隔离 | CLI | `bl workspace list` / `create` |
| 运维操作 | 通过 MCP 操作内部系统 | CLI | `bl mcp call` |
| 桌面运维 | 命令执行 + GitHub 集成 | 项目 | [OpenWork](/openwork/) |
| 搭运维工具 | 把内部脚本封成 MCP | 社区 Skill | `npx skills add anthropics/skills:mcp-builder -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 限速规格 | RPM / TPM 上限确认 | CLI | `bl quota list` |
| 实时负载 | 当前用量 vs 限制 | CLI | `bl quota check` |
| 变更审计 | 谁啥时候改了限速 | CLI | `bl quota history` |
| 免费额度 | 哪些模型有免费量、几天到期 | CLI | `bl usage free` |
| 端到端测试 | 整条流程跑通 | 社区 Skill | `npx skills add affaan-m/everything-claude-code:e2e-testing -g` |
| 配置校验 | 当前配置对不对 | CLI | `bl config show` |

### 🚀 30 分钟最小流程

**目标**：把本月公司 CLI 用量做成一份 1 页周报，定位 Top 3 用量异常。

```bash
# 步骤 1（3 分钟）：拉本月用量
bl usage stats --since 2026-06-01 --until 2026-06-29 --format json > usage.json

# 步骤 2（2 分钟）：拉当前配额
bl quota list --format json > quota.json
bl quota check --format json > current-load.json

# 步骤 3（5 分钟）：看免费额度还剩多少
bl usage free

# 步骤 4（10 分钟）：让 AI 帮你写运维分析
bl text chat "我是 AI Ops 运维。请基于以下 JSON 数据写一份 500 字的月度用量分析。
重点输出：(1) Top 3 高消耗模型；(2) 有没有撞限速的工作空间；
(3) 哪些免费额度即将过期；(4) 下月配额调整建议。
数据：[粘贴 usage.json + quota.json + current-load.json]"

# 步骤 5（5 分钟）：跑端到端验证
# 在 OpenWork 里用 e2e-testing 跑一遍核心业务工作流，看响应是否正常

# 步骤 6（5 分钟）：申请下月扩容（如果需要）
bl quota request --workspace prod --model qwen3.7-max --rpm 2000 \
  --reason "618 大促预估流量翻倍"
```

**示例提示词**（复制即用）：

> "我是 AI 平台运维。请基于以下用量 JSON 数据，输出一份运维月报。要求：(1) 用表格而不是大段文字；(2) 异常项标 🔴，正常标 🟢；(3) 给出下月 3 条具体调整建议（含命令）。数据：[粘贴]"

---

<a id="legal"></a>

## ⚖️ 法务合规

**你是谁**：企业法务、合规专员、合同审查律师 — 大量时间在「读条款 → 找风险 → 出意见」之间循环。

**典型场景**：3 天内审一份 80 页的英文 SaaS 服务合同，输出中文风险点列表 + 修改建议。

### Think · 想清楚

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 模型推荐 | 选对法律文本最稳的模型 | CLI | `bl advisor recommend` |
| 平台文档 | 看模型在长文档上的限制 | 官方 Skill | `npx skills add modelstudioai/skills:bailian-docs-llm-wiki -g` |
| 文档结构规划 | 帮你列审查清单 | 社区 Skill | `npx skills add anthropics/skills:doc-coauthoring -g` |

### Work · 动手做

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 文本对话 | 逐条解析 / 修改建议 | CLI | `bl text chat` |
| 视觉理解 | 扫描版合同 PDF → 文字 + OCR | CLI | `bl vision describe --image contract.pdf` |
| 知识库检索 | 内部合同模板 / 历史案例 | CLI | `bl knowledge retrieve` |
| 多语言翻译 | 中英 / 中日 / 中韩条款互译 | 项目 | [livetranslatedemo](https://github.com/modelstudioai/livetranslatedemo) |
| 联网搜索 | 查最新法规 / 判例 | CLI | `bl search web` |
| Word 文档 | 输出审查报告 / 修订版合同 | 社区 Skill | `npx skills add anthropics/skills:docx -g` |
| 团队周报 | 法务案件进展汇报 | 社区 Skill | `npx skills add anthropics/skills:internal-comms -g` |

### Verify · 检查对不对

| 能力 | 用途 | 来源 | 一键启用 |
|---|---|---|---|
| 模型对比 | 同一条款两个模型问、看一致性 | CLI | `bl advisor recommend` 对比 |
| 多会话隔离 | 不同案件隔离 + 完整记录追溯 | 项目 | [OpenWork](/openwork/) |
| 内容真实性 | 防止模型编造法条 | 社区 Skill | `npx skills add louis030195/gptzero-mcp -g` |

### 🚀 30 分钟最小流程

**目标**：英文 SaaS 合同 → 中文风险点清单 + 修改建议。

```bash
# 步骤 1（5 分钟）：先把扫描版合同转可搜索文字
bl vision describe --image contract-saas.pdf \
  --prompt "请逐页提取所有条款文字，按章节编号输出"

# 步骤 2（5 分钟）：建公司合同模板知识库（一次性，长期复用）
bl knowledge create --name "legal_kb"
bl knowledge upload --kb legal_kb --file ./templates/saas-template-zh.docx
bl knowledge upload --kb legal_kb --file ./cases/2025-disputes.pdf

# 步骤 3（10 分钟）：逐章风险扫描
bl text chat "你是企业法务。请审查以下英文 SaaS 合同条款，
对比知识库 legal_kb 里的公司模板，找出风险点。
输出格式：原文 / 风险等级（🔴高/🟡中/🟢低）/ 修改建议（中文）。
条款：[粘贴步骤 1 输出]" \
  --knowledge legal_kb

# 步骤 4（5 分钟）：交叉验证关键条款
bl advisor recommend "审 SaaS 合同 SLA 章节，qwen3.7-max 和 qwen-plus 哪个更稳？"
# 然后用两个模型分别问同一条 SLA 条款，看结论是否一致

# 步骤 5（5 分钟）：出审查报告
# 在 OpenWork 里用 docx skill 把上述输出排版成正式审查报告
```

**示例提示词**（复制即用）：

> "你是中国企业法务。请审查以下英文 SaaS 合同条款，重点关注：(1) 数据所有权和退出条款；(2) 服务级别协议（SLA）和违约赔偿；(3) 知识产权归属；(4) 适用法律和争议解决。输出格式：英文原文 → 中文翻译 → 风险等级（🔴高/🟡中/🟢低）→ 具体修改建议（必须给出修改后的中文条款）。注意：不得编造任何中国法律条款编号；如果不确定请明确标注「需进一步核查」。条款：[粘贴]"

---

## 还想看什么？

- 把流程封成自动化？看 [开发新 Skill 指南](/guide/)
- 不想敲命令？装 [OpenWork 桌面应用](/openwork/)
- 看其他人怎么用？[Showcase 案例集](/showcase/)
- 有问题？[FAQ](/faq/) 或在 [GitHub Issues](https://github.com/modelstudioai/skills/issues/new) 提问

<style>
.role-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 24px 0;
}
@media (max-width: 1024px) {
  .role-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .role-grid { grid-template-columns: repeat(2, 1fr); }
}
.role-card {
  display: block;
  padding: 20px 16px;
  border: 1px solid var(--hairline, #ebebeb);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.15s ease;
  background: #fff;
}
.role-card:hover {
  border-color: #171717;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
}
.role-card .emoji {
  font-size: 32px;
  display: block;
  margin-bottom: 8px;
}
.role-card h3 {
  font-size: 16px;
  margin: 0 0 8px;
  color: #171717;
}
.role-card p {
  font-size: 13px;
  color: #888;
  margin: 0;
  line-height: 1.4;
}
</style>
