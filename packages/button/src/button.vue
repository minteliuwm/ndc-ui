<template>
  <button class="ndc-button" :class="['ndc-button-' + theme]" :disabled="disabled" @click="onClick">
		<i v-if="icon" class="ndc-button-icon" :class="['icon-' + icon]"></i>
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
      type: [Boolean, String],
      default: false
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

<style lang="scss">
.ndc-button {
  box-sizing: border-box;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  min-width: 80px;
  padding: 0 22px;
	vertical-align: middle;
	font-size: 14px;
	cursor: pointer;
  &-icon {
    color: inherit;
    margin-right: 4px;
    margin-left: -8px;
  }
  &.ndc-button-default {
    background-color: #fff;
    border: 1px solid #d9dde3;
    color: #666;
    &:hover {
      border-color: #3274e6;
      color: #3274e6;
    }
  }
  &.ndc-button-primary {
		color: #fff;
		border: 1px solid #3274e6;
    background-color: #3274e6;
    &:hover {
      background-color: #2888fb;
			border: 1px solid #2888fb;
    }
	}
	&.ndc-button-active {
		border: 1px solid #3274e6;
		color: #3274e6;
		background-color: #fff;
		&:hover {
			border-color: #2888fb;
      color: #2888fb;
		}
	}
  &.ndc-button-primary[disabled],
  &.ndc-button-default[disabled] {
    background-color: #f5f5f5;
    border: 1px solid #d9dde3;
    cursor: not-allowed;
    color: #999;
		&:hover {
      border-color: #d9dde3;
      color: #999;
    }
  }
}
</style>
