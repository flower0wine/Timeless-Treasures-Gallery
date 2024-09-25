export interface SiteItem {
  title: string;
  url: string;
  desc: string;
  icon: string;
  detail?: boolean;
}

export interface CategoryItem {
  title: string;
  icon?: string;
  desc?: string;
  children: Array<SiteItem>;
}

export interface LinkItem {
  title: string;
  code: string;
  icon: string;
  children: Array<LinkItem | SiteItem | CategoryItem>;
}

export type ILinkItem = LinkItem | SiteItem | CategoryItem;

const data: Array<ILinkItem> = [
  {
    title: "AI 工具集",
    code: "ai-tools",
    icon: "ai.png",
    children: [
      {
        title: "AI 图片",
        code: "ai-image",
        icon: "picture.png",
        children: [
          {
            title: "常用 AI 图像工具",
            code: "ai-image-tools",
            children: [
              {
                title: "uxwing",
                url: "https://uxwing.com/",
                desc: "商业项目免费图标下载的独家集合，无需归因，优化良好的免费SVG和PNG图标，可用于界面设计以及Web和应用程序开发。",
                icon: "uxwing.png",
              },
              {
                title: "优设网",
                url: "https://www.uisdc.com/",
                desc: "免费SVG图标下载网站，提供海量免费SVG图标下载，包括Web、App、UI设计、图标设计、插画、动效、音效、字体等。",
                icon: "uisdc.png",
              },
              {
                title: "strapi",
                url: "https://strapi.io/",
                desc: "开源无头CMS、自托管或由您控制的云。CMS 是一种软件应用程序或一组相关的程序，用于创建、管理、修改和发布数字内容",
                icon: "strapi.png",
              },
              {
                title: "ambiphone",
                url: "https://ambiph.one/",
                desc: "环境音乐+工作、学习和放松的音效",
                icon: "ambiphone.png",
              },
              {
                title: "Observable",
                url: "https://observablehq.com/",
                desc: "Observable是一个现代平台，用于开发和托管基于开源的强大、高性能、多语言数据应用程序。",
                icon: "observable.png",
              },
            ],
          },
          {
            title: "AI 插画生成",
            code: "ai-painting",
            children: [
              {
                detail: true,
                title: "美图秀秀",
                url: "https://www.deepai.org/machine-learning-model/video-editing",
                desc: "AI 视频剪辑、特效、后期处理、音频处理等",
                icon: "picture.png",
              },
            ],
          },
        ],
      },
      {
        title: "AI 音频工具",
        code: "ai-audio",
        icon: "music.png",
        children: [
          {
            title: "常用 AI 音频工具",
            code: "ai-audio-tools",
            children: [
              {
                title: "OpenVoice",
                url: "https://github.com/myshell-ai/OpenVoice",
                desc: "OpenVoice 可以精准地克隆参考音色并生成多种语言和口音的语音。OpenVoice 可以对语音风格（如情绪和口音）以及节奏、停顿和语调等其他风格参数进行精细控制。自 2024 年 4 月起，V2 和 V1 均根据 MIT 许可发布。可免费用于商业用途。",
                icon: "open-voice.png",
              },
            ],
          },
        ],
      },
      {
        title: "AI 视频工具",
        code: "ai-video",
        icon: "video.png",
        children: [
          {
            title: "常用 AI 视频工具",
            code: "ai-video-tools",
            children: [
              {
                title: "Stable Video",
                url: "https://www.stablevideo.com/",
                desc: "AI 生成视频",
                icon: "stable-video.png",
              },
              {
                title: "Luma AI",
                url: "https://lunaai.video/zh-CN",
                desc: "使用Luma AI的Dream Machine（梦想机），彻底改变您的视频创作。这款领先的AI视频生成器可以快速将文字描述和图片转换为令人惊叹的高质量视频。实时生成、逼真的视觉效果和用户友好的操作界面使Dream Machine成为专业人士和创意工作者的理想选择。",
                icon: "luma.png",
              },
              {
                title: "StyleOf",
                url: "https://go.styleof.com/",
                desc: "StyleOf - Create magical consumer AI experiences",
                icon: "styleof.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Github 仓库收藏",
    icon: "github.png",
    code: "github-repo",
    children: [
      {
        title: "AI 相关",
        code: "ai-repo",
        icon: "ai.png",
        children: [
          {
            title: "图像生成",
            code: "ai-image-repo",
            children: [
              {
                title: "MoneyPrinterTurbo",
                url: "https://github.com/harry0703/MoneyPrinterTurbo",
                desc: "利用AI大模型，一键生成高清短视频 Generate short videos with one click using AI LLM.",
                icon: "github-origin.png",
              },
              {
                title: "fish-speech",
                url: "https://github.com/fishaudio/fish-speech",
                desc: "文本转语音，全新TTS解决方案",
                icon: "fish-speech.png",
              },
              {
                title: "awesome-free-chatgpt",
                url: "https://github.com/LiLittleCat/awesome-free-chatgpt",
                desc: "免费的 ChatGPT 镜像网站列表，持续更新。",
                icon: "github-origin.png",
              },
              {
                title: "ProPainter",
                url: "https://github.com/sczhou/ProPainter",
                desc: "从视频中删除对象，完成蒙版视频，扩展视频的视图",
                icon: "pro-painter.png",
              },
            ],
          },
          {
            title: "AI 工具",
            code: "ai-tools-repo",
            children: [
              {
                title: "DiffSinger",
                url: "https://github.com/MoonInTheRiver/DiffSinger",
                desc: "这个存储库是我们 AAAI-2022论文的官方 PyTorch 实现，其中我们提出了 DiffSinger（用于歌唱声音合成）和 DiffSpeech（用于文本到语音）。",
                icon: "github-origin.png",
              },
              {
                title: "AutoGPT",
                url: "https://github.com/Significant-Gravitas/AutoGPT",
                desc: "AutoGPT 的愿景是让每个人都能使用和构建 AI。我们的使命是提供工具，让您可以专注于重要的事情。",
                icon: "auto-gpt.png",
              },
            ],
          },
          {
            title: "赚钱",
            code: "ai-money-repo",
            children: [
              {
                title: "Awesome Indie",
                url: "https://github.com/mezod/awesome-indie",
                desc: "独立开发者赚钱的资源",
                icon: "github-origin.png",
              },
            ],
          },
          {
            title: "其他",
            code: "other-repo",
            children: [
              {
                title: "freeCodeCamp",
                url: "https://github.com/freeCodeCamp/freeCodeCamp",
                desc: "freeCodeCamp的开源代码库和课程。免费学习编程。",
                icon: "free-code-camp.png",
              },
              {
                title: "HuLa",
                url: "https://github.com/nongyehong/HuLa-IM-Tauri",
                desc: "HuLa 是一个基于 Tauri、Vite 5、Vue 3 和 TypeScript 构建的即时通讯系统。它利用了 Tauri 的跨平台能力和 Vue 3 的响应式设计，结合了 TypeScript 的类型安全特性和 Vite 5 的快速构建，为用户提供了一个高效、安全和易用的通讯解决方案。",
                icon: "github-origin.png",
              },
              {
                title: "DeepFaceLive",
                url: "https://github.com/iperov/DeepFaceLive",
                desc: "PC流媒体或视频通话的实时人脸交换",
                icon: "github-origin.png",
              },
              {
                title: "MaxKey",
                url: "https://github.com/dromara/MaxKey",
                desc: "MaxKey单点登录认证系统，谐音马克思的钥匙寓意是最大钥匙,是业界领先的IAM-IDaas身份管理和认证产品,支持OAuth 2.x/OpenID Connect、SAML 2.0、JWT、CAS、SCIM等标准协议，提供安全、标准和开放的用户身份管理(IDM)、身份认证(AM)、单点登录(SSO)、RBAC权限管理和资源管理等。",
                icon: "maxkey.png",
              },
              {
                title: "GPT-SoVITS-WebUI",
                url: "https://github.com/dromara/MaxKey",
                desc: "1分钟的语音数据也可以用来训练一个好的TTS模型！（少数镜头声音克隆），强大的少样本语音转换与语音合成Web用户界面。",
                icon: "github-origin.png",
              },
              {
                title: "FingerprintJS",
                url: "https://github.com/fingerprintjs/fingerprintjs",
                desc: "FingerprintJS是一个源代码可用的客户端浏览器指纹库，它查询浏览器属性并从中计算哈希访问者标识符。与Cookie和本地存储不同，指纹在匿名/私人模式下保持不变，即使浏览器数据被清除。",
                icon: "fingerprintjs.png",
              },
              {
                title: "EasySpider",
                url: "https://github.com/NaiboWang/EasySpider",
                desc: "A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",
                icon: "easy-slider.png",
              },
              {
                title: "TAICHI-flet",
                url: "https://github.com/cuifengcn/TAICHI-flet",
                desc: "基于flet的一款windows桌面应用，实现了浏览图片、音乐、小说、漫画、各种资源的功能。",
                icon: "taiji.png",
              },
              {
                title: "OpenUI",
                url: "https://github.com/wandb/openui",
                desc: "构建 UI 组件可能很费劲。OpenUI 旨在让这个过程变得有趣、快速且灵活。这也是我们在W&B使用的一款工具，用于测试和制作下一代工具的原型，以便在 LLM 之上构建强大的应用程序。",
                icon: "open-ui.png",
              },
              {
                title: "Perplexica",
                url: "https://github.com/ItzCrazyKns/Perplexica",
                desc: "Perplexica 是一款人工智能搜索引擎。它是 Perplexity AI 的开源替代品",
                icon: "github-origin.png",
              },
              {
                title: "tabby",
                url: "https://github.com/Eugeny/tabby",
                desc: "一个更现代的终端",
                icon: "tabby.png",
              },
              {
                title: "NeteaseCloudMusicApi",
                url: "https://github.com/lvzhenbo/NeteaseCloudMusicApi",
                desc: "网易云音乐 Node.js API service",
                icon: "github-origin.png",
              },
              {
                title: "blind-watermark",
                url: "https://github.com/guofei9987/blind_watermark",
                desc: "图片盲水印，提取水印警示原图！",
                icon: "github-origin.png",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "工具集",
    code: "tools",
    icon: "tool.png",
    children: [
      {
        title: "设计工具",
        code: "design-tools",
        icon: "palette.png",
        children: [
          {
            title: "常用工具",
            code: "common-tools",
            children: [
              {
                title: "思绪思维导图",
                url: "https://wanglin2.github.io/mind-map",
                desc: "思绪思维导图，这是一个位于 Github Pages 上的静态网站",
                icon: "mind-map.png",
              },
              {
                title: "rmbg",
                url: "https://rmbg.fun/",
                desc: "RMBG是一个多平台图像背景去除工具，它使用开源AI模型，并通过在本地处理图像来确保用户隐私。",
                icon: "rmbg.png",
              },
              {
                title: "Figma",
                url: "https://www.figma.com/",
                desc: "万能的 UI 设计工具",
                icon: "figma.png",
              },
              {
                title: "SocialScreenshots",
                url: "https://socialscreenshots.com/editor",
                desc: "使用 SocialScreenshots 快速将您的截图转换为适合您喜爱的社交媒体的视觉内容",
                icon: "socialscreenshots.png",
              },
              {
                title: "123 Apps",
                url: "https://123apps.com/cn/",
                desc: "强大的工具、可以处理视频、音频、PDF",
                icon: "123apps.png",
              },
              {
                title: "魔音工坊",
                url: "https://www.moyin.com/",
                desc: "在线文字转语音、短视频配音、语音合成、配音网站、广告配音、在线配音、配音软件、童声配音、宣传片配音、课文朗读、课件配音、自定义语音通知、有声小说",
                icon: "moyingongfang.png",
              },
              {
                title: "Regulex",
                url: "https://jex.im/regulex/",
                desc: "JavaScript正则表达式可视化工具",
                icon: "regulex.png",
              },
              {
                title: "【文章】摸鱼神器与 AI 视频创作工具",
                url: "https://www.w2solo.com/topics/5019",
                desc: "很好的一篇文章",
                icon: "",
              },
              {
                title: "w2solo",
                url: "https://www.w2solo.com/",
                desc: "独立开发者",
                icon: "",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
