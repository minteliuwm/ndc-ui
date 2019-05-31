## Message 消息提示

常见的顶部消息提示。

<br />

### 基础用法

从顶部出现，默认 1.5 秒后消失。

:::demo
```html
<ndc-button @click="open">提示消息</ndc-button>

<script>
export default {
  methods: {
    open() {
      this.$message('这是一条提示信息');
    }
  }
};
</script>
```
:::

<br />

### 不同状态消息

支持「成功，失败，提示，警告」等类型的消息提示。

:::demo 通过设置`type`属性，或者使用`Message[type]`快捷方式来显示不同类型的消息。
```html
<ndc-button @click="openInfo">提示</ndc-button>
<ndc-button @click="openWarning">警告</ndc-button>
<ndc-button @click="openSuccess">成功</ndc-button>
<ndc-button @click="openError">失败</ndc-button>

<script>
export default {
  methods: {
    openInfo() {
      this.$message({
        type: 'info',
        message: '这是一条提示信息'
      });
    },
    openWarning() {
      this.$message({
        type: 'warning',
        message: '这是一条警告信息'
      });
    },
    openSuccess() {
      this.$message.success('这是一条成功消息');
    },
    openError() {
      this.$message.error('这是一条失败消息');
    }
  }
};
</script>
```
:::

<br />

### 文案居中

消息文案可以居中显示。

:::demo 通过设置`center`属性来决定文案是否居中。
```html
<ndc-button @click="open">提示消息</ndc-button>

<script>
export default {
  methods: {
    open() {
      this.$message({
        type: 'info',
        message: '这是一条文案居中的提示信息',
        center: true
      });
    }
  }
};
</script>
```
:::

<br />

### 手动关闭

提示消息支持手动关闭。

:::demo 通过设置`closable`属性来决定消息是否可以手动关闭。
```html
<ndc-button @click="open">提示消息</ndc-button>

<script>
export default {
  methods: {
    open() {
      this.$message({
        type: 'info',
        message: '这是一条只能手动关闭的提示信息',
        closable: true,
        duration: 0
      });
    }
  }
};
</script>
```
:::

<br />

### Options
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message | 内容 | string | - | - |
| duration | 显示时间（ms），设置为 0 不自动关闭 | number | - | 1500 |
| type | 类型 | string | info / success / warning / error | info |
| className | 自定义样式名 | string | - | - |
| center | 是否居中 | boolean | - | false |
| closable | 是否可以手动关闭 | boolean | - | false |