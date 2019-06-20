## 快速上手

本节将介绍如何在项目中使用 NDC UI。

<br/>

### 安装

```
npm install ndc-custom-ui --save
```

<br />

### 全局组件使用

首先，引入整个组件库

```js
import NdcComponents from 'ndc-custom-ui';
```

其次，引入组件库样式

```js
import 'ndc-custom-ui/lib/theme-chalk/index.css';
```

最后，全局使用组件库

```js
Vue.use(NdcComponents);
```

<br />

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

<br />

首先，安装 `babel-plugin-component`

```js
npm install babel-plugin-component -D
```

然后，修改 babel.config.js

```js
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['component', {
      'libraryName': 'ndc-custom-ui',
      'styleLibraryName': 'theme-chalk'
    }]
  ]
}
```

接下来，在 main.js 中按需引用

```js
import { Button } from 'ndc-custom-ui';
Vue.use(Button);
```

最后，在页面上用 `<ndc-button></ndc-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <ndc-button>这是一个按钮</ndc-button>
  </div>
</template>
```
