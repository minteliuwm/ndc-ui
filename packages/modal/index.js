import NdcModal from './src/modal.vue';

NdcModal.install = (Vue) => {
  Vue.component(NdcModal.name, NdcModal);
};

export default NdcModal;
