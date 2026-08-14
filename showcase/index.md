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

## 数学公式无障碍学习助手 · 让视障学生把公式读得出来、学得明白

**作者**：[@MrsFlower](https://github.com/MrsFlower) · 2026-08-13

一套面向视障学生的浏览器插件 + 百炼高代码后端：把网页里的数学公式（KaTeX / MathJax / LaTeX / 视觉符号串 / 化学式）转译成读屏友好的结构化中文读法。分工很清醒——确定性规则引擎负责逐字可复现的读法转换，保证同一个公式每次读法一致；大模型只在其上提供五段式讲解与追问，Qwen-TTS 负责语音输出。全程键盘可达、NVDA 读屏闭环，每个体验细节都来自真实视障用户的反馈迭代。模型侧用 Qwen 系列做了三级备用链，避免单点失败让读屏中断。

**工具**：百炼 Qwen 系列（三级备用链，讲解与追问）+ Qwen-TTS（语音播报）+ 确定性公式读法规则引擎 + 浏览器插件 + NVDA 读屏适配

**仓库**：https://github.com/MrsFlower/math-a11y-demo ｜ **在线体验**：https://mrsflower.github.io/math-a11y-demo/

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/160)

---

## 动物行为翻译官 · 拍段视频，AI 判断动物是放松还是在受苦

**作者**：[@msensi](https://github.com/msensi) · 2026-08-12

面向普通游客的一款多模态公益应用：拍一段景区、马戏团、海洋馆里的动物视频，约 30 秒后 AI 给出「红 / 橙 / 黄 / 绿 / 灰」五级风险判定，附带时间戳的画面证据、结构化观察总结，以及世界动物保护协会（WSPA）知识库的科学解释与行动建议。链路把媒体标准化（ffmpeg 压缩截断转码）、智能抽帧（画面差异最大的 4 帧）、qwen3-vl-flash 视频与图片理解、知识库检索、qwen3.6-plus 综合判定串成一条工作流。设计上刻意「不指责游客」，而是给出「离开、不参与、支持友好场馆」的正向行动。凭据侧浏览器不接触任何云密钥，媒体在服务端统一标准化。

**工具**：百炼（DashScope）qwen3-vl-flash（视频/图片理解）+ qwen3.6-plus（风险判定）+ 百炼工作流（知识库检索）+ FastAPI + ffmpeg + 魔搭创空间

**在线体验**：https://msensi-animal-translator-v2.ms.show

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/157)

---

## 猫可梦 CatMon · 类 Pokémon Go 的拍猫收养小程序

