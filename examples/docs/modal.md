## Modal 弹窗

常用的弹窗操作。

<br/>

### 基础用法

基础的弹窗用法。

:::demo 需要设置`visible`属性，为`true`时显示弹窗。

```html
<span class="g-text-link" @click="modalVisible = true">点击显示弹窗</span>
<ndc-modal
  :visible="modalVisible"
  title="简单弹窗"
  @hide="modalVisible = false"
>
  这是一个简单的弹窗
</ndc-modal>

<script>
export default {
  data() {
    return {
      modalVisible: false
    };
  }
};
</script>
```

:::

### 居中

弹窗显示在页面正中间。

:::demo 可以设置`center`属性，决定弹窗是否显示在屏幕中间。

```html
<span class="g-text-link" @click="modalVisible = true">点击显示居中弹窗</span>
<ndc-modal
  :visible="modalVisible"
  title="居中弹窗"
  :center="true"
  @hide="modalVisible = false"
>
  这是一个显示在页面中间的弹窗
</ndc-modal>

<script>
export default {
  data() {
    return {
      modalVisible: false
    };
  }
};
</script>
```

:::

### 关闭弹窗

可以通过点击遮罩层来关闭弹窗。

:::demo 通过设置`closeOnClickMask`属性来决定点击遮罩层时是否关闭弹窗

```html
<span class="g-text-link" @click="modalVisible = true">点击显示可点击遮罩层关闭弹窗</span>
<ndc-modal
  :visible="modalVisible"
  title="可关闭弹窗"
  :center="true"
  :close-on-click-mask="true"
  @hide="modalVisible = false"
>
  这是一个可以点击遮罩层关闭的弹窗
</ndc-modal>

<script>
export default {
  data() {
    return {
      modalVisible: false
    };
  }
};
</script>
```

:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| visible | 是否显示 | boolean | - | false |
| title | 标题 | string | - | - |
| className | 自定义样式名 | string | - | - |
| width | 宽度 | number | - | 600 |
| height | 高度 | number | - | auto |
| top | 离页面顶部距离 | number | - | 150 |
| center | 是否显示在页面中间 | boolean | - | false |
| minHeight | 最小高度 | number | - | 200 |
| maxHeight | 最大高度 | number | - | 500 |
| headerVisible | 是否显示顶部标题栏 | boolean | - | true |
| footerVisible | 是否显示底部按钮栏 | boolean | - | true |
| closable | 是否显示关闭按钮 | boolean | - | false |
| closeOnClickMask | 是否支持点击遮罩层关闭弹窗 | boolena | - | false |
| confirmButton | 确认按钮文案，null 或空不显示 | string | - | 确认 |
| cancelButton | 取消按钮文案， null 或空不显示 | string | - | 取消 |
| onConfirm | 确认按钮点击后调用，用该方法后不再触发 hide 事件，可以是一个异步方法，返回 false 不执行默认操作 | function | - | - |

### Slots
| name    | 说明       |
| -------- | ------------ |
| —— | 弹窗的内容 |
| header | 顶部标题栏内容 |
| footer | 底部按钮栏内容 |

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| show | 弹窗显示时触发 | (sender: NdcModal) |
| hide | 弹窗关闭时触发 | (sender: NdcModal) |
| confirm | 弹窗确认按钮被点击时触发 | (sender: NdcModal) |
| cancel | 弹窗取消按钮被点击时触发 | (sender: NdcModal) |