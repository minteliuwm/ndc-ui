## Tabs 标签页

常见的标签页组件。

<br />

### 基础用法

:::demo
```html
<ndc-tabs :tabs="tabs" v-model="activeName">
  <ndc-tab-panel name="Kudu">Kudu</ndc-tab-panel>
  <ndc-tab-panel name="HDFS">HDFS</ndc-tab-panel>
  <ndc-tab-panel name="Kafka">Kafka</ndc-tab-panel>
</ndc-tabs>

<script>
export default {
  data() {
    return {
      tabs: [{
        name: 'Kudu',
        label: 'Kudu'
      }, {
        name: 'HDFS',
        label: 'HDFS'
      }, {
        name: 'Kafka',
        label: 'Kafka'
      }],
      activeName: 'Kudu'
    };
  }
};
</script>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tabs | 标签页信息 | array[object] | — | — |
| value | 当前选中的标签页 | string | — | — |
| beforeLeave | 离开当前标签页前调用的方法，返回 false ，标签页不切换 | function | — | — |

<br />

### Slot
| name    | 说明       |
| -------- | ------------ |
| — | 默认内容 |

<br />

### TabPanel Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name | 标签的唯一标识 | string | — | — |