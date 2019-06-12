import NdcContextMenu from './src/context-menu.vue';

NdcContextMenu.install = (Vue) => {
  Vue.component(NdcContextMenu.name, NdcContextMenu);
};

export default NdcContextMenu;
