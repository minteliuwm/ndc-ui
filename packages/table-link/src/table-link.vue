<template>
  <a class="ndc-table-link g-text-link"
    :class="{'g-text-disable': disabled}"
    href="javascript: void(0);"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'NdcTableLink',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
};
</script>
