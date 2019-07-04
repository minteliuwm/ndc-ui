## Form 表单

简单的表单组件。

<br />

### 基础用法

基础的表单组件。

:::demo
```html
<ndc-form>
  <ndc-form-item label="实例名称" required>
    <input class="ndc-input" />
  </ndc-form-item>
  <ndc-form-item label="地址" required>
    <input class="ndc-input" />
  </ndc-form-item>
</ndc-form>
```
:::

<br />

### 表单标签居左对齐

表单标签默认居右对齐，也可以设置居左对齐。

:::demo 通过设置`labelAlign`来设置标签的对齐方式。
```html
<ndc-form label-align="left">
  <ndc-form-item label="实例名称" required>
    <input class="ndc-input" />
  </ndc-form-item>
  <ndc-form-item label="地址" required>
    <input class="ndc-input" />
  </ndc-form-item>
</ndc-form>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| labelSize | 标签大小 | string | auto / 2(100px) / 3(110px) / 4(120px) / 5(140px) / 6(160px) | 2 |
| labelAlign | 标签对齐方式 | string | left / right | right |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| —— | 表单的内容 |

<br />

### FormItem Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label | 标签 | string | — | — |
| required | 是否必须 | boolean | — | false |

<br />

### FormItem Slots
| name    | 说明       |
| -------- | ------------ |
| —— | 表单项的内容 |