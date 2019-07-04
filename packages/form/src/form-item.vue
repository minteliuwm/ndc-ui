<template>
  <div class="ndc-form-item">
    <label class="label" :class="labelClass">{{label}}</label>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NdcFormItem',
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    labelClass() {
      const c = {
        'required': this.required
      };
      if (this.form.labelSize) {
        c[`label-${this.form.labelSize}`] = true;
      }
      return c;
    }
  }
};
</script>
