<template>
  <div class="ndc-progress g-flex-ac">
    <div class="ndc-progress-wrapper" :style="progressStyle">
      <div class="ndc-progress-bar" :style="barStyle">
        <div class="ndc-progress-text inside" v-if="showText && textInside">{{percentage}}%</div>
      </div>
    </div>
    <span class="ndc-progress-text" v-if="showText && !textInside">{{percentage}}%</span>
  </div>
</template>

<script>
export default {
  name: 'NdcProgress',
  props: {
    percentage: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 12
    },
    showText: {
      type: Boolean,
      default: true
    },
    textInside: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#6098eb'
    }
  },
  computed: {
    progressStyle() {
      const { height } = this;
      return {
        height: height + 'px',
        borderRadius: height / 2 + 'px'
      };
    },
    barStyle() {
      const { percentage, height, color } = this;
      return {
        width: percentage ? percentage + '%' : '0',
        borderRadius: height / 2 + 'px',
        backgroundColor: color
      };
    }
  }
};
</script>
