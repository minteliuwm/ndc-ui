<template>
  <div class="ndc-table-empty">
    <template v-if="isSearch">{{searchText}}</template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NdcTableEmpty',
  props: {
    isSearch: {
      type: Boolean,
      default: false
    },
    searchText: {
      type: String,
      default: '搜不到相关内容，请重新搜索'
    }
  }
};
</script>
