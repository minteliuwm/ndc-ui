<template>
  <span class="ndc-clipboard">
    <slot>复制</slot>
  </span>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: 'NdcClipboard',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$nextTick(() => {
      const clipboard = new Clipboard(this.$el, {
        text: () => this.text
      });

      clipboard.on('success', e => {
        this.$emit('success', {
          event: e,
          sender: this
        });
        e.clearSelection();
      });

      clipboard.on('error', e => {
        this.$emit('error', {
          event: e,
          sender: this
        });
      });
    });
  }
};
</script>