**作者**：[@hotcoffeeshake](https://github.com/hotcoffeeshake) · 2026-08-09

把偶遇的现实猫咪「拍照收养」成虚拟宠物的微信小程序。相机取景后投出精灵球命中猫，先用通义千问视觉 qwen3-vl-plus 做「是不是猫」的识图门禁与品种识别（不是猫直接拒绝重拍），再用通义万相 wanx2.1-imageedit 的 stylization_all 从 22 种风格里随机赋一种特效，配合随机稀有度 N/R/SR/SSR/UR + 八大元素 + 收养编号，生成一只可入图鉴的虚拟猫。两个百炼能力都用在了刀刃上。拍照收养、识图门禁+品种识别、随机特效、云养猫日常四项玩法已真机跑通（含真实云函数调用），社交裂变与升级玩法待小程序认证后开放。

**工具**：百炼 CLI + 通义千问视觉 qwen3-vl-plus（识图门禁/品种识别）+ 通义万相 wanx2.1-imageedit `stylization_all`（风格化）+ 微信小程序原生 + 微信云开发

**在线体验**：微信小程序·体验版（扫码进入，单机可跑通拍猫 → 收养 → 喂养闭环）

![猫可梦 CatMon · 类 Pokémon Go 的拍猫收养小程序](https://raw.githubusercontent.com/hotcoffeeshake/cat-collect-screenshots/main/issue-153/01-camera-catch.jpg)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/153)

---

## 题迹 QuestionTrace · 基于实时面经证据的个性化面试押题 Skill

**作者**：[@Thea729-fable](https://github.com/Thea729-fable) · 2026-08-09

把「押题」从模型凭空生成改造成一条可追溯流水线：百炼 qwen3.5-omni-plus 解析上传的 JD 与简历、动态生成检索词，Museon 实时检索并深读小红书 / 牛客真实面经，再由百炼逐张解析每份面经的题图、提取可见问题与面试轮次，最后做来源核验、去重、聚类、时效加权，把「真实面经证据 × JD 要求 × 简历触发点」映射成个性化题库。每道高优先级题必须同时具备三方依据并保留来源与读取状态；`scripts/audit_evidence.py` 自动审计百炼运行记录、正文完整性、题图处理与三方证据，只有结论为 `PASS` 才生成最终证据型题库。作者按评审意见把百炼从「可选增强」改为默认必经运行时并重新跑通验证，也在 README 里补齐了对第三方平台内容的抓取边界说明。

**工具**：百炼 CLI v1.14.2 + qwen3.5-omni-plus（JD/简历解析 + 逐张题图视觉提取，默认必经运行时）+ Museon CLI（实时检索深读）+ Agent Skill `question-trace` + 证据审计脚本

**仓库**：https://github.com/Thea729-fable/QuestionTrace

![题迹 QuestionTrace · 基于实时面经证据的个性化面试押题 Skill](https://github.com/user-attachments/assets/799a9061-4cb2-4c79-95e2-7af4d3cd346a)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/152)

---

## 闻香识菌子 · 云南野生菌识别与安全科普

**作者**：[@kkz-admin](https://github.com/kkz-admin) · 2026-08-09

面向云南野生菌的识别与风险科普应用：用户上传菌子照片，系统用百炼视觉理解分析菌体外观给出候选菌种，结合野生菌专业知识库 RAG 检索特征、风险等级、相似菌与分布区域，再通过 Function Calling 查询平台数据库的菌种与菜品数据，最终生成结构化科普结果，并配菌种图鉴、云南菌地图与「夜话菌子」社区。作者按建议在应用首页 / 结果页顶部与仓库 README 均加了醒目安全声明——识别结果仅供科普参考、不能作为可食用依据、误食请立即就医并携带样本，结果页措辞也收敛为描述特征与风险等级，不给「能不能吃」的结论。

**工具**：百炼 qwen3.7-plus（视觉理解）+ 知识库 RAG + Function Calling + 自定义「野生菌识别与科普 Skill」

**在线体验**：https://kkz4022-mushroom.ms.show/ ｜ **创空间**：https://www.modelscope.cn/studios/kkz4022/mushroom

![闻香识菌子 · 云南野生菌识别与安全科普](https://github.com/user-attachments/assets/460fbb85-2adb-413a-bd49-851332fa47a6)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/147)

---

## 慧考 AI · 证券从业资格考试智能题库

**作者**：[@wanhe-hash](https://github.com/wanhe-hash) · 2026-08-09

解决传统证券题库题量固定、刷完无新题、薄弱章节无法针对补强的痛点：PDF 解析 336 道真题建库，few-shot 抽同章节真题做示例、动态扩题，配自动错题本、章节进度可视化与多模型切换。全栈架构扎实——C++ 核心生成 + FastAPI 后端 + Vue3 前端，断点续跑、JSON 自愈解析、重试机制都做了。作者按收录口径把运行链路整体切到百炼通义千问：统一走 DashScope compatible-mode 端点、Bearer 鉴权，当前模型 qwen-plus（UI 可切 qwen-max / qwen-turbo / qwen-vl-plus），全文、架构图与设置面板的 DeepSeek 残留已清除，并给出带行号的调用代码证据；对外入口也从裸 IP 换成了 HTTPS 域名。

**工具**：百炼 CLI + DashScope compatible-mode + qwen-plus（可切 qwen-max / qwen-turbo / qwen-vl-plus）+ C++ 生成核心 + FastAPI + Vue3

**仓库**：https://github.com/wanhe-hash/card-batch-demo ｜ **在线体验**：https://finseed.art

![慧考 AI · 证券从业资格考试智能题库](https://github.com/user-attachments/assets/36b3c4ee-e4c1-4f05-b4b7-5129cca57f28)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/134)

---

## Creator City 创作者之城 · AI 创作者的像素城市与交流社区

**作者**：[@farlyfeifei](https://github.com/farlyfeifei) · 2026-08-09

一座给 AI 创作者的像素城市：个人故事引擎 + Remotion 出片、Phaser 像素城市、Agent 群聊辩论、黑客松会场、模型竞技场与 Skill 花园，已上线 crecity.farly.me 可直接体验。作者按收录口径把辩论核心环节的模型 Provider 切换到阿里云百炼通义千问 qwen-plus（DashScope OpenAI 兼容模式）——辩题生成、Agent 发言、讨论裁判统一经由此 Provider 调用，代码位置在 `apps/chat-debate/server/roundtable_core/` 的 config.py / ai_provider.py（commit 2b701ea），线上发起一场辩论即由 qwen-plus 驱动。

**工具**：百炼通义千问 qwen-plus（DashScope OpenAI 兼容模式，辩论核心）+ Remotion + Phaser + 多 Agent 群聊编排

**仓库**：https://github.com/farlyfeifei/CREATOR-CITY ｜ **在线体验**：https://crecity.farly.me

![Creator City 创作者之城 · AI 创作者的像素城市与交流社区](https://github.com/user-attachments/assets/52b7786a-a002-4024-9a86-49f4087fb2ef)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/124)

---

## PalmSpeech 掌语 · Apple Silicon 完全离线实时手语识别与语音播报

**作者**：[@tbszz](https://github.com/tbszz) · 2026-08-09

一套面向 Apple Silicon Mac 的完全离线实时手语识别系统，借助百炼 CLI + Qwen3-Coder-Plus 与自定义 Skill `hand-sign-offline-deployer` 完成开发与打包。识别流程是「MediaPipe 手部关键点提取 + 16 帧双向 GRU 时序建模 + 注意力分类」，可识别 100 个孤立手语词，实时转中文语义并显示置信度、历史记录、调用 macOS 本地语音播报；验证集 Top-1 77.2% / Top-5 91.5%，模型仅约 2.3MB。支持内置摄像头与 ESP32 网络摄像头两种输入，对网络延迟做了仅保留最新帧、JPEG 完整性检查与断线重连；最终把模型、Python 运行时与依赖打包成双击即运行的离线程序，画面不上云。

**工具**：百炼 CLI + Qwen3-Coder-Plus + Skill `hand-sign-offline-deployer` + PyTorch / MediaPipe / BiGRU / ESP32-CAM / PyInstaller

**在线体验**：https://sign.orionsheep.com/

![PalmSpeech 掌语 · Apple Silicon 完全离线实时手语识别与语音播报](https://github.com/user-attachments/assets/83d99e23-b985-41d1-8d25-fd764a469bfc)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/113)

---

## 妙笔 · 人人可用的 AI 写作工作台

**作者**：[@hotcoffeeshake](https://github.com/hotcoffeeshake) · 2026-08-08

一个把「资料 → 选题 → 大纲 → 初稿 → 配图 → 排版 → 导出」七阶段串起来的云端写作 SaaS。文本能力走百炼 DashScope 兼容接口，封面用通义万相 wanx2.1-t2i-turbo 生成，并落位了百炼 Skill 市场的 doc-coauthoring、illustration-generator、alibabacloud-ecs-code-deploy 三个 Skill。作者按收录要求把代码仓库设为公开、把在线体验迁到可访问的部署，并清理了裸 IP 暴露面。

**工具**：百炼 DashScope 兼容接口（文本）+ 通义万相 wanx2.1-t2i-turbo（封面）+ 百炼 Skill `doc-coauthoring` / `illustration-generator` / `alibabacloud-ecs-code-deploy`

**仓库**：https://github.com/hotcoffeeshake/writer-assistant-saas

![妙笔 · 人人可用的 AI 写作工作台](https://raw.githubusercontent.com/hotcoffeeshake/writer-saas-showcase/main/01-material.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/107)

---

## 飞猪 RedTrip Pro · 红色研学助手

**作者**：[@gengcheng](https://github.com/gengcheng) · 2026-08-07

面向红色旅游的研学助手，从亲子到团队场景把「红色旅游」做活：AI 生成研学路线、亲子研学任务与企业团建方案。文本理解与生成由百炼通义千问承担，语音播报换用了千问的语音合成大模型。作者补齐了公网可访问的界面截图（路线生成、研学任务、团建方案等完整链路），Showcase 卡片按公开截图收录、不放内网入口。

**工具**：百炼通义千问（路线/任务/方案生成）+ 千问语音合成大模型（讲解播报）

![飞猪 RedTrip Pro · 红色研学助手](https://github.com/user-attachments/assets/16adfda2-d798-40e9-bd1b-94b618f207eb)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/92)

---

## 飞猪 Travel-Itinerary · 把出行安排妥当的 AI 助手

**作者**：[@yinshubinysb-dotcom](https://github.com/yinshubinysb-dotcom) · 2026-08-07

一款把行程安排「妥当化」的出行 AI 助手：围绕行前规划、行程编排与出行细节，用百炼通义千问 qwen3.7 / qwen3.8 做 LLM 层的理解与生成，界面覆盖行程生成与管理的完整链路。因演示入口涉及集团登录，Showcase 卡片按作者提供的公开界面截图收录，不放需登录的内网链接。

**工具**：百炼 CLI + 通义千问 qwen3.7 / qwen3.8（行程理解与生成）

![飞猪 Travel-Itinerary · 把出行安排妥当的 AI 助手](https://github.com/user-attachments/assets/0e48ba9e-4192-4852-903f-78f84e4b69d8)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/90)

---

## 飞猪浪 TI · 旅行人格塔罗

**作者**：[@GavinZhao19](https://github.com/GavinZhao19) · 2026-08-07

一个用塔罗玩法测「旅行人格」并揭晓命中目的地的互动应用：选区域 → 五轮抽牌 → 揭晓人格与目的地 → 生成分享卡。视觉是亮点——塔罗牌面、16 种人格结果卡与目的地大卡由通义万相 wan2.7-image-pro 以统一的「明媚水墨 × 烫金」视觉语言风格化生成，Agent 实时交互层负责逐轮出题、四维画像累积与个性化解读文案。作者补齐了完整流程的公网截图；卡片按公开截图收录，不放裸 IP 入口。

**工具**：通义万相 wan2.7-image-pro（塔罗牌面/人格卡/目的地卡风格化生成）+ Agent 实时交互层（逐轮出题与画像计算）

![飞猪浪 TI · 旅行人格塔罗](https://github.com/user-attachments/assets/e11f2bfd-cc1b-4e5e-8479-b31bde2bda1e)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/89)

---

## 讲香 Savorise · 「嘴替式信任转移」文案方法论 Skill

**作者**：[@rojalus](https://github.com/rojalus) · 2026-08-02

把「讲香」这套文案方法论做成了可在百炼 CLI（`bl`）/ Agent Skills 里安装运行的 Skill。核心是「做读者的嘴替」——写出用户内心 OS，通过共情完成信任转移；配 APP 三角色、5 步骨架与血肉清单的可操作拆解。生成文案时调用百炼 qwen3.6-plus 与 qwen-max。

**工具**：百炼 CLI（`bl`）+ Agent Skill `SavoriseSkill` + 百炼 qwen3.6-plus / qwen-max

**仓库**：https://github.com/rojalus/SavoriseSkill

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/66)

---


## 食材，也有乡音 · 从大连到广州，虾爬子该怎么开口

**作者**：[@CNWU16](https://github.com/CNWU16) + [@myfx1199](https://github.com/myfx1199) · 2026-08-09

同一种水产，换一座城市可能就换了名字；反过来，相同的词在不同地区又可能指向完全不同的东西。这个 Demo 把「地域食材叫法互查」做成真实买菜场景下的工具：正向查询、反向辨认、同名歧义确认、相近商品推荐、单品资料，以及本机的叫法贡献草稿。值得留意的是百炼被放在链路的哪一层——不是又加一个聊天框，而是接在查询入口上：用户直接说「我从大连去广州，想买我们叫虾爬子的东西」，模型只负责把这句话解析成 `{mode, query, source_region_text, target_region_text}` 的结构化意图并展示给用户确认，真正的身份消歧和叫法转换交给确定性的地区与食材数据库。作者把这条分工总结为「AI 解析入口、数据库回答事实」：解析失败或信息不全时用户仍可退回下拉表单，模型不会把猜测升级成地方事实。能力边界也写得很老实——只承诺已收录的试点地区与水产数据，不宣称覆盖全国，未收录内容进贡献与待核验流程。凭据侧同样克制，百炼 Key 由 CLI 在本机管理、只在后端进程中使用，不写入浏览器代码或仓库。

**工具**：百炼 CLI（`bl auth` / `bl model list` / `bl text chat`）+ 百炼 `qwen3.5-flash`（自然语言 → 结构化查询 JSON）+ Agent Skills `bailian-cli` / `bailian-protocol` + 确定性地区食材数据库 + Python 后端安全代理

**仓库**：https://github.com/CNWU16/food-local-names-demo ｜ **评委体验包**：https://github.com/CNWU16/food-local-names-demo/releases/tag/v0.1.0

![食材乡音 地域叫法互查](https://github.com/user-attachments/assets/3073cb59-f585-4861-8ba6-aed4e924c4b6)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/151)

---

## 霓码重构 Neon Recode · 重构成蓝白霓虹，但主体还认得出来

**作者**：[@bianzigege](https://github.com/bianzigege)（辫子哥哥）· 2026-08-09

一个面向图片重构的 Skill：先做图片状态预处理，再按固定流程选择视觉语言和风格强度，把真实影像重构为以电光蓝、青蓝、冷白、银蓝为主的霓虹视觉，用点阵、网格、像素方块和抽象符号铺陈画面，同时保持原始主体、构图、空间关系和细节层次。Skill 内置点阵脉冲、霓虹矩阵、幻码成像、霓码融合四种视觉语言，配轻度 / 中度 / 重度三档强度，最后跑一遍明度、色彩、主体、构图与风格一致性检查。作者的踩坑记录很有代表性：早期靠整体压暗、拉高饱和度、压扁层次来「制造科技感」，牺牲的恰恰是主体可读性；后来把预处理、视觉语言、风格强度、生成和质量检查固化成一条流程，并明确禁止新增文字、Logo、建筑、随机字符、重复物体和主体畸变，效果才稳定、可读、可复现。

**工具**：百炼 CLI + 百炼图像生成与多模态图像处理能力 + Skill `neon-recode`（四种视觉语言 × 三档强度 + 结果质量检查）

**仓库**：https://github.com/bianzigege/neon-recode

![霓码重构 Neon Fusion 效果](https://raw.githubusercontent.com/bianzigege/neon-recode/main/examples/neon-fusion-balanced.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/150)

---

## 气旋三阶 Cyclone Morph · 30% / 60% / 100%，把一张图一路卷成台风

**作者**：[@bianzigege](https://github.com/bianzigege)（辫子哥哥）· 2026-08-09

一个通用的三阶段图片气旋化 Skill：同一张图按 30% → 60% → 100% 连续推进，30% 保留原图并开始出现旋涡，60% 让主体结构进入云系，100% 完全转化为卫星台风影像，同时继承原图的中心、流向和明暗关系。支持人物、动物、建筑、房间、产品、车辆、Logo、插画、植物、风景和抽象纹理，并提供冷峻卫星与迷幻嬉皮两种视觉方向。作者一开始把它做成了单次台风滤镜，主体结构和原图的关系会丢失；改成连续三阶段继承、并把气旋眼、眼墙、旋臂和明暗关系写进提示词规范之后，变化才变得可解释、可复现。仓库里放了原图与三个阶段的完整对照，以及两种风格的示例素材。

**工具**：百炼 CLI + 百炼图像生成与多模态图像处理能力 + Skill `cyclone-morph-skill`（阶段化提示词规范 + 示例素材对照）

**仓库**：https://github.com/bianzigege/cyclone-morph-skill

![气旋三阶 100% 阶段效果](https://raw.githubusercontent.com/bianzigege/cyclone-morph-skill/main/examples/stage-100.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/149)

---

## 求职风向 Agent · 在投进去几个月之前，先问市场还要不要这条路

**作者**：[@youngys012345-ai](https://github.com/youngys012345-ai)（能工智人队）· 2026-08-09

现在的校招工具大多集中在链路后端：方向已定、材料也差不多了，工具再来帮忙推荐岗位、改简历、批量投递。但校招真正难的是前端——方向还没定，不知道市场还要不要这条路，也不清楚现在该补什么；方向一旦选偏，前面几个月的技能学习、实习和项目准备都可能白费。这个 Agent 只做这一件事：学生说出想去的方向，系统对岗位库做技能词频、专业词频、分城岗位供给、应届薪资分位、企业规模结构等统计，再抽取在线岗位做增量分析感知最新动向，最后由百炼 `qwen-plus` 把统计结果转写成职责说明、准备计划和带依据的结论。产品守了三条纪律：判断一律来自岗位数据的统计结果，不让模型凭空下结论；报告里所有数字由统计代码算出，模型只负责读数和解释，从机制上堵住编造行情；不做海投、不做简历工具，只解决「方向决策」这一环。对报告不满意可以点「这份报告哪里不对」提交反馈，系统按反馈调整约束后重新生成修订版本——而且人在回路被收成固定动作（驳回结论、排除岗位、加对比城市、追问重算），版式不变只更新内容，避免编排和排版一起乱掉。

**工具**：百炼 CLI / DashScope OpenAI 兼容接口 + 百炼 `qwen-plus`（职责概括、能力准备计划、核心结论、在线风向分析）+ 自研编排 Skill `wind_agent.orchestrator.run_pipeline` + FastAPI / Jinja2

**仓库**：https://github.com/youngys012345-ai/Career-planning-agent ｜ **样例报告长图**：https://github.com/user-attachments/assets/ee37f025-104e-4133-b844-480a7f790ec9

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/145)

---

## 枕边雾 · 只在夜里亮起的那盏低灯

**作者**：[@Pinkie-Pie-Lucky](https://github.com/Pinkie-Pie-Lucky) · 2026-08-09

夜里写下的念头往往强烈、零碎，也更私密，不一定适合白天被反复翻看。枕边雾用昼夜做边界：白天雾被封存，让人回到正常生活；夜晚雾慢慢弥漫，允许写下、回望和安放那些还没安放好的话。产品刻意反效率——首页不直接铺陈文字，每条记录变成一个按时间自然分布的雾团，由一条轻微的雾线串联；点开雾团后要靠点击或擦拭才逐渐看见内容，读一会儿雾又重新聚拢，让阅读保持克制。真的想认真翻旧记录，才从「拨雾入口」进「雾的归处」，那里按月份编排、完整展示文字、支持搜索和筛选。还有一个「雾灵」可以低语，给的是偏陪伴与反射式的回应，而不是标准答案或说教。作者自己的定位写得很清楚：它想成为的不是一个高效的情绪管理工具，而是一盏在深夜亮得很低的灯。整套方案设计、UI 优化和 Prompt 优化都在 OpenWork 里用百炼模型完成。

**工具**：OpenWork + 百炼 CLI + 百炼 `qwen3.6-plus` / `qwen3.7-plus` / `qwen3.7-max` / `deepseek-v4-flash`（方案设计、UI 优化、Prompt 优化）

**在线体验**：https://pillowmist.pixiepoppy.com/

![枕边雾 时间雾团首页](https://github.com/user-attachments/assets/18bb9db8-f462-4831-9636-6cd79d690e35)

![枕边雾 雾的归处](https://github.com/user-attachments/assets/93f3124a-2713-4337-b559-d1d4f2752f2a)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/144)

---

## 变大泡泡 · 让考核表量不到的价值，被吹大、被看见

**作者**：[@coocoo-pineapple](https://github.com/coocoo-pineapple) · 2026-08-09

一个跨公司匿名职场社区，外壳做成一整套桌面系统的样子，按下快捷键才切到真正的产品——一片水面。水面上飘的是泡泡：一句吐槽、一条情报、一个技能、一个点子，每条内容都是一颗泡泡。别人觉得有价值就朝它吹一口气，泡泡变大、浮得更久；没人理会就慢慢沉底，而沉底不是删除，有人想捞随时捞回来。热度是浮力，认可是氧气，一颗泡泡的大小就是一次微型的集体投票。内容沿四层水路越沉越值钱：趣味层把人引进来，「梦蝶局」把职场困境做成 AI 身份推理局，玩家还能上传自制小游戏，游戏创意本身也能在点子集市标价成交；资讯层让人留下来；干货层靠签名担保让话可信——情报分「真 / 存疑 / 假」三级，发言签名担保、说错掉信誉，匿名让人敢说、签名让话立得住；最后到价值层的技能集市、悬赏与付费咨询。AI 在这里不是辅助工具而是社区居民：梦蝶局里对局的 AI 玩家、机器人工坊里替用户接单的 AI 分身，都由服务端调用百炼 `qwen3-max` 供血，分身用「人格 DNA + 框架库 + 禁区」三件套定义。工程取舍同样为演示负责：API Key 只存在服务端，设每小时 / 每日调用限额，模型超时、额度不足或接口不可用时明确降级到脚本模式并在界面如实标注，现场演示不会中断。

**工具**：百炼 CLI（模型连通性验证、内容测试与赛前自检）+ 百炼 `qwen3-max`（梦蝶局 AI 玩家、机器人工坊 AI 分身）+ 服务端 API Key 保护与调用限额 + Node.js / Express / WebSocket

**仓库**：https://github.com/coocoo-pineapple/bianda-paopao-bund-2026

![变大泡泡 泡泡水面](https://github.com/user-attachments/assets/292f9664-9b11-4e43-920e-21297c5e72d3)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/142)

---

## 化雨阁 · 让「膻中穴」不再被听成「山中穴」

**作者**：[@Zijia369](https://github.com/Zijia369)（王子嘉 / 上海洞见星空数字科技）· 2026-08-09

通用语音转写工具在传统文化内容上很容易翻车：「黄帝内经」转成「皇帝内径」，「山海经」转成「三害星」，「膻中穴」转成「山中穴」——这些词不在通用模型词表里，一段转录直接废掉。化雨阁把这件事拆成四步闭环，而且越用越准。第一步双引擎转录，本地 FunASR 在 CPU 上零成本跑，云端用百炼 Paraformer-v2 做异步转录并带时间戳，批量模式可以扫目录逐个转录、自动纠错一条龙，处理过的自动跳过。第二步语义纠错，把全文连同纠错映射表和领域核心术语一起交给模型，温度压到 0.1，只改有把握的、不确定的保留原文，靠上下文判断而不是关键词替换。第三步人工审校，这也是它和「调个 API 就完事」区别最大的地方：红色删除线是被改掉的原文，黄色是待确认的 AI 建议，绿色是人工已确认；左边播视频右边文字跟随高亮，播到哪句滚到哪句，点文字也能跳回视频，每条修改可单独确认或撤销。第四步热词积累，122 条加权领域热词覆盖穴位、典籍、哲学术语和神话人物名，审校时确认过的修正词自动进入热词候选，下次转录直接生效，还能一键同步到百炼云端热词表。成稿支持 txt / md / srt / docx 四种格式导出与打包下载。踩坑记录也很实用：macOS 系统代理会拦截阿里云 SDK 请求导致 BrokenPipe，启动前 `unset http_proxy https_proxy` 即可，不影响浏览器。

**工具**：百炼 Paraformer-v2（异步语音识别 + 时间戳提取）+ 百炼 Phrase Manager（热词云端同步管理）+ 阿里云 OSS 文件中转 + FunASR 本地引擎 + Python / Streamlit

![化雨阁 转录页](https://github.com/user-attachments/assets/0c4badd2-f6d2-4d87-979c-b8f1217a26ce)

![化雨阁 质检审校页](https://github.com/user-attachments/assets/6c644853-490b-4651-b91a-d2430122592f)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/141)

---

## 百炼公众号百宝箱 · 从选题到复盘的一条内容流水线

**作者**：[@emajjsky](https://github.com/emajjsky)（二师兄）· 2026-08-09

公众号创作者的日常，是在热点工具、搜索引擎、文档、AI 对话、生图工具、公众号后台和数据表格之间反复横跳：题材、研究资料、写作经验、图片素材、排版模板和发布数据彼此割裂，每写一篇都要重新组织一遍上下文。这个项目把它们串成一条连续链路——从 RSS、网络搜索、文章链接和个人创意里发现题材，建立创作项目并整理事实、观点、结构与账号声音，完成来源研究和交叉核对后生成正文（修改动作被定义成语义明确的四种：重构、润色、扩写、压缩），再按正文段落策划封面和插图（网络搜图、AI 生图、本地上传、素材库四选一，插图绑定到具体段落之后插入），套公众号模板做智能精排并生成真实 HTML 预览，导入草稿箱后由用户在公众号后台正式发布，发布后登记公开链接形成台账，配 D1 / D3 / D7 检查点做复盘。几处克制的设计值得记：模型按任务分别配置，用户可以按质量和成本给每个环节挑模型；正文候选、配图和排版都要用户确认才进下一步；账号声音保存的是写作规则而不是参考文章的内容；复盘只读公开可获取的数据，拿不到就显示为空，不要求用户手工伪造一个数字。作者对这个产品的定位是——核心不是单次生成一篇文案，而是让题材、账号声音、图片素材、排版模板和复盘记录沉淀成可持续复用的工作资产。

**工具**：百炼 CLI + 阿里云百炼 API（资讯分析 / 来源核验 / 选题推荐 / 账号声音 / 正文生成 / 配图策划 / 智能排版 / AI 生图 按任务分别配置模型）+ Skill 化的创作规则 + Tavily / RSS / RSSHub + React / TypeScript / Fastify / PostgreSQL / Redis / BullMQ

**仓库**：https://github.com/emajjsky/zimeiti

![百宝箱 题材发现](https://github.com/user-attachments/assets/fb60165d-f427-4fb2-aecc-89630bf252f3)

![百宝箱 正文生成](https://github.com/user-attachments/assets/0b4c31c3-4a9b-4382-920d-9e5cbfe0c406)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/139)

---

## 心屿 · 说不出口的时候，可以只写一个字

**作者**：[@2892480843](https://github.com/2892480843)（云上码术）· 2026-08-09

一个以叙事为壳的陪伴向小游戏：用户可以用文字、语音、快捷短句，或者只写一个字，甚至什么都不做、静默坐在岛上，来表达此刻的状态。系统围绕八类情绪完成理解、安全检查、记忆检索、叙事与「心灵印记」生成，并驱动音乐、天气和 2D / 3D 心象岛屿一起变化。百炼在这里解决的是两个很具体的工程问题：浏览器原生语音识别失效时，由 Paraformer Realtime v2 接管中文语音转写，保证「说出来」这条路不会断；浏览器朗读缺少情绪起伏时，改调 CosyVoice v2，并按当前情绪设置音色、语速和音高，让回应听起来不像念稿。

**工具**：百炼 DashScope Paraformer Realtime v2（实时语音识别）+ 百炼 CosyVoice v2（按情绪设定音色 / 语速 / 音高的语音合成）+ FastAPI / React / TypeScript / Three.js / PostgreSQL + pgvector

**仓库**：https://github.com/2892480843/xinyu ｜ **在线体验**：http://txygame.qicaiy.cn/

![心屿 心象岛屿](https://github.com/user-attachments/assets/acf3b2ab-6924-40d1-80e8-218332cccf20)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/137)

---

## TopoPage · 扫描件进去，版面还在的译文 PDF 出来

**作者**：[@Tech-ArthurX](https://github.com/Tech-ArthurX)（Glim 团队）· 2026-08-09

面向扫描 PDF、论文和复杂排版文档的翻译 Web 应用，把 OCR 识别、版面分析、术语约束、AI 翻译、任务管理和 PDF 重建整合成一条完整流程：邮箱注册、图片验证码登录之后上传文档，系统按页识别文字与版面结构，调用百炼兼容接口完成翻译，再生成尽可能保留原始布局的译文 PDF。它不是提取文字后输出纯文本，而是记录原文文本区域的位置和尺寸，把译文重新写回对应页面——为此专门处理了 OCR 与 PDF 坐标系不一致、译文长度变化、字体兼容和文字越界，减少错位、上下镜像、内容溢出和最终生成失败。内置术语表用来固定专业名词、产品名和缩写的译法，让长文档前后一致；处理过程给逐页进度，任务中断后可以恢复，任务列表里能看历史记录、失败信息和最终文件。工程上分成浏览器界面、Go 任务服务和原生文档处理模块三层，把耗时翻译拆成可追踪、可恢复的页级任务。还做了一个「黑客松模式」：服务端锁定模型、接口和内置术语表，并限制单任务与账户页数，用户不需要填 API Key，也改不动关键配置，既控住调用成本，也让公开演示不容易被现场误操作弄崩。

**工具**：百炼 CLI + 百炼兼容 Chat Completions 模型服务（演示环境锁定 `deepseek-v4-flash`）+ PDFium / RapidOCR / ONNX Runtime + Vue 3 / TypeScript / Fluent UI / Golang / Docker

**在线体验**：https://topopage.1145141919810.xyz/

![TopoPage 扫描 PDF 翻译](https://github.com/user-attachments/assets/4b233a88-9b9a-4a79-90ec-c5f9f982e137)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/136)

---

## Luanti Builder · 一句话在沙盒里盖出建筑

**作者**：[@cpufreestyle](https://github.com/cpufreestyle)（MichaelQiu）· 2026-08-09

从零搭了一条「自然语言 → 3D 沙盒建筑」的完整生产链路：先把开源沙盒游戏 Luanti（Minetest）部署到本机，再写一个纯 Python 标准库、零依赖的跨平台 GUI 工具，输入中文或英文描述后自动解析、生成 Lua 建筑代码、一键装进游戏，并配了 WebGPU Canvas 的 3D 等距实时预览，可拖拽旋转缩放，先看效果再进游戏。生成走双模式：19 种模板建筑离线秒出，复杂建筑交给百炼大模型——输入「埃菲尔铁塔」「比萨斜塔」「宫殿」能生成 1400+ 方块的结构，支持 box / cyl / cone / sphere / dome / ring / arch / taper 等 20 种形状命令。此外还做了完整游戏 Mod（饥饿系统、自定义生物、乐高方块）、173 张贴图的乐高纹理包，以及 `/shanghai` 一键生成东方明珠 / 金茂 / 外滩的乐高上海城市。

**工具**：百炼 CLI + 百炼 DashScope 通义千问（自然语言 → Lua 建筑代码）+ Python + Lua + WebGPU Canvas

**仓库**：https://github.com/cpufreestyle/luanti-builder ｜ **视频演示**：https://www.bilibili.com/video/BV1SXum6yEyL/

![Luanti Builder 生成器界面](https://raw.githubusercontent.com/cpufreestyle/luanti-builder/main/demo_1_builder.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/130)

---

## 第二时钟 · 你的药，开封后还能用多久

**作者**：[@inoichi1009207](https://github.com/inoichi1009207)（inoichi）· 2026-08-09

一瓶印着「2027 年到期」的多剂量滴眼液，今天开封之后，按说明书或药典对眼用制剂的通则，可用期限可能只剩 4 周。药盒上的日期是第一个时钟，开封后的期限是第二个，却常常没有地方替你倒计时。这个项目记录两个日期，提醒更早到来的那个停用日。真正难的不是倒计时，而是不让视觉模型把猜错的药名和日期悄悄写成事实——作者没有把提示词或模型自报的置信度当成安全边界，而是把自动化限制在三层检查里：同一张照片交给百炼 Qwen-VL 与另一家视觉模型各看一遍、互不知道对方答案，只比对药名且必须完全一致（差一个剂型或「复方」二字都判分歧），分歧时不预填任何天数；模型识别出的包装印刷有效期一律只作「待确认」候选，用户点确认才落账；模型还必须交出逐字证据与包装语种，由代码核对——包装语种不是中文却在证据里出现汉字，或声称的年份根本不在证据原文里，这个日期就丢弃。功能侧内置 1832 条家庭药箱条目 + 23 条剂型参考规则，手动录入、药库匹配、计时提醒可离线使用。踩坑记录里最有意思的一条：搜索前做的归一化把 `(I/II)` 正好归一成了 `III`，两条药撞成同一个键，只能全库跑一遍才比对出来——归一化是为了容错，但它同时也在制造碰撞。

**工具**：百炼 Qwen-VL（药盒识别，最多 4 张 / 次，输出通用名 / 商品名 / 规格 / 剂型 / 印刷有效期）+ 第二家视觉模型做互不知情的交叉核对 + 内置 1832 条药库 / 23 条剂型规则 + 离线可用的本地计时提醒

**在线体验**：https://2c.klinik.ren ｜ **使用说明**：https://2c.klinik.ren/manual.html

![第二时钟 药品列表总览](https://2c.klinik.ren/shots/01-list-overview.png)

> 作者声明的使用边界：只根据用户录入的日期与参考规则做时间提醒，不判断药品质量、疗效或是否变质，也不构成用药建议。

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/129)

---

## 声声故事 · 用爸爸妈妈的声音，讲孩子的专属故事

**作者**：[@xiaomowow](https://github.com/xiaomowow)（声声故事项目组：萧墨、mew、大盛）· 2026-08-09

家长录一段 15~40 秒的声音，填上孩子的姓名、年龄和兴趣偏好，就能得到一个以孩子为主角、由家长声音讲述的完整故事。它同时解决两件事：家长没时间每天为孩子创作和讲述专属故事，以及通用 AI 生成的故事缺少家庭情感、形不成亲子记忆。链路是「填写孩子信息 → 录制家长声音 → 生成专属故事」，工程上做了音频质量检测（检查录音时长、音量和有效性，把低质量声音挡在合成流程之外）和逐句合成 + 帧级拼接，用来提升长故事生成的稳定性与可编辑性。

**工具**：百炼 CLI + 百炼 `qwen-plus`（按孩子信息与兴趣生成个性化故事文本）+ `Qwen-Audio-3.0-TTS-Flash`（家长录音声音克隆与故事语音合成）+ React + FastAPI + HTTPS 公网部署

**在线体验**：https://story.spalax.ai/

![声声故事 完整体验链路](https://github.com/user-attachments/assets/b499b9eb-c224-4f32-8a4c-9dca8988ad9f)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/126)

---

## 职途实验室 · 测出了 MBTI，那么之后呢？

**作者**：[@fanbinkong2001](https://github.com/fanbinkong2001)· 2026-08-09

MBTI 告诉你「适合」什么职业，然后就断了。这个项目接着往下走：用户确认 MBTI 类型、选定目标职业，然后沉浸式回答该职业从初级员工到高层管理者的 10 个关键决策场景，最后由大模型基于真实作答生成人岗匹配深度报告，含 0-100 匹配评分、评分理由、核心优势、潜在风险和短中长期发展建议。Prompt 里内置了评分校准原则——禁止逢迎打高分、诚实低分更有价值、评分必须与作答质量挂钩——实测报告有区分度、不套模板。产品链路完整：MBTI 双入口（16 型直选 / 10 题速测）→ 58 个职业两级分类 + 搜索 → 职业情境模拟（4 个职业阶段 × 10 题，13 套精细题库 + 分类兜底）→ 报告渲染（评分环 + 情绪分层花环 + Markdown 导出）。服务端是一个 16KB、零第三方依赖的 Node.js HTTP 服务，含静态托管、防目录穿越、`config.json` 403 防泄露、1MB 请求上限与超时控制。

**工具**：百炼 OpenAI 兼容接口（compatible-mode）`qwen-plus` + 零依赖 Node.js 服务端 + 腾讯云 COS / SCF / CDN 部署

**仓库**：https://github.com/fanbinkong2001/mbti-career-simulator ｜ **在线体验**：https://zhitulab.site

![职途实验室 人岗匹配报告](https://github.com/user-attachments/assets/5a555077-c46d-49da-a3be-2924852b6599)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/122)

---

## 此城可期 · 择一城，安一业

**作者**：[@fanbinkong2001](https://github.com/fanbinkong2001)（歪部叩定队：fanbinkong2001、chuhongliang2001）· 2026-08-09

综合评估 offer 性价比、城市适配度与生活幸福感的 AI Web 应用。用户填完个人画像（学历 / 年龄 / 职业）和工作信息（城市 / 岗位 / 薪资）后，AI 生成含综合评分、关键优势、风险隐患与具体建议的结构化报告，SSE 流式输出。最关键的一条 Prompt 约束是强制「用数据算账」——必须算出时薪和房价收入比，结合城市产业与职业匹配度做分析，杜绝空话套话。数据侧有两层支撑：输入城市后 AI 联网搜索人均收入 / 房价 / 租金 / 通勤 / 气候等口径数据并带来源标注，24 小时缓存秒回避免重复计费；同时内置 675 条覆盖全国主要城市的人才政策，评估时按城市自动注入，并在「关键优势」里按用户学历和年龄列出适用政策与实际补贴金额——这是它区别于通用 AI 测评的地方。比如评估「应届硕士去深圳做产品经理」，报告会同时给出深圳房价收入比压力、该学历可申请的补贴金额、职业匹配度和 3 年成长路径。

**工具**：百炼 DashScope OpenAI 兼容模式 `qwen-max` / `qwen-plus`（SSE 流式）+ 联网搜索取城市数据 + 675 条人才政策知识库 + FastAPI BFF + 原生 HTML/CSS/JS + KaTeX

**仓库**：https://github.com/fanbinkong2001/city-worth-it ｜ **在线体验**：https://cichengkeqi.asia

![此城可期 城市评估报告](https://github.com/user-attachments/assets/75bbd572-9b96-43ea-829e-afbbf4094268)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/117)

---

## 智绘界面 · 基于 A2UI 协议的多轮 UI 生成 Playground

**作者**：[@CH2655](https://github.com/CH2655)（陈鹤）· 2026-08-09

一个可视化的 UI 生成 Playground：用自然语言描述界面需求，即可实时渲染出表单、仪表盘等网页原型。它把百炼大模型和 A2UI 协议接在一起，模型负责把需求翻成符合协议的 UI 描述，前端负责实时渲染，因此既能用来快速做前端原型，也能当作 A2UI / AG-UI 协议本身的学习和调试工具——协议长什么样、改一处会渲染成什么，都能在同一个界面里看到。

**工具**：百炼 `qwen3.7-plus` + A2UI 协议 + AG-UI

**仓库**：https://github.com/CH2655/a2ui-agent-playground

![智绘界面 多轮 UI 生成](https://github.com/user-attachments/assets/29337bcf-6126-42e3-973a-d7a2104ad37c)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/115)

---

## 知山（TrekSense）· 行前把「这条路能不能走」说清楚

**作者**：[@fq-small](https://github.com/fq-small)（风晴-Small）· 2026-08-08

面向户外徒步爱好者的行前风险评估工具，走的是「AI 评估 + 社区验证」双引擎：AI 结合路线地形、实时天气、季节系数、事故历史与社区经验帖，输出结构化风险评分与五大决策模块的行前建议；用户实际出行后回填体验反馈，反哺下一次评估。为压住语义幻觉，AI 评估被要求显式引用社区数据做 ground truth 对冲。作者还把两条关键链路沉淀成可复用 Skill：`img-to-text` 给无视觉能力的模型「装眼睛」，把 UI 截图 / 报错截图转成结构化文本用于界面走查和故障定位；`deeptravel-ops` 把演示 demo 打包成 Docker 空间部署到魔搭创空间。交付物是 v1.4.0 的 Flutter App（96 个 Dart 文件、约 49,400 行、24 个页面、37 个服务，1098 项测试全通过），模型历经 glm-5.1 → kimi-k2.6 → qwen3.6-flash 三次演进后落在百炼。

**工具**：百炼 DashScope `qwen3.6-flash`（`enable_thinking: false` 保证结构化 JSON 输出）+ Skill `img-to-text` / `deeptravel-ops` + Flutter / Dart 3.3+ + flutter_map（高德卫星 + 天地图等高线）+ 和风天气 API + GPX 解析 + Hive + 魔搭创空间

**在线体验**：https://smaller30-treksense-demo.ms.show ｜ **功能全景长图**：https://github.com/user-attachments/assets/79c368bc-a918-43f9-9890-090216fc3325

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/112)

---

## Lyra · 放首日语歌，听着听着就看懂了

**作者**：[@xiaofenggan01](https://github.com/xiaofenggan01)（晓风乾）· 2026-08-08

其他语言学习应用都在让你「学」，Lyra 反过来：你本来就在听的那首歌，就是课本。网页播放器里歌词随音乐逐字高亮，点一下不懂的词，给出读音、词性、词典义，以及最关键的一层——它在这一句歌词里到底什么意思；没听清就点「循环这句」反复磨耳朵。听过的歌会变成夜空里的一个星座，学过的词是星座上的星点。百炼负责三件事：逐字注音与切分（结合上下文判断同一汉字的不同读法，如「行く」iku 与「行う」okonau）、语境释义（同样是「沈む」，在「沈むように溶けてゆくように」里给的是「如沉入水中般缓慢、不可逆地消失」，而非词典搬运）、用你听过的词生成新例句。工程上刻意守住几条纪律并用测试守门：模型只负责解释、不负责判分，掌握度与复习安排全部由确定性代码和数据库约束决定；每个用户学习数据物理分库隔离；不做连胜、红叉和排行榜。站上已有 70 多首歌、6700 多条词与语法结果，7 月上线持续在线，200+ 位用户参与盲测。

**工具**：百炼 DashScope OpenAI 兼容接口 `qwen-plus` / `qwen-max` + Web 播放器 + 逐句时间轴对齐 + 一人一库的数据隔离

**在线体验**：https://lyra.niuniu869.com

![Lyra 逐字歌词与语境释义](https://github.com/user-attachments/assets/5154d3a2-dbb5-4ee4-a4f3-7ee04a7680e2)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/111)

---

## 拉香了 · 把最不好意思记录的健康观察，做成愿意分享的 DBTI

**作者**：[@TabbyYu](https://github.com/TabbyYu)· 2026-08-08

一个多模态生活观察 + 社交化表达的微信小程序。用户拍一张照片，百炼 Qwen-VL 识别其中可观察到的形态、颜色、表面状态与图像质量，Bristol 分型留在科学底层做参考，展示层则换成一张「DBTI 人格卡」（如「黄金守序者 SRBG · 稳定 / 规律 / 平衡」），附观察摘要、状态分析和当日建议。生成的卡通形象还能「隔空扔给朋友」——好友在微信里打开会看到它从屏幕外飞进来、旋转、撞击、爆开粒子再揭晓人格卡；每次分析自动沉淀进记录日历形成长期观察。作者的产品判断是：人们愿意记录睡眠、步数和心率，却很少记录这一项，原因是「不好意思」和「不好玩」，所以没有再做一个更严肃的工具，而是把它变成愿意主动打开的体验。视觉调用采用 temperature 0 + `response_format: json_object` 保证结构稳定。DBTI 属娱乐化表达，不构成医学分类或诊断建议。

**工具**：百炼 `qwen-vl-plus`（temperature 0、`response_format: json_object`）+ 微信小程序 + 自建 AI Pipeline / Prompt Engineering

**视频演示**：https://www.bilibili.com/video/BV1zeuV6fExr/

![拉香了 DBTI 人格卡](https://github.com/user-attachments/assets/20a7ffea-27b7-4b8d-8fc8-80f96191c98e)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/109)

---

## 攀升之路 · 让「大数」变成看得见的量级跨越

**作者**：[@CPCer](https://github.com/CPCer)（柏恋小缸子）· 2026-08-08

把抽象的超大数字做成可交互的认知可视化 Demo。作者先用百炼 CLI 咨询整体架构与呈现方式，把一堆天马行空的想法收敛成「大数可视化」这一个方向，再逐个把交互难题交给百炼托管的应用（`bl app`）出方案后自己实现：数阶瀑布动画用 2D PixiJS 走「粒子喷发 → 沿曲线攀升 → 凝聚着陆」三阶段，数字越大瀑布越高、粒子越密，直观传递量级跨越；表达式锻造炉是芯片式构建器，输入 `2↑↑↑↑3` 这类表达式后由五层分类引擎（exact / log / tower / arrow / named）实时解析量级并在海岸线上定位，把体验从「观看」升级为「探索」；另有分级认知可见性（点击小数时遮蔽远超其上的大数）与指示线。踩坑也很实：`bl app` 默认超时不够长，改成 300 秒 + `--stream` 边收边处理才稳；最初用单一标量 rankValue 给所有表示法统一排序，导致 `2↑↑↑↑3` 被错放到古戈尔普勒克斯附近而不是葛立恒数附近。

**工具**：百炼 CLI `bl app`（`--stream`，超时 300s）+ Skill `bailian-cli` / `bailian-protocol` + PixiJS 2D

**仓库**：https://github.com/CPCer/Giant-Number-Visualization ｜ **在线体验**：https://cpcer.github.io/Giant-Number-Visualization/

![攀升之路 大数认知可视化](https://github.com/user-attachments/assets/591051e1-4e5d-405a-bb58-7c416a5b3fe8)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/108)

---

## Body-OS（Health Link）· 把身体当成一个需要维护的系统

**作者**：[@chenchunyun1995-art](https://github.com/chenchunyun1995-art)· 2026-08-08

以「操作系统」概念设计的个人健康信息管理应用，解决的是健康数据碎片化、缺乏整合视图的问题。四块能力：Health Link 健康档案集中管理身体指标与历史数据；基于百炼 `qwen-plus` 的健康问答，支持多轮对话；健康数据可视化呈现趋势与分析报告；以及一个内置的部署配置向导页，把 Render 环境变量该怎么填讲清楚，方便别人自行部署复现。前端 React 18 + Tailwind CSS，Hash 路由，部署在 Render Web Service。AI 输出为一般性健康信息参考，不替代医疗诊断与专业意见。

**工具**：百炼 DashScope SDK + `qwen-plus`（多轮对话与文本生成）+ React 18 + Tailwind CSS + Wouter + Render

**仓库**：https://github.com/chenchunyun1995-art/Body-OS

![Body-OS 个人健康仪表盘](https://github.com/user-attachments/assets/da02281d-bcbd-4c61-b616-cd792edffcb9)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/103)

---

## 录阶 LuJie CareerKit · 从简历到 Offer 的完整求职工作台

**作者**：[@Chozzc](https://github.com/Chozzc)· 2026-08-08

大多数 AI 求职产品只解决一个局部问题：生成一份简历、匹配一个岗位，或临时出几道面试题。但求职不是一次对话，而是一条持续数周甚至数月的流程。录阶把这条线真正串起来：简历 → JD 匹配 → 定向优化 → 投递跟进 → 面试准备 → 模拟面试 → 面试复盘 → Offer。用户可以为不同岗位维护不同简历版本，把完整 JD 与真实简历交给 AI 分析证据缺口、表达问题与匹配重点；关键约束是「不虚构经历、技能、指标和结果」，且由用户挑选真正想改的问题，而不是让 AI 直接重写整份简历。后续还能生成求职信、招呼语、岗位专属面试准备方案，进入模拟面试由 AI 追问并出复盘报告，最后在投递看板里记录公司、岗位、阶段、截止日期与跟进时间。

**工具**：百炼 DashScope OpenAI 兼容接口 `qwen3.6-flash` + `qwen-doc-turbo`（简历文档解析）+ Web 工作台

**仓库**：https://github.com/Chozzc/Lujie-Careerkit ｜ **在线体验**：https://lujie.chozzc.dev

![录阶 LuJie CareerKit 求职工作台](https://github.com/user-attachments/assets/64b69d27-ce8e-43d8-a8be-1d0848d1ecc5)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/100)

---

## 几何实验室 · 9 岁小学生做的第一个 AI 小程序

**作者**：[@gejiong-bot](https://github.com/gejiong-bot)（作品由 ruihang 完成，监护人协助提交）· 2026-08-07

创作起点是一次真实的数学课经历：课堂上直接套「蝴蝶定理」公式做题，却没弄懂两个三角形的面积为什么相等。于是这位 9 岁的作者想把抽象公式变成可以拖动、观察和验证的几何实验，做出了一款面向 6—12 岁儿童的微信小程序。学习路径是「先看动画 → 动手验证 → 论证解锁」：孩子拖动图形顶点，实时观察面积、周长和角度变化，先提出猜想，再通过选择题和开放论证把理由说清楚。目前包含面积变形工坊、图形拼拼造、角度魔法师、图形变形魔法镜、图形量一量、面积切割工厂六个实验模块，以及 20 个公式动画、闯关与几何藏品收集。AI 的职责被明确切开：百炼 `qwen-plus` 负责开放式几何问答、学习陪伴和论证反馈，面积 / 周长 / 角度计算与闯关判定全部交给本地几何程序，动画语音是提前录好的配音。

**工具**：百炼 DashScope `qwen-plus`（开放式问答与论证反馈）+ Qoder（首版代码生成与多轮修改）+ 微信小程序 + Canvas 2D + 本地几何规则引擎 + 预生成音频

![几何实验室 面积变形工坊](https://github.com/user-attachments/assets/56008fc0-d120-4288-a5f5-c2320b4a49e3)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/98)

---

## FirstDay AI · 先工作，再判断是否胜任

**作者**：[@Chengyuann](https://github.com/Chengyuann)· 2026-08-07

一套「数字试岗」式的岗位能力评估产品：把候选人放进有业务目标、数据异常、跨团队协作和 AI 辅助的真实工作场景，把实际工作过程转化为可观察、可回放、可复核的能力证据。首发场景是一场 AI 客服摘要灰度上线事故——候选人要判断是否从 10% 扩到 30%，同时处理语义反转投诉、促销压力、ASR 更新和跨团队冲突，可以下钻数据、询问角色、使用并核验 Copilot、采取风控动作、提交决策并完成经理复盘。系统输出问题定义、数据判断、风险决策、跨团队协作、AI 协作、复盘学习六维报告，每一项结论都能回放到对应的数据查询、角色沟通、候选动作和决策上。架构上刻意分层：百炼模型负责语言与语音能力，确定性评估引擎负责场景事实、事件推进和行为锚点。完成度自测包括 103 项自动化测试通过、60 套冻结行为脚本完成率 100%、证据引用完整率 100%。

**工具**：百炼 DashScope OpenAI 兼容接口 `Qwen3.7-Flash`（Copilot 表达增强与结构化证据抽取）+ Qwen3 ASR（晨会 / 紧急来电 / 复盘语音输入）+ React + TypeScript + FastAPI + Cloudflare Pages Functions / KV

**在线体验**：https://firstday-ai-demo.pages.dev/ ｜ **评委 90 秒速览**：https://firstday-ai-demo.pages.dev/?judge=1 ｜ **仓库**：https://github.com/Chengyuann/firstday-ai

![FirstDay AI 首页](https://firstday-ai-demo.pages.dev/submission/competition-home.png)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/97)

---

## 仙门诡事 · 终端风格的玄幻文字解谜

**作者**：[@AQI-sunny](https://github.com/AQI-sunny)· 2026-08-07

一款文字解谜推理游戏的 HTML 多页应用。玩家扮演「天道档案馆」的查询者，通过输入 `查询 [时间]-[地点]-[人物代号]` 格式的指令，逐步解锁散落在不同时空的剧情碎片，最终拼出「七子轮回案」的完整真相。作者用 opencode 接入百炼 CLI 完成整个前端应用的开发与调试，用通义千问辅助创作了约 15,000 字原创仙侠悬疑剧情文本，并用百炼的图片生成能力做了封面图与场景氛围素材。多轮对话式迭代主要解决了三件事：查询解析容错、地点解锁逻辑、移动端适配，最终是一个即点即玩的沉浸式终端风格推理游戏。

**工具**：opencode 接入百炼 CLI + 百炼 `Qwen3.8-Max`（代码生成、剧情文本创作与优化）+ 百炼图片生成（封面与氛围素材）+ HTML / CSS / JavaScript

**在线体验**：https://sylvie-seven-cq.top/%E4%BB%99%E8%AF%A1demo/dm4

![仙门诡事 封面](https://github.com/user-attachments/assets/7bda6fa0-c03e-434f-aa94-d7f0c2f7234d)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/95)

---

## 银龄智护 · 语音优先的居家照护助手

**作者**：[@Karl-XZ](https://github.com/Karl-XZ)（银龄智护项目组：周昊洋、杨一、柴和九）· 2026-08-07

一款跑在普通 Android 手机上的语音优先多模态照护助手，帮低视力老人和独居老人靠「听」和「说」完成居家巡路、找物、跌倒确认、用药记录与家属复核。手机端把摄像头画面、语音输入、传感器变化、视觉检测结果和文本模型判断组合起来，输出老人可以直接照做的短句提示——比如识别走廊、门口、卫生间、行李堆、电线、地垫等通行风险后，说「停下、向右绕开、扶住门框」。架构上走「云端增强 + 端侧保底」：网络可用时用百炼 DashScope 做文本与多模态理解、ASR 转写、`qwen3-tts-flash` 合成语音播报；网络不佳时切到端侧 MNN Runtime 上的 DAMO-YOLO + Qwen3 + Vosk，保证核心提示不断线。

**工具**：百炼 DashScope 通义千问（文本 + 多模态判断）+ DashScope ASR + `qwen3-tts-flash`（语音播报）+ 端侧 MNN Runtime / DAMO-YOLO / Qwen3 / Vosk + Android

**仓库**：https://github.com/Karl-XZ/silvercare-ai-assistant ｜ **视频演示**：https://www.bilibili.com/video/BV1y6j26JEYE/

![银龄智护 居家巡路提示](https://github.com/user-attachments/assets/d19c82ae-bf76-40a6-9189-7956980b0ac7)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/93)

---

## Idea Pet · 会发现问题的 AI 网页灵感桌宠

**作者**：[@xxxye661](https://github.com/xxxye661)· 2026-08-07

一个开源 Chrome 扩展，把桌宠放在主流 AI 网页上，从当前对话里找出你正在忽略的痛点、盲区和新角度。灵感弹幕实时生成反问、关键词和新视角，多个 AI 标签页可同时运行；点击有价值的弹幕可以继续追问，再一键整理成提示词带回当前 AI，但刻意不自动发送，决定权留给用户。用户主动授权后，还能结合当前可见页面与任务做可打断的实时语音对话。桌宠本身支持拖动、惯性反弹、边缘吸附和投喂，并且能从一张图生成 6 套、26 帧动作。最值得一提的是它的 BYOK 开源姿态：没有作者后端、没有会员、没有遥测，请求由扩展直接发往用户自己的百炼账号。

**工具**：百炼 `qwen3.5-flash` + `qwen3.5-omni-flash-realtime`（实时语音）+ `wan2.7-image`（桌宠形象生成）+ Skill `build-deskpet-pack`（单图生成可导入的 26 帧动作包）+ Chrome Extension Manifest V3 + Canvas / Worker + AudioWorklet

**仓库**：https://github.com/xxxye661/idea-pet

![Idea Pet 灵感弹幕](https://github.com/user-attachments/assets/fb325a66-886e-4b91-840a-104bd5712e08)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/91)

---

## yujee 遇己 · AI 杂志设计助手

**作者**：[@yvaineyu9](https://github.com/yvaineyu9)（虫小宇）· 2026-07-31

丢进照片和一段文字，它自动完成选图、写文案、匹配版式，产出一本可直接印刷的杂志 / 纪念册，而不是一堆还要人工拼装的素材。核心是多 agent 分工：识图 agent 读照片内容和情绪，文案 agent 写正文，design agent 负责版式模板匹配和排版落地，中间用 workflow 编排，避免每次都把全量 agent 跑一遍烧穿 token。作者的踩坑记录很实在：无架构 vibecoding 连续失败 3 次，最后靠规范项目约定、用 GitHub 做版本管理、分 PR 小步迭代才稳下来；agent 硬搓不稳，改用成熟 agent 框架；全量 agent token 消耗过大，最后混合 workflow 把成本压下来。

**工具**：百炼 CLI + 百炼 `qwen3.6-plus` + Skill `e2e-testing`（覆盖上传到出片的全链路测试）+ 多 agent + workflow 编排

**在线体验**：https://yujeeai.com ｜ **教学演示视频**：https://xhslink.cn/o/AAk3PYPgADf

![yujee 遇己 AI 杂志设计](https://github.com/user-attachments/assets/8abd82bd-f169-4337-ae48-e2b7ce3614ca)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/61)

---

## MetaLog（念头日志）· 冲突后的元认知复盘

**作者**：[@23333ironnnnn](https://github.com/23333ironnnnn) · 2026-08-06

情绪冲突后不教你怎么赢下这场争吵，而是帮你看见自己正在怎么想。手机上三分钟走完一条完整叙事：冷静倒计时 → 三道题对齐现场（跟谁有关 / 发生了什么 / 当时的情绪与念头）→ 像朋友坐在对面的疏导对话（先被接住，再被轻轻点破）→ 生成复盘卡 → 在「我的模式」里回看自己反复出现的思维纹路。复盘卡含共情开场、事实摘要、可能的认知模式标签（读心 / 灾难化 / 应该化，标注为假设而非诊断）与三句「下次可以怎么说」的可复制话术。用百炼做有温度的疏导与出卡，数据坚持本地隐私优先。

**工具**：百炼 DashScope —— 疏导对话 `qwen3.7-flash`、复盘卡 `qwen3.7-plus` + Vite + React + TypeScript + Hono + 阿里云函数计算

![MetaLog 念头日志](https://github.com/user-attachments/assets/c273f4b5-aea3-4e22-98c9-3c7bd5dc2c6e)

**在线体验**：https://ironnn314159-d9g3mjnpe99f88a82-1464523475.tcloudbaseapp.com ｜ **仓库**：https://github.com/23333ironnnnn/metalog

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/88)

---

## 对齐（duiqi）· 不用每次重新解释一遍你和他的关系

**作者**：[@Stellaw23](https://github.com/Stellaw23) · 2026-08-06

大多数工具帮你把话改得更得体，这个项目认为**你写的那句话本身可能就是问题所在**。它不整理你已经知道的事，而是通过提问暴露「你不知道自己不知道」的那部分——初稿与话术并排放，差的那部分就是你没想到的。更硬的一条分界线在下一轮：对方真回复后，系统拿真实回复比对自己上一轮的预测，被打脸的档案条目自动降级（已确认 → 待确认 → 已否认进「不许再提」），且**系统自己不能往档案里加东西，只能让已有条目降级**。全部 LLM 调用走百炼 DashScope OpenAI 兼容端点，档案存在用户自己浏览器的 localStorage、用自己的 API Key，`docker compose up` 一条命令自托管。实测 60 次真实百炼调用 JSON 解析成功率 100%、调用失败 0 次；另实测同一 flash 模型开关思考链耗时差约 20 倍（29.1s → 1.5s），据此把「推断类 → plus、枚举类 → flash」写成一张模型分流表。

**工具**：百炼 CLI（`bl model list` 实拉模型规格）+ 百炼 `qwen3.7-plus-2026-05-26`（话术 / 结构化分析 / 预测比对）+ `qwen3.7-flash-2026-07-15`（追问 / 枚举 / 修复）+ `response_format=json_object` + FastAPI + React + TypeScript + Docker

![对齐 duiqi：初稿与话术并排](https://raw.githubusercontent.com/Stellaw23/duiqi/main/docs/assets/screenshots/03-draft-vs-message.png)

**仓库**：https://github.com/Stellaw23/duiqi ｜ **可复现证据与边界声明**：https://github.com/Stellaw23/duiqi/blob/main/docs/evidence.md

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/87)

---

## 美食管家 MCP · 米其林餐厅智能预约助手

**作者**：[@GaoLerong](https://github.com/GaoLerong)（飞猪-晋梁）· 2026-08-06

基于 OpenWork、百炼通义千问与 MCP 协议做的米其林餐厅预约助手。用户只需说出餐厅名称、城市、日期、人数与时间偏好，系统自动识别目标餐厅及其米其林信息、查找官网与真实预约入口、判断官网 / 第三方平台 / 电话 / 邮件等渠道、查询可约日期与时段并发起多轮预约流程；提交订单、支付与外呼前均要求用户确认，遇到登录、短信验证码、信用卡、CAPTCHA 等敏感步骤安全交还用户本人处理，官网无法直接预约时可通过电话机器人外呼。同时支持本地 Stdio 与线上 Streamable HTTP 接入，并针对远程 MCP 调用超时、沙箱进程被回收等问题补上了任务状态管理（`operation_id`）、异步轮询、SQLite 持久化与长期运行的 HTTP 部署方案。

**工具**：OpenWork / 百炼 CLI + 百炼通义千问（自然语言理解 / 预约意图识别 / 任务拆解 / 工具编排）+ Model Context Protocol + Python + Playwright/Chromium + SQLite + Streamable HTTP

![美食管家 MCP 米其林美食预约](https://github.com/user-attachments/assets/074308c5-c6ac-43f7-9fd7-cf3bd94bb775)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/86)

---

## ScholarForge OS｜研语工坊 · 科研事实安全审校工作台

**作者**：[@liqinglq666](https://github.com/liqinglq666) · 2026-08-06

普通 AI 帮你改论文，ScholarForge 负责**阻止 AI 改错论文**。针对「大模型在翻译、润色、重写时可能悄悄改变数值、单位、引用、实验声明、因果关系、结论强度或研究范围」这一常被忽略的问题，它没有把模型输出直接覆盖到论文，而是在 AI 候选稿与作者工作稿之间加入独立的 Safety Gate：模型只提出候选（附问题位置、证据与理由，无权覆盖作者文本）→ 代码独立核验数值 / 单位 / 引用 / 术语 / 实验声明 / 因果 / 确定性与研究范围 → 作者逐条接受、拒绝或暂缓，只有满足唯一文本锚点、不跨段落、无重叠且不改变科研事实时才允许安全应用；硬规则失败自动进入 `quarantined` 隔离并保留原文。支持科研中译英、英文保守润色、投稿前检查三类任务，全流程可撤销 / 重做 / 版本比较，并导出 TXT、Markdown 与清洁 DOCX（原始 DOCX 不被原地覆盖）。

**工具**：百炼 DashScope OpenAI 兼容接口，默认模型 `qwen-plus` + 自研 ScholarForge Safety Gate 确定性规则引擎 + Next.js 16 + React 19 + TypeScript strict + Mammoth/docx + Vitest/Playwright + Vercel

![ScholarForge OS 任务配置工作台全览](https://raw.githubusercontent.com/liqinglq666/scholarforge-os/main/docs/assets/submission/01-workspace-overview.png)

**在线 Demo**：https://scholarforge-os.vercel.app ｜ **仓库**：https://github.com/liqinglq666/scholarforge-os

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/52)

---

## 护院鹅 Guard Goose · 独居老人无感居家安全守护系统

**作者**：[@firecangshu](https://github.com/firecangshu) · 2026-08-05

面向独居老人的「不装摄像头、不戴手环」跌倒与呼吸监护系统。通过 CSI（信道状态信息）无感感知老人的活动、呼吸与跌倒，边缘服务完成信号判定，异常约 90 秒内推送到子女手机端。百炼承担两个核心环节：事件触发后把「事件上下文 + 老人病史档案」交给通义千问 `qwen-plus`，给出告警级别、疑似病因与处理建议（API 异常时自动降级规则引擎，保证不漏报）；以及 AI 医学词条查询——子女输入疾病名由 `qwen-plus` 返回跌倒风险 / 呼吸影响 / 照护建议并入档，让告警「因人而异」。

**工具**：百炼通义千问 `qwen-plus`（DashScope）+ `human-writing` Skill + Python FastAPI/SQLite 边缘服务 + Vue3/Vant 子女端 H5 + ESP32/CSI 采集

![护院鹅 Guard Goose](https://github.com/user-attachments/assets/13aed416-074a-4f73-8a2b-c2d80e6150f2)

**仓库**：https://github.com/firecangshu/waveguard

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/83)

---

## Hunea · 给人用的简洁 TUI Agent

**作者**：[@yunxinx](https://github.com/yunxinx) · 2026-08-04

一个透明、简洁、跨平台的 TUI Agent 工具，主打「给人用」而非「给 AI 用」：提示词与响应完全透明、低心智负担的交互、快速小巧，并打磨了舒适的中文输入 / 换行体验、思维链展示、可视化对话树与轻松的对话分支管理。开发全程直接调用阿里云百炼模型（自购按量付费额度，经 Claude Code 等工具调用编码）；Hunea 本身也可接入百炼 `qwen` 等模型作为对话内核。

**工具**：阿里云百炼模型（`qwen` 系列，直接 API 调用）+ Claude Code / qodercli

![Hunea TUI Agent](https://github.com/user-attachments/assets/7ed4121d-9801-4d00-954b-df157343433b)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/77)

---

## Workbench · 面向本地开发与 AI 工作流的桌面工作台

**作者**：[@yyc-labs](https://github.com/yyc-labs) · 2026-08-03

一款本地优先（Local First）的 AI 开发工作台，基于 Electron / React / TypeScript，把本地项目管理、代码浏览与编辑（Monaco）、Git 工作流、Markdown、AI CLI Runtime、AI Gateway、会话记录与终端整合进统一桌面应用，围绕「项目 + 开发上下文」减少工具切换与上下文丢失。开发过程使用百炼 CLI（`bl`）及百炼模型完成代码分析、功能开发与文档生成；其开放式 AI Runtime 与兼容 OpenAI 的 AI Gateway 可将百炼 CLI 及 `Qwen3-Coder` / `Qwen3.6-Plus` 等百炼模型作为 Provider 统一接入工作流。

**工具**：百炼 CLI（`bl`）+ 百炼模型 `Qwen3-Coder` / `Qwen3.6-Plus` + Electron / React / TypeScript

![Workbench 工作台](https://github.com/user-attachments/assets/674d6b60-99a6-4d84-b474-2b66c7bca35b)

> [查看原始 Issue →](https://github.com/modelstudioai/modelstudioai.github.io/issues/70)

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
