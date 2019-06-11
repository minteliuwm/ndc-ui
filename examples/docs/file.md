## File 文件上传

常用的文件上传组件。

<br />

### 基础用法

基础的文件上传用法。

:::demo
```html
<ndc-file @change="handleChange"></ndc-file>
<script>
export default {
  methods: {
    handleChange({ files }) {
      const name = Array.from(files).map(f => f.name).join('，');
      this.$message.info(`选择了文件：${name}`);
    }
  }
};
</script>
```
:::

<br />

### 多选

支持同时上传多个文件。

:::demo 通过属性`multiple`来决定是否支持文件多选。
```html
<ndc-file @change="handleChange" multiple></ndc-file>
<script>
export default {
  methods: {
    handleChange({ files }) {
      const name = Array.from(files).map(f => f.name).join('，');
      this.$message.info(`选择了文件：${name}`);
    }
  }
};
</script>
```
:::

<br />

### 限制文件类型

可以限制上传文件的类型。

:::demo 通过属性`mediaType`来限制上传文件的类型。
```html
<ndc-file @change="handleChange" media-type="image/jpeg" button-text="请选择图片"></ndc-file>
<script>
export default {
  methods: {
    handleChange({ files }) {
      const name = Array.from(files).map(f => f.name).join('，');
      this.$message.info(`选择了文件：${name}`);
    }
  }
};
</script>
```
:::

<br />

### 限制文件大小

可以限制上传文件的大小。

:::demo 通过属性`maxSize`来限制上传文件的大小。
```html
<ndc-file
  @change="handleChange"
  :max-size="10000"
  button-text="请选择不大于10KB的文件"
  @error="handleError">
</ndc-file>
<script>
export default {
  methods: {
    handleChange({ files }) {
      const name = Array.from(files).map(f => f.name).join('，');
      this.$message.info(`选择了文件：${name}`);
    },
    handleError() {
      this.$message.error('文件超出大小');
    }
  }
};
</script>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| multiple | 是否多选 | boolean | — | false |
| mediaType | 支持类型 | string | — | */* |
| extensions | 支持的后缀 | array | — | [] |
| maxSize | 文件最大值，单位 B | number | — | — |
| autoReset | 是否自动重置 | boolean | — | false |
| buttonText | 按钮文案 | string | — | 请选择 |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| — | 展示内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| change | 上传文件改变时触发 | (files: Array[MultiFile], event: Event) |
| error | 上传失败时触发 | (type: string, files: Array[MultiFile], currentFiles: Array[MultiFile]) |
