import NdcTabPanel from '../tabs/src/tab-panel.vue';

NdcTabPanel.install = (Vue) => {
  Vue.component(NdcTabPanel.name, NdcTabPanel);
};

export default NdcTabPanel;
