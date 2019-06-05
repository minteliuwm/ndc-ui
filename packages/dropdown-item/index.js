import NdcDropdownItem from '../dropdown/src/dropdown-item.vue';

NdcDropdownItem.install = (Vue) => {
  Vue.component(NdcDropdownItem.name, NdcDropdownItem);
};

export default NdcDropdownItem;
