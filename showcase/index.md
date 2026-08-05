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

## CLIMATERIA · 气候万象志：AI 驱动的气候叙事与地理科普交互网站

**作者**：[@SunnyLiyuxin](https://github.com/SunnyLiyuxin) · 2026-08-05

以全球真实气候分布图为底图，为 27 种气候类型建立「双血脉」谱系（父系按气候形态、母系按温度带），点击地图圆点即可展开四折经折装详情卡（灵性 / 灵力 / 血脉 / 图鉴，含「敲黑板」地理考点）。接入阿里云百炼通义千问，让每个「气候之灵」成为可自由对话、可实时出题考校、带上下文记忆的智能体；并用通义万相文生图生成角色专属卡牌、CosyVoice 语音合成让角色「开口说话」。前端纯原生 HTML/CSS/JS（零框架），后端 Node.js 零依赖代理统一托管百炼 API Key、避免凭证暴露，AI 不可用时自动降级为预设对话。

**工具**：阿里云百炼（DashScope，Provider `aliyun`）— 通义千问 `qwen-plus`（对话 / 出题 / 记忆，SSE 流式）+ 通义万相 `wanx2.1-t2i-turbo`（文生图）+ CosyVoice（语音合成）+ 原生 HTML/CSS/JS + Node.js 代理

![CLIMATERIA 气候万象志](https://github.com/user-attachments/assets/20e5e166-ae94-4018-aa14-16a165994cb2)

**在线体验**：[116.62.139.39:3000](http://116.62.139.39:3000/) · **仓库**：[github.com/SunnyLiyuxin/CLIMATERIA-](https://github.com/SunnyLiyuxin/CLIMATERIA-)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/81)

---

## 一起馋修：把「忍住嘴馋」变成打卡陪伴的戒馋小工具

**作者**：[@dengdengli92](https://github.com/dengdengli92) · 2026-08-05

通过与通义千问自然语言沟通形成 demo 与初步 PRD，结合「打禅七」理念（谐音「馋修」）把自律做成轻量社交玩法——好友间相互分享、调侃监督，围绕「馋友 / 馋历 / 馋帐 / 馋期 / 打馋」等梗构建戒馋打卡体验，让忍住嘴馋这件事轻松玩起来。

**工具**：OpenWork / 百炼 CLI（阿里云百炼）+ 百炼 `Qwen3.7-max` + `minitool-zip-builder` Skill + deepseekV4-flash / 灵光全模态 AI 助手 / codex / PS

![一起馋修](https://github.com/user-attachments/assets/6746324f-25ac-45e9-b133-947ca59888a5)

**在线 Demo（小红书小工具）**：[xhslink.cn/o/A4VxB3XoT7A](http://xhslink.cn/o/A4VxB3XoT7A)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/80)

---

## 电商线框策略工作台 Ecommerce Wireframe Strategist

**作者**：[@ChecheChat](https://github.com/ChecheChat) · 2026-08-04

面向电商运营与设计师的纯文本分析 Skill，把主图 / 详情页 / 活动页设计前的隐性判断整理成五个连续阶段：资料台 → 调研台 → 策略台 → 线框台 → 复盘台。Skill 不生成最终图片、也不连接电商 / 投放平台 API，专注设计前后的决策质量——所有结论区分「事实 / 共识 / 推断 / 机会 / 待验证」，核心策略必须可追溯到用户提供的材料；并设「资料台」阶段门禁，资料不完整时先输出已知 / 缺失 / 冲突 / 待验证假设，避免凭常识硬出线框。线框策略落到每个模块的目的、主信息、支撑证据与验收标准，上线后可继续录入数据做复盘，为下一版建议 1-2 个最小测试变量。

**工具**：OpenWork / 百炼 CLI + 阿里云百炼 `qwen3.7-plus` 多模态模型 + Skill `ecommerce-wireframe-strategist` + Markdown / YAML / Mermaid 结构化工作流

**仓库**：[github.com/ChecheChat/ecommerce-wireframe-strategist](https://github.com/ChecheChat/ecommerce-wireframe-strategist)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/76)

---

## Until · 将至：以「准备优先」为核心的 iOS 事件倒数 App（已上架）

**作者**：[@gavinz0228](https://github.com/gavinz0228) · 2026-08-04

一款「准备优先」的事件倒数 iOS App：不仅显示距旅行 / 考试 / 婚礼 / 生日还有多少天，还为每个事件挂独立的任务、里程碑与准备计划，持续追踪完成进度并清楚提示下一步该做什么。支持从 Apple Calendar 导入、Widget 展示近期事件与进度、App Intents、Deep Link、中英双语切换，已完成 App Store 归档上传与上架。开发中通过 Codex CLI 自定义 `model_providers` 接入阿里云百炼的 Qwen coder 系列模型完成编码与迭代。

**工具**：阿里云百炼 Qwen coder 模型（`qwen3-coder-480b-a35b-instruct` / `qwen3-coder-plus` / `qwen3-coder-flash`，经 Codex CLI 自定义 provider 调用）+ SwiftUI / SwiftData / WidgetKit / App Intents / EventKit + computer-use / xcodebuild / simctl

![Until 将至](https://github.com/user-attachments/assets/29c7c86c-d6df-443d-8c8c-6190f20fe5c0)

**仓库**：[github.com/gavinz0228/until](https://github.com/gavinz0228/until)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/74)

---

## 千川素材结构拆解 Skill：把一条短视频沉淀成结构化的素材复盘报告

**作者**：[@bianzigege](https://github.com/bianzigege)（辫子哥哥）· 2026-08-04

面向电商商家、千川投手和素材团队的本地视频拆解 Skill。用户只需提供一条短视频，Skill 先在本地完成预处理，再调用阿里云百炼多模态模型理解视频关键帧，最终输出一份完整的素材结构拆解报告：素材概览（时长 / 尺寸 / 音频 / 真人出镜 / 商品展示）、前 3 秒开场画面与钩子类型、逐镜头时间轴、关键画面 / 字幕 / 口播分离、商品卖点 / 用户痛点 / 使用场景 / 目标人群 / CTA、脚本结构与可复用素材模板，并按「品类-品牌-商品-核心卖点」归档，一条视频对应一份报告，可选同步飞书。作者刻意划清边界：只分析内容结构，不判断真实消耗 / ROI / 成交；模型只依据关键帧、字幕和口播判断，无法确认的字段留空、不把推测写成事实。

**工具**：百炼 CLI + 阿里云百炼 `qwen3.7-plus`（多模态视频理解）+ Skill `qianchuan-material-breakdown-bailian` + Python / FFmpeg / FFprobe / Whisper / JSON Schema / 飞书文档与云盘

**仓库**：[github.com/bianzigege/qianchuan-material-breakdown-skill-bailian](https://github.com/bianzigege/qianchuan-material-breakdown-skill-bailian)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/73)

---

## 一针见血？Needle Roulette：手机浏览器里的 3D 互动扎针小游戏

**作者**：[@ly-tt](https://github.com/ly-tt) · 2026-08-03

一款可直接在手机浏览器运行的 3D 互动小游戏。玩家旋转、缩放并观察 3D 手部模型，根据穴位提示完成五次「扎针」，系统结合落点距离、手心 / 手背方向和触发区域，产生正常刺激、出血、神经刺激、青紫、碰到硬组织等不同结果，并用粒子、闪光、手部抖动、颜色变化、音效与剧情对白反馈。游戏接入阿里云百炼 Workflow 完成三件事：生成虚拟患者（姓名 / 年龄 / 性格 / 怕疼程度 / 血管难度 / 开场对白）、生成五针疗程总结、维护连续疗程状态（疼痛、出血、青紫、麻木、信任值持续累积并影响最终报告）。为保护 API Key，作者用阿里云 Function Compute 搭建服务端代理，加入 CORS、输入校验、限流、超时控制、JSON Schema 校验、结构化日志与本地 fallback，前端不直接接触百炼 API Key。

**工具**：阿里云百炼（大模型节点 + 应用 Workflow：`needle-generate-patient` / `needle-generate-report`）+ React / TypeScript / Vite / React Three Fiber / Three.js + 阿里云 Function Compute + 阿里云 OSS 静态托管

![一针见血 游戏界面](https://github.com/user-attachments/assets/ea3d4b9c-6035-4ee9-bcce-7efa03995d17)

**在线 Demo**：[rongmomo.lyshowcase.com](https://rongmomo.lyshowcase.com/) · **仓库**：[github.com/ly-tt/RongMoMo](https://github.com/ly-tt/RongMoMo)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/71)

---

## OneTrail 一径：把一次徒步做成「先懂人、再懂路」的完整决策助手

**作者**：[@eurekaneon](https://github.com/eurekaneon)（与 [@RealTapeL](https://github.com/RealTapeL)）· 2026-08-03

一款徒步路线规划助手，把「周末想去徒步却因信息散乱而放弃」的真实场景，重构成一个完整决策过程：用户填写日期、目的地、人数、预算、体能、兴趣和已有装备后，得到的不是一堆搜索结果，而是「为什么推荐这条路、有什么风险、怎么到、要带什么」的可执行答案，并从推荐串联到路线详情、加入计划、执行助手，形成从「想去」到「出发」的闭环。技术上用阿里云百炼 Agent 承载自主路线规划：Agent 把自然语言需求整理成结构化约束，按需调用高德 Amap Maps MCP 查天气 / 位置 / 交通，用自定义 MCP 接入路线库、偏好、历史、补给点与装备目录；百炼知识库承载路线说明并用 `text-embedding-v4` 做语义召回、`qwen3-rerank` 二次排序；主模型 `qwen3.7-plus` 负责需求理解、工具选择、候选分析、风险摘要与推荐理由生成。后端距离 / 爬升 / 耗时 / 难度 / 天气等硬约束做安全兜底，外部数据缺失时明确提示依赖不可用、不虚构。产品用暗黑像素风把徒步做成一次可玩的探索。

**工具**：阿里云百炼 Agent（主模型 `qwen3.7-plus`）+ 百炼知识库（`text-embedding-v4` 向量召回 + `qwen3-rerank` 重排）+ 自定义 Skill / MCP + 高德 Amap Maps MCP 与 Web Service API + Vue 3 / Capacitor + FastAPI / PostgreSQL

![OneTrail 一径界面](https://github.com/user-attachments/assets/6e8c1e43-40f3-45d4-82af-02e5d116bc96)

**在线 Demo**：[150.158.126.172:8082](http://150.158.126.172:8082)（演示账号 admin@onetrail.dev / admin123456）· **安卓 APK**：[v0.3.0](https://github.com/RealTapeL/Onetrail/releases/tag/v0.3.0) · **仓库**：[github.com/RealTapeL/Onetrail](https://github.com/RealTapeL/Onetrail)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/69)

---

## 宠念：让离世宠物 AI 陪聊、让流浪动物被看见、让毛孩子找到玩伴

**作者**：[@Bowen-Tian-0305](https://github.com/Bowen-Tian-0305) · 2026-08-02

一个覆盖「宠物离世后」情感陪伴场景的 H5 应用，同时打通流浪救助与宠物交友三条主线。彩虹桥 AI 数字分身把建档时选的 14 种性格标签直接注入角色 Prompt，配合情感感知 / 场景匹配 / 性格筛选 / 万能兜底四层对话路由，让「傲娇+贪吃」的猫和「温柔+粘人」的狗对话风格截然不同；再用纯 CSS/DOM 手绘像素上海地图承载「宠物层 / 流浪层 / 天堂层」三图层切换与拍照上传领养闭环。全程用百炼 CLI 接入 `qwen-max` 完成产品定位 brainstorming、四层对话引擎与像素设计系统等全部代码生成，`qwen-image-2.0` 生成 8 张卡通宠物头像，`cosyvoice-v3-flash` 生成宠物语音 demo。

**工具**：百炼 CLI（`bl` 调 `qwen-max` 做代码生成 + 方案设计）+ `qwen-image-2.0` 头像生成 + `cosyvoice-v3-flash` 语音合成 + 纯静态 H5

![宠念首页](https://github.com/user-attachments/assets/10b66c9b-6cfa-439d-83f4-85b4048c4fae)

**在线 Demo**：[chong-nian](https://bowen-tian-0305.github.io/chong-nian/) · **仓库**：[github.com/Bowen-Tian-0305/chong-nian](https://github.com/Bowen-Tian-0305/chong-nian)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/68)

---

## Storydex：长文剧情一致性创作工作台

**作者**：[@Septemc](https://github.com/Septemc)（TensorHub 组织，与 [@Natra1n](https://github.com/Natra1n)）· 2026-08-02

面向长篇小说创作者的本地优先（Local-First）写作工作台。章节正文、世界观、角色资料、WIKI 与创作历史围绕同一项目组织，自研 Rust Agent 基座 `storydex-coomi-bridge` 在理解本轮创作意图后读取项目上下文，执行续写、整理、审阅与剧情冲突检查，支持 128K/256K/512K 上下文窗口；配合面向中文优化的全文检索 + 滚动摘要 + 旧文召回 + WIKI 注入，让 Agent「先查证再落笔」，并用内置 MinGit 做每轮 Diff 审阅与历史回滚。作者用五个月打磨，全程通过 OpenWork / 百炼 CLI 接入通义千问作为主力 AI 编程搭档，协助编写并重构 `coomi_agent_service` 等 60+ 后端核心服务、SSE 流式协议、覆盖率 ratchet 门禁，以及从 Python 到 Rust 运行时的跨语言大重构。

**工具**：OpenWork / 百炼 CLI（接入通义千问做后端 / 前端 / Rust Agent 桥接层开发）+ FastAPI + Vue 3 + Rust + Electron

**开源仓库**：[github.com/TensorHub-ORG/Storydex](https://github.com/TensorHub-ORG/Storydex) · [介绍视频](https://www.bilibili.com/video/BV1WmNy62EeB/) · [项目官网](https://storydex.septemc.com/)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/67)

---

## AI觅：用阿里云百炼重构「先表达需求，再由 AI 匹配」的社交流程

**作者**：[@wzczv](https://github.com/wzczv) · 2026-08-01

一款已在中国区 App Store 上架的 AI 深度需求匹配社交 App。传统社交要求用户反复左滑右滑，AI觅把流程改为「用一句自然语言或语音说明想找什么样的人，再由 AI 在后台双向匹配」。百炼能力贯穿核心链路：通义千问负责需求理解、核心诉求提炼、用户画像结构化与双向匹配判断；`text-embedding-v3` 把需求与画像转成 1024 维向量交给 pgvector 做候选召回；`qwen-max` 在通过双向评分门槛后生成共同点、匹配解读与建议开场白（失败降级为规则模板，不阻塞结果）；`qwen3-asr-flash` 完成语音输入转写。全部通过 DashScope HTTP API 接入产品代码链路，支持找对象 / 找搭子 / 找合伙人 / 语伴 / 球友等真实连接场景。

**工具**：阿里云百炼（DashScope HTTP API）— 通义千问 + `text-embedding-v3` + `qwen-max` + `qwen3-asr-flash` + pgvector

![AI觅演示视频封面](https://github.com/user-attachments/assets/cfdf4693-a1ad-4434-bfdc-4e46b3b03d0e)

**官网**：[meetaimi.com](https://meetaimi.com/) · [中国区 App Store](https://apps.apple.com/cn/app/ai%E8%A7%85/id6775722328)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/64)

---

## 叙镜 StoryLens：小说结构与读者旅程可视化分析

**作者**：[@fanjack510-ctrl](https://github.com/fanjack510-ctrl) · 2026-08-01

面向小说作者与写作学习者的本地优先 AI 拆书工具。把「凭感觉判断一章写得好不好」变成可检查、可追溯的分析流程：导入章节 → 自动识别场景边界并允许人工审阅修正 → 用阿里云百炼通义千问分析场景作用 / 剧情推进 / 读者体验 → 把阅读张力、情绪变化、节奏速度转成可视化读者旅程曲线 → 每个判断都能回到对应原文证据，而非只给笼统结论 → 支持 PNG/JSON/Markdown 导出。采用本地优先架构，用户用自己的百炼 API Key，私人稿件不上传自建服务器。作者特别强调：模型输出不天然稳定，因此没有直接展示模型回答，而是加了结构校验、阶段化分析、错误反馈与任务恢复机制。

**工具**：阿里云百炼 API（Provider `aliyun_qwen_plus`，默认 `qwen3.7-plus` 做长文本理解与结构化抽取）+ React/Vite/Tauri + FastAPI + SQLite

![StoryLens 分析界面](https://github.com/user-attachments/assets/ef896ad3-4653-4d44-a674-8d2626427837)

**仓库**：[github.com/fanjack510-ctrl/StoryLens](https://github.com/fanjack510-ctrl/StoryLens) · [Windows 安装包 v1.1.2](https://github.com/fanjack510-ctrl/StoryLens/releases/tag/v1.1.2)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/63)

---

## 贝克街档案馆 · The Baker Street Files：多页面沉浸式侦探体验站

**作者**：[@SherlockHolmes006](https://github.com/SherlockHolmes006) · 2026-07-31

以福尔摩斯与古典推理为主题，用 AI Agent 做出一座纯静态 HTML/CSS/JS 的多页面沉浸式侦探体验站，而非单页展示页。核心体验包括维多利亚雾都氛围首页、悬案卷宗（现场勘察 / 物证 / 审讯 / 指认真凶）、可拖拽卡片 + 红绳连线验证因果链的证据板、三关测验与等级评定的演绎训练室，以及跨页进度收藏。视觉参考 bund-summit-2026 的版式语言，用雾都卷宗风格重新讲故事，已部署到自有域名并通过 GitHub Actions 自动发布。全程用百炼 CLI（`bl`）调用通义系列模型完成内容理解与生成。

**工具**：阿里云百炼 CLI（`bailian-cli` / `bl`，Agent Skills）+ 通义系列模型 + Cursor（Agent 载体）+ GitHub Actions + 宝塔静态托管

![贝克街档案馆首页](https://github.com/user-attachments/assets/1d6121e5-d37d-4ab3-930a-b80bb6294f27)

**在线体验**：[detective.secondtonone.top](https://detective.secondtonone.top/) · **仓库**：[github.com/SherlockHolmes006/detective](https://github.com/SherlockHolmes006/detective)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/60)

---

## 知价簿：接入百炼 Qwen3.6-Flash 的 AI 个人价格本

**作者**：[@wholubo](https://github.com/wholubo) · 2026-07-31

一个解决「记录价格太麻烦、面对不同规格报价不知道哪个更划算」的微信小程序。AI 拍照记价：拍价签 / 包装 / 小票后调用 `Qwen3.6-Flash` 多模态识别，自动提取商品名称、品牌、规格、数量、价格、门店与日期并填入表单；报价比一比：一次输入多组报价（如「140g 9.9 元，160g 12.9 元，500g 29.9 元」），由 `Qwen3.6-Flash` 做文本分析识别价格与规格，再由后端单位换算统一成单位价格排序并给出购买建议。整体流程为「拍照或输入报价 → AI 识别分析 → 自动填写或生成对比 → 保存为个人价格记录」，另有历史价格、价格趋势与消费洞察。

**工具**：百炼 CLI（项目分析 / 前后端开发 / 问题排查）+ 阿里云百炼 `Qwen3.6-Flash`（多模态图片识别 + 文本分析）+ 微信小程序

![知价簿首页](https://github.com/user-attachments/assets/20f6c4d2-9bf6-42b5-bfe1-8d21ac370655)

**体验**：微信搜索小程序「知价簿」

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/57)

---

## 证据钉：把售后材料整理成「主张-证据-承诺-矛盾-未知」可追溯证据图

**作者**：[@MaxxxDong](https://github.com/MaxxxDong) · 2026-07-30

把售后截图、票据、聊天记录和承诺，整理成「主张—证据—承诺—矛盾—未知」五类节点的可追溯关系图。每条结论都能回到原始图片或页码；冲突不会被模型擅自抹平，无法确认的内容明确保留为「未知」，避免把不完整材料补成看似完整的故事。用百炼 CLI 调通义千问视觉模型完成真实 PNG 材料理解，再由本地确定性规则完成结构校验、证据锚点和安全输出——模型负责理解，代码负责守边界。工程侧跑通 24/24 本地测试、14 项安全语料、37/37 发布验收。作者也把「真实模型探针」与「合成回归测试」分开记录，坦诚区分工程链路通过与真实识别准确率。

**工具**：百炼 CLI 1.12.0（`bl` 调 `qwen3.7-plus` 视觉模型做 PNG 材料理解）+ 本地确定性证据图与安全校验 + Python + 静态 Web 演示

**在线 Demo**：[证据钉演示（合成材料）](http://211.159.225.175/bl/)

![证据钉五类节点可审计输出](https://github.com/user-attachments/assets/80146eeb-91cc-4fb2-9b73-df2e68a66a21)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/55)

---

## EvidenceGate OCR：给百炼文档 AI 输出加一道「可复核门禁」

**作者**：[@2487238628](https://github.com/2487238628) · 2026-07-30

不是再造一个 OCR 模型，而是站在百炼模型与业务动作之间，把模型输出当成「不可信候选」，先经过结构契约、字段证据、确定性业务规则和人工路由检查，再稳定返回 `ACCEPT_CANDIDATE` / `HUMAN_REVIEW` / `MODEL_OUTPUT_INVALID` 三种状态，任何状态都不代表审批、付款或发布权限。作者在 5 张合成采购图片上对 `qwen3-vl-plus` 做了三轮共 15 次真实调用，第三轮路由 5/5 符合预期、危险误接收 0、字段精确一致 41/45；并坦诚披露当前公开缺口——模型不返回页码/坐标，证据定位覆盖 0/45，v0.3.1 因此加了「缺少定位即转人工」的关键字段门禁。踩坑记录很有参考价值：模型读对字段不等于满足业务契约（数值字符串化、Markdown 包裹、缺安全标签仍需阻断），裁切图片会让残缺文本被当成完整值。

**工具**：百炼 CLI（真实调用 `qwen3-vl-plus`，另有 `qwen3.5-ocr` / `qwen3.6-flash` 同图对照记录）+ 可安装 Skill `evidencegate-ocr` + Node.js + SHA-256

**仓库**：[github.com/2487238628/evidencegate-ocr](https://github.com/2487238628/evidencegate-ocr)（含 14 条契约回归、30 条确定性对抗路由、5 张合成图片与 15 次百炼调用证据）

**外滩大会 2026 官方参赛版本**：[#65](https://github.com/modelstudioai/modelstudioai.github.io/issues/65)（v0.4.1 把 5 张合成票据扩展为原图 / 下采样 / 旋转 / 裁切 / 遮挡 / JPEG 往返共 30 个受损输入，完成 30 次真实 `qwen3.5-ocr` 调用，路由 30/30、危险误接收 0）

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/54)

---

## 单词萌兽 VOCAB-MONSTER：游戏化单词听写与情景默写

**作者**：[@freemank1224](https://github.com/freemank1224)（戴森方程式）· 2026-07-28

一个完全由 AI Coding 构建的游戏化背单词 Web 应用（作者自述不懂前端与数据库，全靠 AI 补齐）。基于 Supabase 搭建后端与注册登录，实现成就积分与排行系统、符合遗忘规律的选词策略、用键盘输入代替书写的自助添加与听写、九宫格限时看图听写，以及 AI 驱动的即兴场景设计与图像生成，提供新鲜的看图写词体验。单词释义生成等环节选用百炼 `Qwen3-max`，通过 Supabase Edge Function 完成 API 调用。

**工具**：百炼 `Qwen3-max`（经 Edge Function API 调用做单词释义等）+ OpenWork / Claude Code / OpenCode（前端设计美化、UI/UX Skill）+ Supabase + GPT-image-2（配图）+ MiniMax（TTS）

![单词萌兽基本界面](https://github.com/user-attachments/assets/c2b5d2da-c268-4583-bd0c-781dc7eee71f)

**在线体验**：[vocab-monster.xyz](https://vocab-monster.xyz)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/49)

---

## invoice-pipeline：百炼 VL 做发票 OCR + CDP 自动化归档上传

**作者**：[@sl820](https://github.com/sl820) · 2026-07-23

面向"一批电子发票 PDF → 按公司抬头改名 → 自动上传到阿里公益票据平台"的重复劳动，做成一条可跑批的端到端管线：PDF 用 `pdftoppm` 转 PNG → 百炼 CLI `bl vision describe`（`qwen3-vl-plus`）做多模态 OCR 并按 JSON schema 输出票号 / 金额 / 交款人 / 开票日期 → 正则后处理抽字段并做括号归一化、公司后缀校验 → Playwright + CDP 复用已登录的 Chrome，按抬头检索"待开具"记录、用金额消歧后自动上传。作者附了脱敏后的 OCR 识别结果截图，并沉淀了几条实战踩坑：一次性 prompt 抽多字段会互相干扰（强制 JSON schema 输出把每个字段短约束、schema 当"提示词骨架"用）；CDP 复用登录态必须用独立 profile + 持久 user-data-dir；`page` 引用易失效，封装 idempotent 的 `freshPage()`；平台按附件名检索，本地 `xxx(2).pdf` 后缀会匹配不到，上传前复制成 `{payer}_{applicationId}.pdf`。

**工具**：百炼 CLI（`bl vision describe` + `qwen3-vl-plus` 做发票 OCR，单 AI 步；字段抽取 / 平台匹配 / 上传均为确定性脚本）+ Playwright + Chrome CDP + pdftoppm + Node.js

**仓库**：[github.com/sl820/invoice-pipeline](https://github.com/sl820/invoice-pipeline)（Apache-2.0；核心脚本 `upload/scripts/Ocr-All.js` 调百炼、`Ocr-Parse.js` 抽字段、`Upload-Gongyi.js` CDP 上传）

![OCR 识别结果（脱敏）](https://github.com/user-attachments/assets/bae192d4-137a-422b-b4e3-d949d30deefc)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/48)

---

## WeChat Formatter：Word/PDF 稿件 → 公众号内联 HTML 一键排版工作台

**作者**：[@Roloyty](https://github.com/Roloyty) · 2026-07-23

从 .doc/.docx/.pdf 原稿到微信公众号草稿与正式发布的一体化工作台：DocMind / docling 双引擎解析文档结构，模板系统渲染出微信兼容的纯内联 HTML，图床（PicGo / imgbb）自动把本地图换成公网 URL，草稿 / 永久素材 / 正式发布统一管理。想模仿别家公众号排版？粘贴文章 URL 一键提取样式为可复用模板；想要 AI 帮忙写编者按？直接调百炼 CLI Qwen 分析原文生成。作者提供了完整的前后对比截图：原始 Word 稿 → 排版后公众号预览 → 后台自动推送到草稿箱 → 百炼生成编者按 → DocMind 把 docx 解析成结构化 Markdown / JSON。

**工具**：百炼 CLI（`bl`，Qwen 3.7-max 公众号仿写 / 编者按生成）+ 阿里云 DocMind（docx / pdf 结构化抽取与 OCR，可选云端引擎，默认走免费离线的 IBM docling）+ PicGo / imgbb 图床 + 微信公众平台 API

**仓库**：[github.com/Roloyty/wechatformatter](https://github.com/Roloyty/wechatformatter)

![排版效果](https://github.com/user-attachments/assets/ea7e5f4a-031d-40a2-b467-b33c37c885a0)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/46)

---

## OpenAI 风格封面生成 Skill：一键生成 GPT 风格文章封面

**作者**：[@joeytoday](https://github.com/joeytoday) · 2026-07-22

参考 OpenAI Customer Stories 封面设计，用 Qwen Code Skill + 百炼 CLI 一键生成高质量文章封面，全程 AI 生图 → HTML 叠字 → 浏览器导出，都在 Qwen Code 里完成。根据文章内容自动推荐风格和色系、一句话出图：内置 4 种风格（实物微距 / 晕染渐变 / 光束弧影 / 波形水彩）、7 种色系，以及公众号首图 2.35:1 / 正方形 1:1 / 横版 16:9 / 竖版 3:4 等多平台画布预设，生图尺寸自动匹配画布比例。生成的底图自动组装成 HTML 编辑页，标题、字体、遮罩、字号所见即所得实时调整，支持 1x / @2x / @3x Canvas 渲染导出 PNG。

**工具**：百炼 CLI（`bl`，qwen-image-2.0 生图 + Qwen 3.8-max 内容理解 / 风格推荐 / 提示词与 HTML 模板组装）+ Qwen Code + HTML / Canvas

**仓库**：[github.com/joeytoday/open1v-skills](https://github.com/joeytoday/open1v-skills/tree/main/open1v-openai-cover) · [图文教程](https://qwenlm.github.io/qwen-code-docs/zh/blog/cases/qwencode-bailian-skill-openai-cover-gen/)

![效果预览](https://github.com/user-attachments/assets/ec535521-df67-4291-af3f-b8257cd007cd)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/47)

---

## digital-human-short-video：CosyVoice 字级时间戳驱动数字人口播短视频

**作者**：[@pzb5471](https://github.com/pzb5471) · 2026-07-22

面向"授权人像 + 结构化口播脚本 → 9:16 无平台水印数字人口播短视频"的完整管线。走"云端接口做配音和数字人生成，本地 Remotion 合成"路线：用阿里云百炼 CosyVoice v3（`cosyvoice-v3-flash`）开启 `word_timestamp_enabled` 生成配音，并从 SSE 返回的 `output.sentence.words` 拿到字级时间戳 → 阿里云 Marketing Engine `CreateAnchor + SubmitProjectTask` 用 AUDIO 驱动数字人口型 → Remotion 按字级时间戳合成字幕并输出 1080×1920 / 30fps 成片 → 本地 verify 校验规格。关键踩坑：TTS 首尾静音直接拼接会造成一秒以上停顿和字幕错位，改为分段裁切 + 明确停顿；字幕严格按真实 WAV duration 对齐而非按文本长度估算。

**工具**：百炼 CosyVoice v3（`cosyvoice-v3-flash`，SSE + word_timestamp）+ 阿里云 Marketing Engine（数字人 CreateAnchor / SubmitProjectTask）+ Remotion（1080×1920/30fps 合成）+ FFmpeg

**仓库**：[github.com/pzb5471/digital-human-short-video](https://github.com/pzb5471/digital-human-short-video)（MIT）

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/44)

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
