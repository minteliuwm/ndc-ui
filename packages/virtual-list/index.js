import NdcVirtualList from './src/virtual-list.vue';

NdcVirtualList.install = (Vue) => {
  Vue.component(NdcVirtualList.name, NdcVirtualList);
};

export default NdcVirtualList;
