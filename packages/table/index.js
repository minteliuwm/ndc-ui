import NdcTable from './src/table.vue';

NdcTable.install = (Vue) => {
  Vue.component(NdcTable.name, NdcTable);
};

export default NdcTable;
