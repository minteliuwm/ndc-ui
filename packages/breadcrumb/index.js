import NdcBreadcrumb from './src/breadcrumb.vue';

NdcBreadcrumb.install = (Vue) => {
  Vue.component(NdcBreadcrumb.name, NdcBreadcrumb);
};

export default NdcBreadcrumb;
