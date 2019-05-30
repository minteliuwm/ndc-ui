<template>
  <div class="demo-block">
    <ndc-button class="g-ml-10">按钮1</ndc-button>
    <ndc-button class="g-ml-10" theme="primary">按钮2</ndc-button>
    <ndc-button class="g-ml-10" theme="active">按钮3</ndc-button>
    <ndc-button class="g-ml-10" disabled>按钮4</ndc-button>
    <ndc-button class="g-ml-10" @click="onClick">按钮5</ndc-button>
  </div>
</template>

<script>
export default {
  name: 'button-demo',
  methods: {
    onClick() {
      window.alert('点击了按钮5');
    }
  }
};
</script>
