## Select 下拉选择

常见的下拉选择，暂不支持多选。

<br />

### 基础用法

基础的单选下拉框。

:::demo
```html
<ndc-select :options="options" v-model="value" clearable></ndc-select>

<script>
export default {
  data() {
    return {
      options: [{
        label: '选项一',
        value: 'item1'
      }, {
        label: '选项二',
        value: 'item2'
      }, {
        label: '选项三',
        value: 'item3'
      }],
      value: 'item1'
    };
  }
};
</script>
```
:::

<br />

### 禁用

下拉框的禁用状态。

:::demo 通过属性`disabled`来决定下拉框是否禁用。
```html
<ndc-select :options="options" v-model="value" disabled></ndc-select>

<script>
export default {
  data() {
    return {
      options: [{
        label: '选项一',
        value: 'item1'
      }, {
        label: '选项二',
        value: 'item2'
      }, {
        label: '选项三',
        value: 'item3'
      }],
      value: 'item1'
    };
  }
};
</script>
```
:::

<br />

### 可搜索

可以搜索的下拉框。

:::demo 通过属性`searchable`来决定下拉框是否可搜索。
```html
<ndc-select :options="options" v-model="value" clearable searchable></ndc-select>

<script>
export default {
  data() {
    return {
      options: [{
        label: '选项一',
        value: 'item1'
      }, {
        label: '选项二',
        value: 'item2'
      }, {
        label: '选项三',
        value: 'item3'
      }],
      value: 'item1'
    };
  }
};
</script>
```
:::

<br />

### 自定义选项

可以自定义下拉选项的内容。

:::demo 可以通过属性`getOption`来自定义选项内容。
```html
<ndc-select :options="options" v-model="value" :get-option="getOption"></ndc-select>

<script>
export default {
  data() {
    return {
      options: [{
        label: '选项一',
        value: 'item1'
      }, {
        label: '选项二',
        value: 'item2'
      }, {
        label: '选项三',
        value: 'item3'
      }],
      value: 'item1'
    };
  },
  methods: {
    getOption(item) {
      return item.label + '(' + item.value + ')';
    }
  }
};
</script>
```
:::

<br />

### 自定义输入框显示

可以自定义下拉框的显示内容。

:::demo
```html
<ndc-select :options="options" v-model="value">
  <template slot="label" slot-scope="scope">
    <i class="ndc-icon-table" />
    <span>{{scope.option.currentLabel}}</span>
  </template>
</ndc-select>

<script>
export default {
  data() {
    return {
      options: [{
        label: '选项一',
        value: 'item1'
      }, {
        label: '选项二',
        value: 'item2'
      }, {
        label: '选项三',
        value: 'item3'
      }],
      value: 'item1'
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
| options | 下拉框选项 | array | — | [] |
| value | 下拉框的值 | [string, number] | — | — |
| valueKey | value标识 | string | — | value |
| labelKey | label标识 | string | — | label |
| placeholder | 占位符 | string | — | 请选择 |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否支持清空 | boolean | — | false |
| searchable | 是否支持搜索 | boolean | — | false |
| noDataText | 没有选项时显示内容 | string | — | 无数据 |
| noMatchText | 没有搜索结果时显示内容 | string | — | 无结果 |
| getOption | 自定义选项方法 | function | — | — |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| label | 下拉框显示内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| change | 值改变时触发 | value |
| before-show | 下拉框显示前触发 | — |