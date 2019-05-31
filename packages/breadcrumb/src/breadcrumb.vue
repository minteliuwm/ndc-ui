<template>
  <div class="ndc-breadcrumb">
    <i class="ndc-breadcrumb-icon" :class="icon" @click="onClick" />
    <div class="ndc-breadcrumb-title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'NdcBreadcrumb',
  props: {
    icon: {
      type: String,
      default: 'ndc-icon-back'
    },
    title: {
      type: String,
      default: ''
    },
    click: {
      type: Function,
      default: () => {
        return true;
      }
    }
  },
  methods: {
    onClick() {
      if (this.click && this.click()) {
        this.$router && this.$router.back();
      }
    }
  }
};
</script>
