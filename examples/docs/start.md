## 快速上手
本节将介绍如何在项目中使用 NDC UI。

-----

<br/>

### 安装

```
npm install ndc-custom-ui --save
```

<br />

### 全局组件使用

```js
import NdcComponents from 'ndc-custom-ui' // 引入组件库
```

引入样式

```js
import 'ndc-custom-ui/lib/theme-chalk/index.css'
```
最后，全局使用组件库
```js
Vue.use(NdcComponents)
```

<br />

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { Button } from NdcComponents
Vue.use(Button)
```

在模板中，用 `<ndc-button></ndc-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <ndc-button>这是一个按钮</ndc-button>
  </div>
</template>
```
