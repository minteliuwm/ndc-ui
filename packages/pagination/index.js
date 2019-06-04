import NdcPagination from './src/pagination.vue';

NdcPagination.install = (Vue) => {
  Vue.component(NdcPagination.name, NdcPagination);
};

export default NdcPagination;
