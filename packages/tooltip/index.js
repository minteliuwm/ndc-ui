import NdcTooltip from './src/tooltip.vue';

NdcTooltip.install = (Vue) => {
  Vue.component(NdcTooltip.name, NdcTooltip);
};

export default NdcTooltip;
