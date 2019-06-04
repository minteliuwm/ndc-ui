import NdcSearchbox from './src/searchbox.vue';

NdcSearchbox.install = (Vue) => {
  Vue.component(NdcSearchbox.name, NdcSearchbox);
};

export default NdcSearchbox;
