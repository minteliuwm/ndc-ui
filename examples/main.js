import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import NdcComponents from '../packages/index';
import '../packages/theme-chalk/src/index.scss';

import demoBlock from './components/demo-block.vue';

Vue.use(NdcComponents);

Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
