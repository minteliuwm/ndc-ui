<template>
  <button class="ndc-button" :class="['ndc-button-' + theme]" :disabled="disabled" @click="onClick">
		<i v-if="icon" class="ndc-button-icon" :class="icon ? icon : ''"></i>
		<slot></slot>
	</button>
</template>

<script>
export default {
  name: 'NdcButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    theme: {
      default: 'default',
      validator(value) {
        return ['default', 'primary', 'active'].includes(value);
      }
    }
  },
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    }
  }
};
</script>
