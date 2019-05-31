import NdcClipboard from './src/clipboard.vue';

NdcClipboard.install = (Vue) => {
  Vue.component(NdcClipboard.name, NdcClipboard);
};

export default NdcClipboard;
