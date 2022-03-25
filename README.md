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

在 src 文件夹下新建文件名为 data.ts，复制以下代码，根据接口内容初始化相应的值。

```ts
interface IBase {
  name: string;
  pinyin: string;
  city: string;
  position: string;
  gender: string;
  age: number;
  web: string;
  mail: string;
  phone: string;
  formatPhone: string;
}

interface IEdu {
  school: string;
  major: string;
  background: string;
  startTime: string;
  endTiem: string;
  course: string;
  gpa: string;
  prize: string;
  certificate: string;
}

const base: IBase

const edu: IEdu

export { base, edu };
```



