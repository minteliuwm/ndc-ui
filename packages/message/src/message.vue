<template>
  <transition name="ndc-message-fade" @after-leave="handleAfterLeave">
    <div :class="['ndc-message', 'ndc-message-' + type, className, center ? 'center' : '']" v-show="visible">
      <i :class="['ndc-message-icon', iconClass]"></i>
      <div class="ndc-message-content">{{message}}</div>
      <i v-if="closable" class="ndc-message-close ndc-icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script>
const typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warn',
  error: 'error'
};

export default {
  data() {
    return {
      visible: false,
      message: '',
      duration: 1500,
      type: 'info',
      className: '',
      center: false,
      closable: false,
      timer: null
    };
  },
  computed: {
    iconClass() {
      return this.type ? `ndc-icon-${typeMap[this.type]}` : 'ndc-icon-info';
    }
  },
  mounted() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.close();
      }, this.duration);
    }
  },
  beforeDestroy() {
    this.timer && clearTimeout(this.timer);
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.visible = false;
    }
  }
};
</script>
