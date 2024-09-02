# 臻宝轩（Treasure）

<p align="center">
  <img style="filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));" src="./src/assets/treasure.png" height="240" alt="臻宝轩" />
</p>

正如项目名称所言，这个是用来保存你所收藏的一切东西，臻宝轩诞生的原因是为了解决
自己所收藏的东西太多，但是又没有一个工具可以用来检索和展示自己的收藏。所以就自己
打造了这个一个 `响应式网页应用`。

- 建立时间：2024年09月02日

### 启动项目

#### 安装依赖

项目使用 `pnpm@8.15.2` 版本的包管理器。

```shell
pnpm install
```

#### 启动开发环境

```shell
pnpm dev
```

### 实现的功能

功能的实现只包括使用的功能，其他的细节并不在下面，例如基础组件的实现不在下面列出。

- 实现了展示网站的链接。（2024年09月02日）

### 项目技术栈

截至目前（2024年09月02日），项目技术栈如下：

- 前端：
  - 开发框架：Vue3、VueRouter、Pinia
  - 代码检查：ESLint、Prettier
  - 打包工具：Vite
  - 兼容性处理工具：Babel
  - 样式预处理器：Sass
  - 包管理器：pnpm
  - 其他的请看 package.json 文件
  - 未使用组件库，组件由自己开发

### 自实现的组件

- menu
- tabBar
- tooltip
- drawer
- 等等均位于 src/components 目录下
