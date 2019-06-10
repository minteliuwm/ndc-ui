## Timer 计时器

常用的计时器组件。

<br />

### 基础用法

基础的计时器用法。

:::demo
```html
<ndc-timer />
```
:::

<br />

### 倒计时

:::demo 通过属性`countdown`配置是否倒计时。
```html
<ndc-timer countdown :value="600000" />
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| color | 计时器颜色 | string | — | #333 |
| value | 计时器初始值 | number | — | 0 |
| pause | 是否中断 | boolean | — | false |
| step | 计时器频率（ms） | number | — | 1000 |
| countdown | 是否倒计时 | boolean | — | false |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| change | 计时器变化时触发 | (time: number) |
| stop | 倒计时为0时触发 | — |