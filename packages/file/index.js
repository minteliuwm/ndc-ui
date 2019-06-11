import NdcFile from './src/file.vue';

NdcFile.install = (Vue) => {
  Vue.component(NdcFile.name, NdcFile);
};

export default NdcFile;
