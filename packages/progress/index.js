import NdcProgress from './src/progress.vue';

NdcProgress.install = (Vue) => {
  Vue.component(NdcProgress.name, NdcProgress);
};

export default NdcProgress;
