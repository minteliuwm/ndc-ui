## Card 卡片

通用的卡片式布局。

<br />

### 基础用法

:::demo
```html
<ndc-card title="卡片">这是一个简单的卡片。</ndc-card>
```
:::

<br />

### 带状态

:::demo 通过属性`statusInfo`来配置卡片的状态。
```html
<ndc-card title="带状态"
  :status-visible="true"
  :status-info="{ text: '已完成', color: '#1aabff' }"
>这是一个有状态的卡片。</ndc-card>
```
:::

<br />

### 纯布局

不带标题和状态，单纯的布局卡片。

:::demo
```html
<ndc-card>这是一个纯布局的卡片。</ndc-card>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| statusVisible | 是否显示状态 | boolean | — | false |
| statusInfo | 状态信息，包括状态文案和状态色值 | object | — | — |

<br />

### Slot
| name    | 说明       |
| -------- | ------------ |
| —— | 卡片的内容 |