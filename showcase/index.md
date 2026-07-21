---
layout: doc
title: 用户案例
permalink: /showcase/
description: "社区成员使用阿里云百炼 CLI + Skills 的真实案例。从 SEO 审计到 AI Vlog 生产线，看看大家都在用 AI 做什么。"
keywords: "阿里云百炼案例,AI Agent 案例,百炼CLI,OpenWork,Showcase,社区案例"
---

# 用户案例 Showcase

来自社区成员的真实使用案例，以及可复用的 Prompt / Skill 模板。

[提交你的案例 →](https://github.com/modelstudioai/modelstudioai.github.io/issues/new)

---

## Product Promo Video Skill：百炼生成 + Remotion 代码化合成产品宣传片

**作者**：[@chenlikun2010](https://github.com/chenlikun2010) · 2026-07-18

面向企业创作者的产品宣传视频生成 Skill，走"百炼生成能力 + Remotion 代码化合成"路线。输入产品素材目录（产品图 / App 截图 / 实物视频 / Logo / 卖点文案），自动扫描素材 → `bl text chat` 生成分镜和旁白草稿 → 素材整理进 Remotion 工程（必要时 ffmpeg 转 H.264）→ 缺镜头时用快乐马 `happyhorse-1.1-t2v/i2v` 文生/图生视频补镜 → `bl speech synthesize` 生成旁白并测真实时长校准帧数 → 选 warm/guochao/tech 三套风格生成 React/Remotion 组件 → `npx remotion render` 出成片 → `verify.sh` 校验规格。品牌名/字幕统一在 Remotion 叠加（避免 AI 生成文字变形），成片支持结尾循环回片头，适合展厅屏幕播放。

**工具**：百炼 CLI（`bl text chat` / `bl speech synthesize` longanwen_v3 音色 / `bl video generate` happyhorse-1.1-t2v·i2v）+ Remotion + ffmpeg + Node.js

**仓库**：[github.com/chenlikun2010/product-promo-video-skill](https://github.com/chenlikun2010/product-promo-video-skill)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/42)

---

## 高校论文首轮评审 Copilot：DocMind + 百炼生成定位式 Word 批注

**作者**：[@littlebordercollie](https://github.com/littlebordercollie) · 2026-07-16

面向高校老师的论文首轮评审助手。老师上传论文后，先用阿里云 DocMind 解析 `.doc`/`.docx`/`.pdf` 抽取结构化内容，再通过百炼完成格式规则核查 + 专业内容审读，最后产出两份 Word：① 结构化评审报告（分项评分 + 重点问题 + 证据 + 修改建议）；② 原文定位式批注（在可命中的原文附近高亮并插入批注式建议，省去老师反复搜索原文）。系统记录阶段、候选模型、耗时和失败类型，帮老师区分"内容问题"与"服务问题"，辅助首轮评审但不替代最终学术判断。

**工具**：阿里云 DocMind + 百炼 DashScope API（OpenAI 兼容，实测 `kimi-k2.7-code`，候选含 `qwen-plus`）+ Python / FastAPI / python-docx + OSS / SQLite

**仓库**：[github.com/littlebordercollie/bailian-thesis-review-copilot-showcase](https://github.com/littlebordercollie/bailian-thesis-review-copilot-showcase)

![结构化评审结果](https://raw.githubusercontent.com/littlebordercollie/bailian-thesis-review-copilot-showcase/main/assets/02-structured-review.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/43)

---

## 电子衣橱 Digital Cabinet：百炼 Qwen 驱动的 AI 穿搭推荐

**作者**：[@captainold](https://github.com/captainold) · 2026-07-15

给一个纯前端衣橱管理工具（Next.js + IndexedDB）补上了原本"即将推出"的「今日推荐」功能。用户选择场合 + 天气 + 偏好后，AI 分析衣橱里所有衣物的颜色/风格/角色/场合适配度，生成 2-3 套完整搭配方案（含选择理由和穿搭小贴士），并优先推荐穿着次数低的冷门单品来提升衣橱利用率。工程上用 Next.js API Route 做服务端代理保护 API Key，prompt 里只传关键属性不传图片 blob 控制数据量，后端清洗模型偶发的 markdown 包装 JSON 保证输出稳定。

**工具**：百炼 API（OpenAI 兼容接口）+ Qwen-Plus + Next.js 16 API Route

**仓库**：[github.com/captainold/digital_cabinet](https://github.com/captainold/digital_cabinet)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/39)

---

## Anker 录音豆 + YoooClaw：口述一句，Workshop 变成 aistudy.xin 学习页

**作者**：[@UFOyyds](https://github.com/UFOyyds) · 2026-07-12

现场用 Anker 录音豆开录 → 结束后对 YoooClaw 说一句「把本场录音做成学习页并部署进主站」——Agent 自动跑通完整流水线：飞书 CLI 取纪要 → 百炼 CLI 把智能章节改写成 title/blurb/expand/takeaways → Hermes Skill 生成交互式学习页 → Vercel 一键发布。「一个 Skill 顶半个管理后台」，把 Workshop 现场录音变成可检索、可展开、可挂进活动矩阵的学习内容。

**产出**：aistudy.xin 主站 · 本场页面 [2026-07-10-bailian-watcha](https://aistudy.xin/events/2026-07-10-bailian-watcha/)

**工具**：Anker 录音豆 + 飞书 CLI（`lark-cli docs +fetch`）+ 百炼 CLI（`bl text chat` qwen3.7-max）+ Hermes Skill + Vercel CLI + YoooClaw 编排

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/37)

---

## organize-files：本地文件夹安全整理（预览→确认→可恢复）

**作者**：[@xiahaishan](https://github.com/xiahaishan) · 2026-07-10

用 `organize-files` Skill 完成本地电脑文件夹的安全整理：先分析预览，再确认移动，并支持根据清单恢复原位置。重点优化了根目录文件夹保护逻辑——通过 `--protect-root-folder` 指定不希望拆解的项目文件夹名，避免误把 GitHub 项目、软件包、会议资料等完整目录按后缀拆散。

**产出**：整理报告 `report.md` + 移动计划 `plan.json`/`plan.csv` + 可恢复清单 `manifest.jsonl` + 两层分类目录（例：`06_压缩包/文件.zip`）

**工具**：OpenWork / 百炼 CLI + Skill `organize-files` + Python 脚本

![organize-files 效果](https://github.com/user-attachments/assets/742b57d4-9f56-44f3-9002-10bc9af12f6d)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/35)

---

## bl-resume-pro：应届毕业生简历优化 Skill

**作者**：[@summer202607](https://github.com/summer202607) · 2026-07-10

自建 `bl-resume-pro` Skill，帮助应届毕业生输出一份有竞争力的求职简历。两步产出：第一步生成简历诊断报告（个人标识 / 教育背景 / 实习 / 项目 / 技能证书 / 自我评价 / DDI 对齐 / AI 时代规则 八大模块打分 + 缺失项 + 补充建议），第二步基于诊断给出优化后简历（保留 985+海外硕士+政务实践 的胜任力总结，用 STAR 结构重构实习段落，剔除"精通 Office"这类致命虚高描述）。

**工具**：百炼 CLI + 自建 Skill `bl-resume-pro`

![简历优化效果](https://github.com/user-attachments/assets/d66c91b0-f082-4c03-997d-ff7b3ef00c8c)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/34)

---

## chuhai-pricing：跨境电商单品前置财报决算官（9 道财务巡检硬拦截）

**作者**：[@xiaofenggan01](https://github.com/xiaofenggan01) · 2026-07-10

跨境电商财务场景的百炼 Skill，把「单品利润测算」固化成确定性流水线：找价 → 过滤 → 决算 → 财务巡检 / 反推。同一输入永远同一结果、可审计、可批量。核心亮点：① 竞品价取价偏置到 Amazon/eBay/AliExpress/Temu 白名单，按 URL 过滤 + 套装÷件数归一；② `--reverse` 反推模式已知零售价 → 反推各档净利率下最高可接受进价（绿线≥20% / 红线≥10% / 盈亏平衡）；③ 9 道财务巡检硬拦（价格 5 重可信度、同款确认、区间合理、公式自洽）；④ 表格批量核价时任一行缺必填就 `exit 3` 报错，绝不臆造。

**实测**：Sony WH-1000XM5 $348 超 3C 合理区间被 D1 硬拦、异款「silicone phone case」被 C4 同款确认硬拦——真实抓到"搜 A 给 B"。

**工具**：百炼 CLI（`bl vision describe` / `bl text chat` / `bl search web` MCP）+ 自建 Skill `chuhai-pricing`（符合 Anthropic Agent Skill 规范）+ Node.js 零依赖 CSV + HTML/CSS Bento Box 海报

**仓库**：[github.com/xiaofenggan01/chuhai-pricing](https://github.com/xiaofenggan01/chuhai-pricing)

![chuhai-pricing 汇总页](https://github.com/user-attachments/assets/a1293ec9-a768-41d8-9239-48db8ec04f30)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/33)

---

## AI 数字人口播视频工作流：路演展示页

**作者**：[@wanghaoyu070](https://github.com/wanghaoyu070) · 2026-07-03

用百炼 CLI 相关 Skill 搭建一条 AI 数字人口播视频完整工作流：脚本生成 → 数字人口播 → 字幕对齐 → 信息卡片 → 视频包装 → 微信视频号发布适配。产出一个本地 HTML 路演展示页，含项目简介、百炼 CLI 在流程中的位置、能力地图、完整实现链路、数字人形象前后对比，以及可播放的数字人口播成片（H.264 / 约 31 秒），可直接用于演讲或路演。

**工具**：OpenWork / 百炼 CLI + Skill `bailian-cli` + HeyGen 数字人 + MCP 工作流编排

![数字人口播路演页](https://github.com/user-attachments/assets/6c23ef05-63a8-4fb0-b9aa-d89b322d6983)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/28)

---

## 一言成铺（OneWord Store）：一句话跑通电商内容全链路

**作者**：[@solareclipse0130](https://github.com/solareclipse0130) · 2026-06-28

用一句自然语言指令跑通完整电商内容生产线：对 Claude Code 说「给『白桃味0糖气泡水』做一套电商内容」，由它编排百炼 CLI，自动产出商品文案 → 商品主图 → 促销海报 → 口播配音 → 9:16 短视频成片。核心是把 6 步链路固化为 `make-ecom.sh` 脚本——换产品名即可复用。

**产出**：5 类交付物齐全（文案 JSON / 4K 白底主图 / 中文大字促销海报 / CosyVoice 配音 / 竖屏 5 分镜短视频）

**工具**：百炼 CLI（`bl text chat` / `bl image generate` / `bl image edit` / `bl speech synthesize` / `bl video generate`）+ Claude Code 编排 + ffmpeg 合成 + Skills: bailian-cli / video-storyboard / video-marketing / happyhorse-prompt-studio / bailian-model-recommend

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/26)

---

## PetMarketer AI：宠物品牌 AI 营销素材工厂

**作者**：[@jingwenliu123456-coder](https://github.com/jingwenliu123456-coder) · 2026-06-28

基于百炼 CLI 搭建 AI Native 自动化工作流，专为宠物电商品牌设计。输入一个产品名（如"狗包"），3 分钟内串联 5 个 AI 任务，输出全套社交媒体营销素材：KOC 合作策略 → 拍摄 Brief → 15 秒爆款脚本 → AI 产品场景图 → 投放素材包。将传统 3 天 / 1000 元+ 的流程压缩到 3 分钟、几乎零成本。

**工具**：百炼 CLI（`bl text chat` / `bl image generate` / `bl video generate`）+ Shell 脚本自动化

![PetMarketer AI](https://github.com/user-attachments/assets/ed91a579-cc81-4712-8e60-ba302948e6e1)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/24)

---

## 镜准（JINGZHUN）：商品视觉质检与自动改稿

**作者**：[@XiaoyangBi](https://github.com/XiaoyangBi) · 2026-06-28

面向电商商品主图和短视频素材的视觉质检与自动改稿应用。三步工作流：上传素材 → 视觉质检（综合评分 + 问题列表 + 证据） → 自动改稿（重制主图 / 改稿脚本 / 字幕精简 / 分镜）。支持淘宝、天猫、京东、抖音、小红书、拼多多等平台规则适配。

**工具**：TRAE + 百炼 CLI（`blVisionDescribe` / `blChatJSON` / `blImageEdit`）+ qwen3-vl-plus / qwen3.7-max / qwen-image-2.0 + Next.js

![镜准截图](https://github.com/user-attachments/assets/9f3277d9-9c12-4ff8-99fc-7a75e82dd7f3)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/23)

---

## 海外社媒配图生成工作流：Instagram 生活场景产品图

**作者**：[@Celestebz](https://github.com/Celestebz) · 2026-06-28

用一条自然语言需求把产品图改造成 Instagram 生活方式场景图，同时生成英文 caption、hashtags、alt text 和发布建议。独创三层 prompt 架构：事实层（锁定主体特征不跑偏）+ 画面层（定义生活空间、道具、光线）+ 风格层（控制 Instagram 原生审美和低广告感），把电商白底棚拍变成"卧室练习角"生活内容。

**工具**：OpenWork / Codex + 百炼 CLI（`bl` + qwen-plus + qwen-image-2.0）+ 自定义脚本 `social-visual-pack`

![海外社媒配图](https://github.com/user-attachments/assets/83d6883a-378d-4ba5-8937-8bb47d8b3d12)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/22)

---

## GEO Agent：从审计到内容创建的一键生成工作流

**作者**：[@SevenAILab](https://github.com/SevenAILab) · 2026-06-28

用百炼 CLI 串联两个自建 Skill（geo-audit + geo-content-forge），对 sevenailab.com 完成完整的 GEO（生成式引擎优化）审计 + 内容创作 + AI 配图全流程：自动抓取 6 个页面 → 分析 robots.txt / sitemap / llms.txt → 4 类 AI 可见度基线测试（AIVO 评分 52/100）→ 基于缺口自动创作 GEO 优化博客 → 17 项质量门全部通过 → 6 章节配图 → 两份可展示 HTML。

**工具**：百炼 CLI + 自建 Skill（geo-audit / geo-content-forge）+ 百炼文生图 + Claude Code

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/20)

---

## 电商产品出图 Skill：从需求到生图全流程自动化

**作者**：[@streetlightstartupnotes](https://github.com/streetlightstartupnotes) · 2026-06-28

用 Clacky AI Agent 自动创建「电商产品出图」Skill，实现需求追问 → 素材分析 → Prompt 工程 → 百炼 CLI 生图 → 迭代优化全流程。内置 7 层质量基底词 + 8 大品类风格词库 + 6 大平台规则适配；支持模糊反馈精准映射（"太假""不够高级"→ prompt 调整）；支持单图迭代和 5 图标准电商套图模式。

**工具**：Clacky AI Agent + 百炼 CLI `bailian image generate --n 3 --watermark false --prompt-extend false` + ecommerce-image Skill

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/19)

---

## qwen-subtitle：视频字幕智能纠错 + 克隆原声多语言配音

**作者**：[@oil-oil](https://github.com/oil-oil) · 2026-06-28

给录屏/教程/讲解类视频做字幕智能纠错 + 多语言出海配音。核心洞察：录屏视频里正确的词往往就写在屏幕上，让 qwen-vl 按时间戳看帧读屏幕文字来纠正 ASR 错误（`Claude` 听成 `cloud`、`Codex` 听成 `class q`）——纯语音工具永远做不到。实测 7 分钟录屏 78 句，14 处修改中 13 处正确。

**工具**：百炼 CLI 全程驱动 5 步（`bl speech recognize` → `bl text chat` + `bl vision describe` 看屏纠错 → 顺滑 → 翻译 → `bl speech synthesize` 克隆配音）

**仓库**：[github.com/oil-oil/qwen_subtitle](https://github.com/oil-oil/qwen_subtitle)（MIT）

![qwen-subtitle 预览](https://raw.githubusercontent.com/oil-oil/qwen_subtitle/main/assets/preview-multilang.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/18)

---

## Curation Studio：为电商单品生成策展内容

**作者**：[@DawnLck](https://github.com/DawnLck) · 2026-06-28

用 Antigravity + 百炼 CLI 搭建顶级视觉品味的电商内容策展工坊。用户上传商品照片 + 简短说明 → Qwen-VL 提取主体特征 → 三个专业电商镜头 Prompt（全景意境 / 宏观特写 / 生活日常）并行生图 → HappyHorse 烘焙 5 秒光影运镜视频 → CosyVoice 朗读杂志解说文案 → React + Framer Motion 编排 Bento Grid 展示面板（3D 深度随动 + 发光打字机 + 分镜切换视差 + 沉浸式有声视频剧院弹窗）。

**工具**：百炼 CLI（`bl vision describe` / `bl image generate` / `bl video generate` / `bl speech synthesize` / `bl text chat`）+ React + Tailwind CSS v4 + Framer Motion + Antigravity

![Curation Studio](https://github.com/user-attachments/assets/d6f58f25-01e9-4464-803b-7697bd0ae0f9)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/17)

---


## 儿童趣味动物视频生成：从一个词到 HappyHorse 样片

**作者**：[@boblank](https://github.com/boblank) · 2026-06-11

做了一个适合线下活动演示的儿童趣味动物视频生成 workflow：用户只需要输入一个动物词（如「狐獴」），Agent 先用 qwen3.7-max 规划一个简单、阳光、儿童友好的小故事和三拍视频脚本，再通过 `happyhorse-prompt-studio` 收敛成 T2V prompt，最后调用 `bl video generate --model happyhorse-1.0-t2v` 生成 5 秒动画样片。

**完整链路**：输入动物词 → 儿童内容安全边界 → qwen3.7-max 生成脚本 → happyhorse-prompt-studio 收敛 prompt → `bl video generate` → ffprobe/ffmpeg QA → 成片

**产出**：5 秒 / 1920×1080 / H.264 / 温暖童话动画风（圆润小狐獴抱红苹果）

**工具**：百炼 CLI `bl video generate` + bailian-cli / bailian-docs-llm-wiki / happyhorse-prompt-studio Skills + ffmpeg

> [查看原始 PR →](https://github.com/modelstudioai/modelstudioai.github.io/pull/8)

---

## AI 竞技场：跨厂商模型对比平台

**作者**：[@Unicosmos](https://github.com/Unicosmos) · 2026-06-11

开发了一个跨厂商 AI 模型对比平台。通过阿里云百炼统一 API 同时调用 DeepSeek、Kimi、GLM、MiniMax、Qwen 等厂商的 38 个模型，在文本对话、图片理解、文生图三个场景下对比输出质量、响应速度和成本。

**核心特性**：SSE 流式输出逐 token 实时渲染 · 模型按 8 厂商分组自由勾选 · 同步滚动联动所有结果卡片 · 每模型显示预估费用 · 启动时自动探测 38 模型可用性

**工具**：OpenWork + bailian-model-config / model-arena-pattern Skills + Node.js + DashScope API

![AI竞技场截图](https://github.com/user-attachments/assets/bf3bd1ca-47f2-44ee-b2c0-f6c8b65b724e)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/13)

---

## AI Vlog 全自动生产线：从活动图片到成片一条命令搞定

**作者**：[@jamiu799](https://github.com/jamiu799) · 2026-06-11

用 Claude Code + 百炼 CLI 搭建了一条活动 Vlog 全自动生产线：从图片直播平台批量爬取活动现场 13 张照片，通过 AI 智能分析筛选并按叙事结构分类，然后调用 `bl video generate --image` 生成 I2V 动态视频、`bl speech synthesize` 生成全程配音、`bl text chat` 撰写旁白文案，最后用 ffmpeg 合成字幕 + BGM，端到端产出一支 59 秒的完整活动 Vlog。

**产出**：59 秒 / 1920×1080 / 3 个 I2V 动态片段 / CosyVoice 配音 / 全程中文字幕 / 轻快电子 BGM

**工具**：百炼 CLI（`bl video generate` / `bl speech synthesize` / `bl text chat`）+ Claude Code + ffmpeg + Node.js 爬虫

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/12)

---

## group-daily（WaytoAGI-EDU）：教育社群故事化群日报

**作者**：[@Elianyang](https://github.com/Elianyang) · 2026-06-11

把 `group-daily` Skill 改造成教育版：将用户主动提供的群聊素材整理成一份故事化群日报，并输出带 WaytoAGI-EDU 视觉体系的 HTML + PNG 长图。强调低风险离线素材模式——公开仓库不包含微信群原始记录。

**工具**：百炼 CLI `bl text chat`（素材 → story.json）+ Python 渲染脚本 + WaytoAGI-EDU 视觉素材

**仓库**：[github.com/Elianyang/group-daily-waytoagi-edu](https://github.com/Elianyang/group-daily-waytoagi-edu)

![WaytoAGI-EDU群日报效果图](https://raw.githubusercontent.com/Elianyang/group-daily-waytoagi-edu/main/assets/examples/waytoagi-edu-daily-style-confirmed.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/11)

---

## MatchA：Agent-to-Agent 智能人才匹配平台

**作者**：[@zjupump](https://github.com/zjupump) · 2026-06-11

使用百炼 CLI 完成了 MatchA（Agent-to-Agent 智能人才匹配平台）的产品原型设计与功能验证。通过构建求职者 Agent 与企业招聘 Agent，实现匿名技能画像匹配、Agent 自动协商、授权访问及智能推荐等功能。

**核心流程**：求职者 Agent 发布匿名求职意图 → 企业 Agent 发布岗位需求 → 双方 Agent 自动匹配 → 企业发起访问请求 → 求职者授权 → Agent 自动协商建立联系

**工具**：百炼 CLI + DeepSeek + Python + A2A 协作框架

![MatchA截图1](https://github.com/user-attachments/assets/97eba8a4-e3dc-4052-979a-91c644a4010c)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/9)

---

## AI 模拟辩论

**作者**：[@soulroskars](https://github.com/soulroskars) · 2026-06-11

做了一个「辩论场」AI 工作流——输入辩题，自动编排正反方辩手 + 总结员三个角色，用百炼 CLI 的 `bl text chat` 驱动，完成论点准备→立论陈词→攻防交锋→终局总结的完整辩论流程。辩题为「AI 的迅猛发展提升/降低了人类创作者的价值」。

**产出**：正方 3 条核心论点 + 反方 3 条核心论点 + 双方立论 + 2 轮攻防 + 总结员每轮跟评，输出留存为 JSON 记录

**工具**：百炼 CLI `bl text chat --messages-file` + Node.js 编排脚本

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/6)

---

## 未来提示：反向个人知识库

**作者**：[@ggly](https://github.com/ggly) · 2026-06-11

产品定位是一个反向个人知识库：不帮用户囤知识内容，而是从散落在各处的 AI 对话记录里，识别反复被外包给 AI 的能力缺口、概念盲区、流程缺口和判断盲区，然后生成可直接复制到任意 AI 工具中继续追问的高质量提示词。让人类主动学习，AI 引导。

**工具**：百炼 CLI（`bl text chat` / `bl knowledge retrieve` / `bl search web`）+ Vite + React + TypeScript + Tailwind CSS

![未来提示截图1](https://github.com/user-attachments/assets/1f6b7fea-5e0b-4024-89dd-9daa831de872)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/5)

---

## 文风提炼：给自己的文字做一次全面体检

**作者**：[@Danheng0502](https://github.com/Danheng0502) · 2026-06-11

把 11 篇不同类型的文章从头到尾读了一遍，然后提炼出一份约 2000 字的文风参考指南（11 个章节）。发现了自己都没意识到的"技能点"：书信体+非人类视角+第二人称拟人（猫视角下的"银色太阳""推推游戏"），以及用不必要的精确数字承载无法言说的分量（"想起你足足三十七次""四百零七片落叶"）。

**最大收获**：对自己文字的判断常常和读者不一样。只凭记忆写文风总结大概率会偏，必须回到原文逐篇读、逐句看。

**工具**：OpenWork / 百炼 CLI + 文档提取脚本

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/3)

---

## SEO Audit Full：对百炼控制台做一次完整 SEO 审计

**作者**：[@JeffLi1993](https://github.com/JeffLi1993) · 2026-06-11

使用 `seo-audit-full` Skill 对百炼控制台页面做了一次完整 SEO Audit。产出结果是一份完整 SEO 审查报告，包含页面基础信息检查、Title / Description 分析、页面内容结构分析、H 标签与语义结构检查、页面可访问性问题、技术 SEO 问题和可执行的优化建议。

**工具**：OpenWork + Skill `bysocket/seo-audit-full`（`npx skills add https://modelscope.cn/skills/bysocket/seo-audit-full`）

![SEO Audit截图](https://github.com/user-attachments/assets/97b93856-7118-49a7-b32b-da05990c01b5)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/1)

---

## 📝 Prompt / Skill 模板

社区成员贡献的可复用提示词与 Skill 模板。把它复制进任意 AI Agent（OpenWork / 百炼 CLI / Cursor / Claude Code 等），按你的场景改写后即可使用。

### Java 复习导师：零基础的 20 年教龄老师

**作者**：[@cyc120](https://github.com/cyc120) · 2026-06-24
**适用场景**：跟着课程大纲循序渐进学 Java，需要一个有耐心、会用大白话+生活例子讲抽象概念的导师陪练
**用法**：把下方提示词作为系统消息（或 Skill 的 `description`）塞进任意 AI Agent，开新对话即可启动

```markdown
# 角色设定
你是一位有 20 年教学经验的资深 Java 老师，学生是零基础的初学者。

# 教学原则
1. 循序渐进：从最基础的概念讲起，不跳步骤，不假设学生已经知道任何编程知识。
2. 通俗易懂：用生活中的例子来解释抽象概念，避免堆砌术语。
3. 代码先行：每个知识点都必须配合简单可运行的代码示例。
4. 鼓励提问：永远不要因为问题"太简单"而表现出不耐烦，零基础的问题都是好问题。
5. 及时总结：每讲完一个知识点，用一两句话总结核心要点。

# 回复规范
- 使用中文回复，代码注释也用中文。
- 遇到专业术语时，先用大白话解释，再给出术语。
- 如果学生问的问题涉及还没学过的知识，先简要说明，并告诉他"这个后面会详细学"。
- 解释代码时，逐行或逐块讲解，不要一次性甩出大段代码。

# 课程大纲（《面向对象程序设计 Java》10 章）
第 1 章·Java 语言概述：JDK / IDEA、Hello World、编译与运行。
第 2 章·编程基础：变量、数据类型、运算符、if/switch、while/for、break/continue、Scanner。
第 3 章·类和对象：类与对象关系、构造方法、方法重载、this、static、访问权限。
第 4 章·继承与多态：extends、方法重写、super、多态、抽象类、interface、final。
第 5 章·数组与字符串：一维 / 二维数组、排序、String、StringBuilder。
第 6 章·图形用户界面：Swing 组件、布局管理、事件处理。
第 7 章·异常处理：try-catch-finally、常见异常、自定义异常。
第 8 章·文件和流：文件读写、缓冲流、文件复制。
第 9 章·集合与泛型：ArrayList、HashMap、HashSet、Iterator、泛型。
第 10 章·多线程：线程创建、生命周期、同步、通信。

# 工作方式
- 学生告诉你当前学到第几章，你就从那一章的下一个知识点开始；
- 每讲完一个知识点先给"一句话核心要点"，再给"可运行的最小代码示例"，最后给"一道小练习"；
- 如果学生卡在某个概念，主动换一个生活类比再讲一遍。
```

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/4)

---

## 如何贡献你的案例

在 [Issues](https://github.com/modelstudioai/modelstudioai.github.io/issues/new) 中提交你的案例，包含以下内容即可：

**A. 真实案例**（推荐）
1. **我做了什么** — 简述你用了哪个 Skill / 命令，完成了什么任务
2. **使用的工具** — OpenWork / 百炼 CLI / 具体 Skill 名称
3. **效果展示** — 截图或描述你的产出结果
4. **踩坑记录**（可选） — 遇到了什么问题，怎么解决的

**B. Prompt / Skill 模板**
1. **适用场景** — 这个模板解决什么问题、适合什么样的人
2. **完整提示词** — 直接可复制的角色设定 / 工作方式 / 输出格式
3. **建议用法**（可选） — 推荐搭配的工具、模型、Skill

我们会在 2–3 天内审核并收录到本页面。

---

> 案例合集持续生长中。每场 Workshop 和社区活动后，我们会邀请参与者分享自己的实践。
