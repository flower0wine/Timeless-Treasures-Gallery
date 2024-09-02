export interface SiteItem {
  title: string;
  url: string;
  desc: string;
  icon: string;
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
    icon: "picture.png",
    children: [
      {
        title: "AI 图片",
        code: "ai-image",
        icon: "picture.png",
        children: [
          {
            title: "常用 AI 图像工具",
            code: "ai-image-tools",
            children: Array(10).fill({
              title: "吐司 AI",
              url: "https://www.deepai.org/machine-learning-model/waifu2x",
              desc: "AI 图像修复、超分辨率、风格迁移、图像增强等",
              icon: "picture.png",
            }),
          },
          {
            title: "AI 插画生成",
            code: "ai-painting",
            children: [
              {
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
        icon: "picture.png",
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
];

export default data;
