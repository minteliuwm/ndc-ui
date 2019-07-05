import './validator';
import NdcValidator from './src/validator.vue';

NdcValidator.install = (Vue) => {
  Vue.component(NdcValidator.name, NdcValidator);
};

export default NdcValidator;
