---
layout: doc
title: 儿童趣味动物视频生成：从一个词到 HappyHorse 样片
author: boblank
date: 2026-06-11
tags: [视频, CLI, Skills, HappyHorse, 儿童内容]
permalink: /showcase/children-animal-video-workflow/
description: "用阿里云百炼 CLI、bailian-cli Skill 和 HappyHorse 文生视频模型，把「狐獴」这样的动物词扩展成儿童友好的 5 秒动画样片。"
keywords: "阿里云百炼案例,HappyHorse,儿童视频生成,AI 视频,百炼 CLI,Agent Skills,文生视频"
---

# 儿童趣味动物视频生成：从一个词到 HappyHorse 样片

## 我做了什么

我做了一个适合线下活动演示的儿童趣味动物视频生成 workflow：用户只需要输入一个动物词，例如「猫」「狐獴」「海龟」，Agent 会先规划一个简单、阳光、儿童友好的小故事，再生成三拍视频脚本，最后把脚本压缩成适合 HappyHorse 的文生视频 prompt，并通过 `bl video generate` 生成样片。

这次演示输入词是「狐獴」。为了避免直接引用任何现有 IP 或品牌化画风，最终用的是「温暖童话动画风、圆润角色、柔和粉彩、阳光正能量」这类可执行的视觉描述。

## 使用的工具

- `bailian-cli` Skill：统一调用百炼文本生成、视频生成、鉴权与下载能力。
- `bailian-docs-llm-wiki` Skill：核对 HappyHorse 模型能力与入参，确认 `happyhorse-1.0-t2v` 支持文生视频。
- `happyhorse-prompt-studio` Skill：按「场景 + 主体 + 动作 + 镜头 + 质量约束」组织视频 prompt。
- `qwen3.7-max`：把动物词扩写成儿童短视频脚本。
- `happyhorse-1.0-t2v`：生成 5 秒文生视频样片。
- `ffmpeg` / `ffprobe`：本地抽帧和媒体信息检查。

## Workflow

```text
输入动物词
  -> 儿童内容安全边界：原创角色、无惊吓、无现有 IP
  -> qwen3.7-max 生成一句话故事和三拍脚本
  -> happyhorse-prompt-studio 收敛成 T2V prompt
  -> bl video generate 调用 happyhorse-1.0-t2v
  -> 下载 MP4
  -> ffprobe 检查编码/分辨率/时长
  -> ffmpeg 抽帧人工 QA
  -> 写入 showcase 案例
```

## 生成脚本

一句话故事：戴着小草帽的圆润小狐獴在阳光沙丘上抱起一颗巨大的红苹果，开心地眯起眼睛笑。

| 镜头 | 时间 | 画面 | 动作与运镜 |
| --- | --- | --- | --- |
| 起 | 0-1.5s | 金色沙丘、蓝天和柔和阳光，小狐獴从沙丘后探出头。 | 缓慢推近，小狐獴眨眼并左右张望。 |
| 承 | 1.5-3.5s | 小狐獴抱住一颗比脸还大的红苹果。 | 固定中景，小爪子轻轻扶住苹果，身体微微晃动。 |
| 合 | 3.5-5.0s | 小狐獴抱着苹果露出满足微笑。 | 近景特写，背景虚化，整体保持温暖明亮。 |

## Prompt

用于脚本规划的完整 prompt：

```text
3D cute fairy tale animation style, a chubby and round fluffy meerkat wearing a tiny straw hat, standing on a sunny golden sand dune. The meerkat peeks out from behind the sand, then lifts a giant shiny red apple with both little paws, hugs it happily, and squints its big eyes with a joyful smile. Warm sunlight, pastel color palette, soft glowing lighting, colorful sunlight bubbles floating around, smooth motion, cheerful and positive vibe, child-friendly original character, no existing IP, no text.
```

实际样片生成时，我把 prompt 收敛成更短的 5 秒版本，避免把太多动作塞进一个短视频：

```bash
bl video generate \
  --model happyhorse-1.0-t2v \
  --prompt 'A cute round fluffy meerkat in a sunny fairy tale desert hugs a giant red apple and smiles, warm pastel 3D animation, child friendly, no text.' \
  --ratio '16:9' \
  --duration 5 \
  --poll-interval 10 \
  --download assets/showcase/2026-06-11-meerkat-apple-demo.mp4
```

如果要换成「猫」或「海龟」，只需要替换主体和道具，例如：

```text
A cute round fluffy {animal} in a warm fairy tale scene holds {friendly prop}, smiles at the camera, warm pastel 3D animation, child friendly, simple positive story, no existing IP, no text.
```

## 效果展示

<video controls poster="/assets/showcase/2026-06-11-meerkat-apple-demo.jpg" style="width: 100%; border-radius: 8px; margin: 16px 0;">
  <source src="/assets/showcase/2026-06-11-meerkat-apple-demo.mp4" type="video/mp4">
  你的浏览器不支持 HTML5 video 标签。
</video>

![狐獴抱苹果样片截图](/assets/showcase/2026-06-11-meerkat-apple-demo.jpg)

生成结果信息：

- 文件：`assets/showcase/2026-06-11-meerkat-apple-demo.mp4`
- 编码：H.264
- 分辨率：1920x1080
- 时长：5.125 秒
- 大小：约 3.4 MB

## 踩坑记录

1. 我一开始按常规视频尺寸传了 `--resolution 1280*720`，服务端返回 `Input should be '1080P' or '720P': parameters.resolution`。HappyHorse 的清晰度参数应使用 `720P` / `1080P` 这类枚举值。
2. 现场本机 `bl 1.2.1` 在显式传 `--resolution 720P` 时仍触发同样的服务端校验错误；临时处理是去掉 `--resolution`，让模型使用默认清晰度，任务成功生成 1080P 样片。
3. 我尝试用 `bl vision describe --video` 做自动 QA，但账号处于 free-tier-only 限制，返回 `AllocationQuota.FreeTierOnly`。最后改用 `ffprobe` 检查媒体信息，并用 `ffmpeg` 抽帧做人工确认。
4. HappyHorse 默认会在样片右下角加水印。本次作为模型能力展示保留水印；如果活动要求无水印，需要在可用版本中验证 `--watermark false` 或控制台对应参数。
