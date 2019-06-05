## VirtualList 虚拟列表

渲染大数据量时常用的虚拟列表组件。

<br />

### 基础用法

简单的虚拟列表使用。

:::demo
```html
<div style="height: 400px;width: 200px;border: 1px solid #eee;">
  <ndc-virtual-list :data="items"></ndc-virtual-list>
</div>

<script>
const items = [];
for(let i = 0; i < 1000; i++) {
  items.push('item_' + (i + 1));
}

export default {
  data() {
    return {
      items
    };
  }
};
</script>
```
:::

<br />

### 自定义列表项

自定义列表项的渲染。

:::demo 通过设置`itemRender`属性或者在 data 项中定义 render 方法。
```html
<div style="height: 400px;width: 200px;border: 1px solid #eee;">
  <ndc-virtual-list :data="items"></ndc-virtual-list>
</div>

<script>
const items = [];
for(let i = 0; i < 1000; i++) {
  items.push({
    name: 'table_' + (i + 1),
    render(item) {
      return `
        <div class="g-flex-ac" style="height: 32px;">
          <i class="ndc-icon-table"></i>
          ${item.name}
        </div>
      `;
    }
  });
}

export default {
  data() {
    return {
      items
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
| data | 列表数据 | array | — | [] |
| itemHeigth | 列表项高度 | number | — | 32 |
| itemRender | 列表项渲染 | function | — | ```(item) => {if (item.render && typeof item.render === 'function') { return item.render(); } return item; }``` |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| scroll | 滚动时触发 | (event: Event) |
