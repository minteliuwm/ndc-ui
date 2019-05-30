# Button 按钮

<!-- {.md} -->

---

<!-- {.md} -->

## 基础用法

<!-- {.md} -->

基础的按钮用法。

<!-- {.md} -->

<ndc-button theme="default">按钮1</ndc-button>

::: demo

```html
<ndc-button theme="default">按钮1</ndc-button>

<ndc-button theme="primary">按钮2</ndc-button>

<ndc-button theme="active">按钮3</ndc-button>

<ndc-button disabled>按钮4</ndc-button>
```

:::

## Attributes

<!-- {.md} -->

| 参数      | 说明       | 类型   | 可选值          | 默认值  |
| --------- | ---------- | ------ | --------------- | ------- |
| theme | 按钮风格 | String | default/primary/active | default |
| disabled | 是否禁用 | Boolean | - | false |
| click | 点击事件，按钮点击时触发 | Event | - | - |
