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
                title: "123 Apps",
                url: "https://123apps.com/cn/",
                desc: "强大的工具、可以处理视频、音频、PDF",
                icon: "123apps.png",
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
        title: "AI 视频工具",
        code: "ai-video",
        icon: "video.png",
        children: [
          {
            title: "常用 AI 视频工具",
            code: "ai-video-tools",
            children: [
              {
                title: "AI 视频剪辑",
                url: "https://www.deepai.org/machine-learning-model/video-editing",
                desc: "AI 视频剪辑、特效、后期处理、音频处理等",
                icon: "picture.png",
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
            children: Array(10).fill({
              title: "吐司 AI",
              url: "https://www.deepai.org/machine-learning-model/waifu2x",
              desc: "AI 图像修复、超分辨率、风格迁移、图像增强等",
              icon: "picture.png",
            }),
          },
        ],
      },
    ],
  },
];

export default data;
