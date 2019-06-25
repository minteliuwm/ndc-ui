<template>
  <div class="ndc-table-head">
    <table>
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" :style="{
            width: column.width
          }">
            <slot name="th" :column="column">
              {{column.title}}
              <table-filter v-if="column.filters" :filters="column.filters" @select="handleFilter(arguments[0], column)"></table-filter>
              <table-order v-if="column.order" :order="column.order" @order="handleOrder(arguments[0], column)"></table-order>
            </slot>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import TableFilter from './table-filter';
import TableOrder from './table-order';

export default {
  components: {
    TableFilter,
    TableOrder
  },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleFilter(filter, column) {
      this.$emit('filter', {
        column,
        filter
      });
    },
    handleOrder(order, column) {
      this.$emit('order', {
        order,
        column
      });
    }
  }
};
</script>
