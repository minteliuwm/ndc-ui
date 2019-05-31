## Button 按钮

常用的操作按钮。

<br/>

### 基础用法

基础的按钮用法。

:::demo 使用`theme`属性来定义 Button 的样式。

```html
<ndc-button>默认按钮</ndc-button>
<ndc-button theme="primary">主要按钮</ndc-button>
<ndc-button theme="active">激活按钮</ndc-button>
```
:::

<br />

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<ndc-button disabled>禁用按钮</ndc-button>
```
:::

<br />

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 NDC 的 icon 组件。

```html
<ndc-button icon="ndc-icon-refresh">刷新</ndc-button>
<ndc-button icon="ndc-icon-search">搜索</ndc-button>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| theme     | 按钮风格   | string    |   primary / active / default |     default    |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| click | 按钮被点击时触发 | (event: Event) |