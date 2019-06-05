## Dropdown 下拉菜单

常用的下拉菜单组件。

<br />

### 基础用法

基础的下拉菜单使用。

:::demo
```html
<ndc-dropdown :items="items" :value.sync="value">
  <span class="g-text-link">点击下拉菜单</span>
</ndc-dropdown>
<script>
export default {
  data() {
    return {
      value: '',
      items: [{
        key: 'project1',
        title: '项目一'
      }, {
        key: 'project2',
        title: '项目二'
      }, {
        key: 'project3',
        title: '项目三'
      }, {
        key: 'project4',
        title: '项目四'
      }]
    };
  }
};
</script>
```
:::

<br />

### 自定义下拉项

下拉菜单中的项可以自定义。

:::demo 可以通过设置`parse`或者定义菜单`slot`的方式自定义下拉项。 
```html
<ndc-dropdown :items="items" :value.sync="value1" :parse="parse">
  <span class="g-text-link">点击下拉菜单</span>
</ndc-dropdown>

<ndc-dropdown>
  <span class="g-text-link">点击下拉菜单</span>
  <template v-slot:content>
    <ndc-dropdown-item
      v-for="(item, index) in items"
      :key="index"
      @click="onClick(item)"
      :selected="item.key === value2"
    >
      <span>{{item.name}}</span>
      <i class="ndc-icon-tick" v-if="item.key === value2"></i>
    </ndc-dropdown-item>
  </template>
</ndc-dropdown>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      items: [{
        key: 'project1',
        name: '项目一'
      }, {
        key: 'project2',
        name: '项目二'
      }, {
        key: 'project3',
        name: '项目三'
      }, {
        key: 'project4',
        name: '项目四'
      }]
    };
  },
  methods: {
    parse(item) {
      return item.name;
    },
    onClick(item) {
      this.value2 = item.key;
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
| items     | 下拉项   | array[object]    | — |     []    |
| parse  | 下拉项内容解析方法    | function   | —   | (item) => item.title   |
| trackKey  | 下拉项的key值 | string   |  —  |  key  |
| value | 下拉菜单选中的值 | [string, number] | — | — |
| alignLeft | 是否居左对齐 | boolean | — | false |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| —— | 下拉菜单的显示文案 |
| content | 下拉菜单面板的内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| select | 点击下拉项时触发 | (item: object) |

<br />

### DropdownItem Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| selected     | 是否选中   | boolean    | — |     false    |

<br />

### DropdownItem Slots
| name    | 说明       |
| -------- | ------------ |
| —— | 下拉项的内容 |