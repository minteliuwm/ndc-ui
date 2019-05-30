import NdcButton from './src/button.vue';

NdcButton.install = (Vue) => {
  Vue.component(NdcButton.name, NdcButton);
};

export default NdcButton;
