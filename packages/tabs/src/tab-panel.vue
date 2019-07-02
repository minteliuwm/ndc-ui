<template>
  <div class="ndc-tab"
    :class="[
      `ndc-tab-${name}`,
      active ? 'active' : ''
    ]"
    v-show="active"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NdcTabPanel',
  inject: ['tabs'],
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    active() {
      return this.tabs.currentName === this.name;
    }
  }
};
</script>
