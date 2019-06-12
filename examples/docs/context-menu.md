## ContextMenu 上下文菜单

常见的上下文菜单。

<br />

### 基础用法

基础的上下文菜单用法。

:::demo
```html
<ndc-button @click="showMenu">点击显示菜单</ndc-button>
<ndc-context-menu ref="menu" :items="items" @select="handleSelect"></ndc-context-menu>
<script>
export default {
  data() {
    return {
      items: [{
        title: '菜单一'
      }, {
        title: '菜单二'
      }, {
        title: '菜单三'
      }, {
        title: '菜单四'
      }]
    };
  },
  methods: {
    showMenu(event) {
      this.$refs.menu.open(event);
    },
    handleSelect({ item }) {
      this.$message.info(`点击了菜单：${item.title}`);
    }
  }
};
</script>
```
:::

<br />

### 禁用菜单项

可以禁用某一个菜单项。

:::demo 通过设置`item`的`disabled`属性来禁用菜单项。
```html
<div class="md-context-menu" @contextmenu.prevent="showMenu">右键显示菜单</div>
<ndc-context-menu ref="menu" :items="items" @select="handleSelect"></ndc-context-menu>
<script>
export default {
  data() {
    return {
      items: [{
        title: '菜单一'
      }, {
        title: '菜单二',
        disabled: true
      }, {
        title: '菜单三'
      }, {
        title: '菜单四'
      }]
    };
  },
  methods: {
    showMenu(event) {
      this.$refs.menu.open(event);
    },
    handleSelect({ item }) {
      this.$message.info(`点击了菜单：${item.title}`);
    }
  }
};
</script>
```
:::

<br />

### 自定义菜单项

可以自定义菜单项。

:::demo
```html
<div class="md-context-menu" @contextmenu.prevent="showMenu">右键显示菜单</div>
<ndc-context-menu ref="menu" :items="items" @select="handleSelect">
  <template slot="item" slot-scope="scope">
    {{scope.data.title + '(' + scope.data.key + ')'}}
  </template>
</ndc-context-menu>
<script>
export default {
  data() {
    return {
      items: [{
        title: '菜单一',
        key: 'item1'
      }, {
        title: '菜单二',
        key: 'item2',
        disabled: true
      }, {
        split: true
      }, {
        title: '菜单三',
        key: 'item3'
      }, {
        title: '菜单四',
        key: 'item4'
      }]
    };
  },
  methods: {
    showMenu(event) {
      this.$refs.menu.open(event);
    },
    handleSelect({ item }) {
      this.$message.info(`点击了菜单：${item.title}`);
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
| items | 菜单项内容，属性值见 ContextMenuItem Attributes | array | — | [] |

<br />

### ContextMenuItem Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 菜单项名称 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| split | 是否分割线 | boolean | — | false |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| — | 菜单内容 |
| item | 某个菜单项的内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| select | 选择菜单项时触发 | (item: object, event: Event) |