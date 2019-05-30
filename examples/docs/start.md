# 快速上手
<!-- {.md} -->

----
<!-- {.md} -->

## 安装
<!-- {.md} -->

```
npm install ndc-custom-ui --save
```
<!-- {.md} -->

## 全局组件使用
<!-- {.md} -->

```js
import NdcComponents from 'ndc-custom-ui' // 引入组件库
```
<!-- {.md} -->

引入<!-- {.md} -->样式

```js
import 'ndc-custom-ui/lib/theme-chalk/index.css'
```
最后，全局使用组件库<!-- {.md} -->
```js
Vue.use(NdcComponents)
```
<!-- {.md} -->

## 单个组件按需使用
<!-- {.md} -->

可以局部注册所需的组件，适用于与其他框架组合使用的场景
<!-- {.md} -->

```js

import { Button } from 'NdcComponents'

Vue.use(Button)

```
<!-- {.md} -->

在模板中，用<!-- {.md} --> `<ndc-button></ndc-button>` 自定义标签的方式使用组件

```html
<template>
  <div>
    <ndc-button>这是一个按钮基础卡片</ndc-button>
  </div>
</template>
```
<!-- {.md} -->


