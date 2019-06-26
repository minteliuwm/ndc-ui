<template>
  <div class="ndc-table-body">
    <table>
      <tbody>
        <tr v-for="(row, index) in data" :key="row.rowkey || index">
          <td v-for="(col, idx) in columns" :key="idx" :style="{
              width: col.width
            }"
          >
            <slot name="td" :row="row" :column="col">
              {{col.parse ? col.parse(col, row) : (col.name ? row[col.name] : row[idx])}}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
