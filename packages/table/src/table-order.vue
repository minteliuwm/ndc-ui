<template>
  <div class="ndc-table-order" @click="handleClick">
    <i class="ndc-icon-down" :class="{'selected': value === 'desc'}" />
    <i class="ndc-icon-up" :class="{'selected': value === 'asc'}" />
  </div>
</template>

<script>
export default {
  name: 'NdcTableOrder',
  props: {
    order: {
      type: [String, Boolean],
      default: ''
    }
  },
  data() {
    return {
      value: ''
    };
  },
  watch: {
    order: {
      immediate: true,
      handler(val) {
        if (typeof value === 'string') {
          return this.value = val;
        }
        this.value = val ? 'asc' : 'desc';
      }
    }
  },
  methods: {
    handleClick() {
      if (this.value === 'asc') {
        this.value = 'desc';
      } else if (this.value === 'desc') {
        this.value = '';
      } else {
        this.value = 'asc';
      }
      this.$emit('order', this.value);
    }
  }
};
</script>
