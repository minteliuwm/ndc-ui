<template>
  <div class="ndc-searchbox">
    <input
      v-model="value"
      :placeholder="placeholder"
      type="text"
      class="ndc-input"
      @keyup="doSearch"
      @change="doChange"
			@input="doInput"
    >
		<i class="ndc-icon-error" v-if="value" @click="clear" />
		<div class="ndc-searchbox-icon" v-if="value" @click="doSearch">
			<i class="ndc-icon-search" />
		</div>
		<i class="ndc-icon-search" v-else />
  </div>
</template>

<script>
export default {
  name: 'NdcSearchbox',
  props: {
    placeholder: {
      type: String,
      default: '请输入关键字'
    }
  },
  data() {
    return {
      value: ''
    };
  },
  methods: {
    doSearch(event) {
      if (event.keyCode && event.keyCode !== 13) {
        return;
      }
      this.$emit('confirm', {
        value: this.value.trim(),
        event
      });
    },
    doChange(event) {
      this.$emit('change', {
        value: this.value.trim(),
        event
      });
    },
    doInput(event) {
      this.$emit('input', {
        value: this.value.trim(),
        event
      });
    },
    clear() {
      this.value = '';
      this.$emit('clear');
    }
  }
};
</script>
