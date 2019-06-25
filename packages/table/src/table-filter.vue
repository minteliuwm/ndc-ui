<template>
  <div class="ndc-table-filter">
    <dropdown :items="filters" @select="select" :parse="parse" :value="value">
      <slot></slot>
      <i class="ndc-icon-filter"></i>
    </dropdown>
  </div>
</template>

<script>
import dropdown from '../../dropdown';

export default {
  name: 'NdcTableFilter',
  components: {
    dropdown
  },
  props: {
    filters: {
      default: () => []
    },
    value: {
      type: String,
      default: ''
    },
    parse: {
      type: Function,
      default(item) {
        return item.title;
      }
    }
  },
  watch: {
    value(v) {
      this.$emit('update:value', v);
    }
  },
  methods: {
    select(item) {
      this.$emit('select', item);
    }
  }
};
</script>

<style lang="scss">
.u-tableFilter {
  .u-dropdown {
    display: inline-block;
  }
  .u-dropdown-target {
    white-space: nowrap;
  }
  .filter-select {
    display: inline-block;
    max-width: 56px;
    vertical-align: bottom;
  }
}
</style>
