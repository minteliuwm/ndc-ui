<template>
  <div class="ndc-form" :class="[`ndc-form-${labelAlign}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NdcForm',
  provide() {
    return {
      form: this
    };
  },
  props: {
    labelSize: {
      type: String,
      default: '2'
    },
    labelAlign: {
      default: 'right',
      validator(value) {
        return ['right', 'left'].includes(value);
      }
    }
  }
};
</script>
