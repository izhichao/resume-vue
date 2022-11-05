## 项目环境

- Vue3 + Vite + TypeScript

- 需要 [Node.js](https://nodejs.org/en/) 版本 >= 12.0.0。

## 运行项目

安装项目依赖：

```shell
npm install
```

运行项目：

```shell
npm run dev
```

## 修改数据

1. 在 src 中创建 `data.ts` 文件

2. 导出一个 data 对象，其中类型参考 UserType

```ts
import { UserType } from './types';
export const data: UserType = {};
```





