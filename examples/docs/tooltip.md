## Tooltip 文字提示

常用的文字提示组件。

<br />

### 基础用法

基础的文字提示。

:::demo 可用通过属性`position`来设置文字提示的方位。
```html
<ndc-tooltip content="文字提示在上面">
  <div class="md-tooltip">上</div>
</ndc-tooltip>

<ndc-tooltip content="文字提示在下面" position="bottom">
  <div class="md-tooltip">下</div>
</ndc-tooltip>

<ndc-tooltip content="文字提示在左边" position="left">
  <div class="md-tooltip">左</div>
</ndc-tooltip>

<ndc-tooltip content="文字提示在右边" position="right">
  <div class="md-tooltip">右</div>
</ndc-tooltip>
```
:::

<br />

### 自定义提示内容

:::demo 通过name为`content`的slot，可以自定义提示内容。
```html
<ndc-tooltip>
  <div class="md-tooltip">提示</div>
  <template slot="content">
    <i class="ndc-icon-info" />
    <span>这是自定义的提示内容</span>
  </template>
</ndc-tooltip>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled | 是否禁用 | boolean | — | false |
| position | 提示位置 | string | ['top', 'bottom', 'left', 'right'] | top |
| content | 提示内容 | string | — | — |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| — | 展示文案 |
| content | 自定义提示的内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| show | 文字提示显示时触发 | (top: number, left: number) |
| hide | 文字提示隐藏时触发 | — |