<template>
  <div class="ndc-dropdown-item" :class="{'selected': selected}" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NdcDropdownItem',
  props: {
    selected: {
      type: Boolean,
      default: false
    }
  }
};
</script>
