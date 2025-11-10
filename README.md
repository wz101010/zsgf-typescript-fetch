# zsgf-client@2.1.4

# ZSGF Client SDK

![NPM Version](https://img.shields.io/npm/v/zsgf-client)

一个基于 [Fetch API](https://fetch.spec.whatwg.org/) 的现代化 TypeScript/JavaScript 客户端 SDK，帮助您快速集成和调用 ZSGF 服务。

## 特性

✅ **TypeScript 支持** - 完整的类型定义，提供更好的开发体验  
✅ **多环境兼容** - 支持 Node.js、浏览器和各种构建工具  
✅ **现代化 API** - 基于 Fetch API，支持 Promise/async-await  
✅ **轻量级** - 无额外依赖，体积小巧  

## 快速开始

### 安装

```bash
npm install zsgf-client
```

或使用 yarn：

```bash
yarn add zsgf-client
```

### 基本使用

```typescript
import { Configuration, DefaultApi } from 'zsgf-client';

// 配置客户端
const config = new Configuration({
  basePath: 'https://api.example.com',
  // 其他配置项...
});

// 创建 API 实例
const api = new DefaultApi(config);

// 调用 API
async function example() {
  try {
    const response = await api.someMethod();
    console.log(response);
  } catch (error) {
    console.error('API 调用失败:', error);
  }
}
```

### JavaScript 使用示例

```javascript
const { Configuration, DefaultApi } = require('zsgf-client');

const config = new Configuration({
  basePath: 'https://api.example.com'
});

const api = new DefaultApi(config);

api.someMethod()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('API 调用失败:', error);
  });
```

## 环境要求

### 运行环境

- **Node.js** 14.x 或更高版本
- **浏览器** 支持 ES2015+ 的现代浏览器
- **构建工具** Webpack、Rollup、Vite 等

### 语言支持

- **ES6+** (推荐) - 原生支持 Promise 和现代 JavaScript 特性
- **ES5** - 需要 Polyfill 支持 (如 es6-promise)

### 模块系统

- **ES Modules** (推荐)
- **CommonJS** 
- **UMD** (浏览器直接引入)

## TypeScript 支持

本 SDK 使用 TypeScript 开发，提供完整的类型定义。类型定义会通过 `package.json` 自动解析，无需额外配置。

```typescript
// 完整的类型提示和错误检查
import { Configuration, DefaultApi, SomeModel } from 'zsgf-client';

const config: Configuration = new Configuration({
  basePath: 'https://api.example.com'
});

const api: DefaultApi = new DefaultApi(config);
```

## 配置选项

```typescript
const config = new Configuration({
  basePath: 'https://api.example.com',        // API 基础路径
  apiKey: 'your-api-key',                     // API 密钥
  username: 'your-username',                  // 用户名
  password: 'your-password',                  // 密码
  accessToken: 'your-access-token',           // 访问令牌
  headers: {                                  // 自定义请求头
    'Custom-Header': 'value'
  }
});
```

## 错误处理

```typescript
import { ResponseError } from 'zsgf-client';

try {
  const response = await api.someMethod();
  // 处理成功响应
} catch (error) {
  if (error instanceof ResponseError) {
    console.error('HTTP 错误:', error.response.status);
    console.error('错误信息:', await error.response.text());
  } else {
    console.error('其他错误:', error);
  }
}
```

## 浏览器兼容性

如果需要支持较旧的浏览器（如 IE11），请安装相应的 Polyfill：

```bash
npm install es6-promise whatwg-fetch
```

然后在代码中引入：

```javascript
import 'es6-promise/auto';
import 'whatwg-fetch';
```

## 许可证

[MIT License](LICENSE)

## 贡献

欢迎提交 Issue 和 Pull Request！


```
npm install zsgf-client@2.1.4 --save
```