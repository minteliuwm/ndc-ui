## Searchbox 搜索框

通用的搜索框组件。

<br />

### 基础用法
::: demo
```html
<ndc-searchbox placeholder="请输入任务名"></ndc-searchbox>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| placeholder | 占位符 | string | — | 请输入关键字 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| confirm | 回车时触发 | (value: string, event: Event) |
| change | 搜索框的值改变时触发 | (value: string, event: Event) |
| input | 搜索框输入时触发 | (value: string, event: Event) |
| clear | 清空按钮被点击时触发 | — |