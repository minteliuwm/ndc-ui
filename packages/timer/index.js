import NdcTimer from './src/timer.vue';

NdcTimer.install = (Vue) => {
  Vue.component(NdcTimer.name, NdcTimer);
};

export default NdcTimer;
