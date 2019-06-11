<template>
  <div class="ndc-tooltip">
    <div class="ndc-tooltip-target" ref="target" @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <slot></slot>
    </div>
    <div v-if="visible" class="ndc-tooltip-main" :class="mainClass" :style="mainStyle">
      <template v-if="content">
        <div v-html="content"></div>
      </template>
      <template v-else>
        <slot name="content"></slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NdcTooltip',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    position: {
      default: 'top',
      validator(value) {
        return ['top', 'right', 'bottom', 'left'].includes(value);
      }
    }
  },
  data() {
    return {
      visible: false,
      x: 0,
      y: 0
    };
  },
  computed: {
    mainClass() {
      const _c = {};
      _c['ndc-tooltip-main__' + this.position] = true;
      return _c;
    },
    mainStyle() {
      const { x, y } = this;
      const bodyHeight = document.body.clientHeight;
      const bodyWidth = document.body.clientWidth;
      const { height, width } = this.$refs.target.getBoundingClientRect();
      let style;

      switch (this.position) {
        case 'top':
          style = {
            bottom: bodyHeight - y + 3 + 'px',
            left: x + width / 2 + 'px'
          };
          break;
        case 'right':
          style = {
            top: y + 'px',
            left: x + width + 6 + 'px'
          };
          break;
        case 'bottom':
          style = {
            top: y + height + 3 + 'px',
            left: x + width / 2 + 'px'
          };
          break;
        case 'left':
          style = {
            top: y + 'px',
            right: bodyWidth - x + 6 + 'px'
          };
          break;
      }

      return style;
    }
  },
  methods: {
    showTooltip() {
      const { top, left } = this.$el.getBoundingClientRect();

      if (this.disabled) {
        return;
      }
      this.x = left;
      this.y = top;
      this.visible = true;
      this.$emit('show', {
        top,
        left
      });
    },
    hideTooltip() {
      this.visible = false;
      this.$emit('hide');
    }
  }
};
</script>
