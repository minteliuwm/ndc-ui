## Progress 进度条

常用的进度条组件。

<br />

### 基础用法

基础的进度条用法。

:::demo 可以通过属性`textInside`来决定进度是否显示在进度条内。
```html
<div style="width: 300px;">
  <ndc-progress :percentage="20"></ndc-progress>
  <ndc-progress style="margin-top: 8px;" :percentage="60" text-inside></ndc-progress>
</div>
```
:::

<br />

### 隐藏进度

可以隐藏进度条的进度。

:::demo 通过属性`showText`来决定是否显示进度。
```html
<div style="width: 300px;">
  <ndc-progress :percentage="20" :show-text="false"></ndc-progress>
</div>
```
:::

<br />

### 自定义进度条背景色

:::demo 可以通过属性`color`来设置进度条的背景色。
```html
<div style="widtj: 300px;">
  <ndc-progress :percentage="20" color="#f3b230"></ndc-progress>
  <ndc-progress style="margin-top: 8px;" :percentage="60" color="#3c9"></ndc-progress>
  <ndc-progress style="margin-top: 8px;" :percentage="40" color="#309ce4"></ndc-progress>
</div>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| percentage | 进度 | number | 0-100 | 0 |
| height | 进度条高度 | number | — | 12 |
| showText | 是否显示进度值 | boolean | — | true |
| textInside | 进度是否显示在进度条内 | boolean | — | false |
| color | 进度条背景色 | string | — | #6098eb |