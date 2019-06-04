import NdcCard from './src/card.vue';

NdcCard.install = (Vue) => {
  Vue.component(NdcCard.name, NdcCard);
};

export default NdcCard;
