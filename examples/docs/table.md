## Table 表格

常用的表格组件。

<br />

### 基础用法

基础的表格。

:::demo
```html
<ndc-table :columns="columns" :data="tableData"></ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态'
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: '运行中',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: '停止',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: '初始化',
        progress: '100%'
      }]
    };
  }
};
</script>
```
:::

<br />

### 空表格

没有数据的空表格。

:::demo
```html
<ndc-table :columns="columns" :data="tableData"></ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态'
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: []
    };
  }
};
</script>
```
:::

<br />

### 不显示表头

没有表头的表格。

:::demo 通过设置`showHeader`属性来决定表头是否显示。
```html
<ndc-table :columns="columns" :data="tableData" :show-header="false"></ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态'
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: '运行中',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: '停止',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: '初始化',
        progress: '100%'
      }]
    };
  }
};
</script>
```
:::

<br />

### 可筛选

表格列支持筛选。

:::demo 可以通过设置`column`的`filters`属性来定义列的筛选。
```html
<ndc-table :columns="columns" :data="actualData"
  :filter-value="filterValue"
  :filter-parse="filterParse"
  @filter="handleFilter"
></ndc-table>

<script>
const STATUS = {
  stopped: '停止',
  alive: '运行中',
  init: '初始化',
  failed: '失败'
};

export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态',
        parse(col, row) {
          return STATUS[row[col.name]];
        },
        filters: [{
          key: 'ALL',
          value: '全部'
        }, {
          key: 'init',
          value: '初始化'
        }, {
          key: 'alive',
          value: '运行中'
        }, {
          key: 'stopped',
          value: '停止'
        }, {
          key: 'failed',
          value: '失败'
        }]
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: 'alive',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: 'stopped',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: 'init',
        progress: '100%'
      }],
      filterValue: {
        status: 'ALL'
      }
    };
  },
  computed:  {
    actualData() {
      const filterStatus = this.filterValue.status;
      if (filterStatus === 'ALL') {
        return this.tableData;
      }
      return this.tableData.filter(d => d.status === filterStatus);
    }
  },
  methods: {
    filterParse(item) {
      return item.value;
    },
    handleFilter({ filter, column }) {
      this.filterValue[column.name] = filter.key;
    }
  }
};
</script>
```
:::

<br />

### 可排序

表格列支持排序。

:::demo 可以通过设置`column`的`order`属性来定义列的排序。
```html
<ndc-table :columns="columns" :data="actualData" @order="handleOrder"></ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID',
        order: 'asc'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态',
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: '运行中',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: '停止',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: '初始化',
        progress: '100%'
      }],
      order: 'asc'
    };
  },
  computed:  {
    actualData() {
      const order = this.order;
      if (!order) {
        return this.tableData;
      }
      return this.tableData.concat().sort((a, b) => order === 'asc' ? a.id - b.id : b.id - a.id); 
    }
  },
  methods: {
    handleOrder({ order, column }) {
      this.order = order;
    }
  }
};
</script>
```
:::

<br />

### 固定表头

支持表头的固定。

:::demo
```html
<ndc-table style="height: 150px;" :columns="columns" :data="tableData" :header-fixed="true"></ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        width: '20%',
        title: '任务ID'
      }, {
        name: 'name',
        width: '30%',
        title: '任务名称'
      }, {
        name: 'status',
        width: '20%',
        title: '状态'
      }, {
        name: 'progress',
        title: '进度'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: '运行中',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: '停止',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: '初始化',
        progress: '100%'
      }, {
        id: 4,
        name: 'test2',
        status: '初始化',
        progress: '100%'
      }, {
        id: 5,
        name: 'test3',
        status: '初始化',
        progress: '100%'
      }, {
        id: 6,
        name: 'test4',
        status: '初始化',
        progress: '100%'
      }]
    };
  }
};
</script>
```
:::

<br />

### 自定义表格内容

表格内容支持自定义。

:::demo
```html
<ndc-table :columns="columns" :data="tableData">
  <template slot="td" slot-scope="scope">
    <span v-if="scope.column.title === '操作'">
      <ndc-table-link :disabled="scope.row.status !== '运行中'" @click="handleOptions('start')">启动</ndc-table-link>
      <ndc-table-link :disabled="scope.row.status === '运行中'" @click="handleOptions('stop')">停止</ndc-table-link>
    </span>
    <span v-else>{{scope.row[scope.column.name]}}</span>
  </template>
</ndc-table>

<script>
export default {
  data() {
    return {
      columns: [{
        name: 'id',
        title: '任务ID'
      }, {
        name: 'name',
        title: '任务名称'
      }, {
        name: 'status',
        title: '状态',
      }, {
        name: 'progress',
        title: '进度'
      }, {
        title: '操作'
      }],
      tableData: [{
        id: 1,
        name: 'kudu',
        status: '运行中',
        progress: '100%'
      }, {
        id: 2,
        name: 'hive',
        status: '停止',
        progress: '无'
      }, {
        id: 3,
        name: 'test',
        status: '初始化',
        progress: '100%'
      }]
    };
  },
  methods: {
    handleOptions(option) {
      this.$message.info(option === 'start' ? '这是启动操作' : '这是停止操作');
    }
  }
};
</script>
```
:::

<br />

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| data | 表格数据 | array | — | [] |
| columns | 表格列信息，具体配置见Column Attributes | array | — | [] |
| showHeader | 是否显示表头 | boolean | — | true |
| rowKey | 每一行的唯一值 | string | — | — |
| filterValue | 筛选列的值 | object | — | — |
| filterParse | 筛选列选项的解析方法 | function | — | (item) => item.title |
| headerFixed | 是否固定表头 | boolean | — | false |
| emptyText | 没有数据时显示的内容 | string | — | 暂无数据 |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| — | 表格 |
| header | 表头 |
| th | 表头列 |
| body | 表格数据 |
| td | 表格每列数据 |
| empty | 表格没有数据时内容 |

<br />

### Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| order | 排序时触发 | ({ order: string, column: object }) |
| filter | 筛选时触发 | ({ filter: object, column: object }) |

<br />

### Column Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| name | 列的唯一标识（必须） | string | — | — |
| title | 列名，没有则显示name | string | — | — |
| width | 列宽 | string | — | — |
| filters | 筛选列表，有则代表该列可筛选 | array | — | — |
| order | 排序，非false情况下代表该列可排序 | [boolean, string] | true / asc / desc / '' | — |
| parse | 列的解析方法，接受两个参数（column, row） | function | — | — |

<br />

### TableFilter Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| filters | 筛选项 | array | — | — |
| value | 选中值 | string | — | — |
| parse | 筛选项解析方法 | function | — | (item) => item.title |

<br />

### TableFilter Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| select | 选中时触发 | (item: object) |

<br />

### TableOrder Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| order | 当前排序方式 | string | asc / desc / '' | — |

<br />

### TableOrder Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| order | 点击时触发 | (order: string) |

<br />

### TableLink Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| disabled | 是否禁用 | boolean | — | false |

<br />

### TableLink Events
| 方法名 | 说明 | 参数 |
| ------ | ------- | ------- |
| click | 点击时触发 | (event: Event) |

<br />

### TableEmpty Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---------- | -------- | ---------- | ------------- | -------- |
| isSearch | 是否搜索 | boolean | — | false |
| searchText | 搜索后的空值 | string | — | searchText |

<br />

### TableEmpty Slots
| name    | 说明       |
| -------- | ------------ |
| — | 默认内容 |
