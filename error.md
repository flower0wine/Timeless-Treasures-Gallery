## 记录问题

这是一个记录开发时遇到的问题的文档。

### 1. pnpm-lock.yaml 文件自动替换包名的 name 为 title

这个问题不知道是怎么回事，目前我只能手动修改其中的 title 为 name。因为这个问题不知为何本地怎么跑
都不会出现问题，但是在 Github Actions 下执行 pnpm install 就会出现这个问题。
