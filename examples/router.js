import Vue from 'vue';
import Router from 'vue-router';
import navConf from '@/nav.config.json';
import hljs from 'highlight.js';

Vue.use(Router);

let routes = [{
  path: '/',
  redirect: {
    name: 'introduce'
  }
}];

Object.keys(navConf).forEach(header => {
  routes = routes.concat(navConf[header]);
});

const addComponent = router => {
  router.forEach(route => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.name === 'site-index') {
        route.component = r => require.ensure([], () => r(require(`./docs/introduce.md`)));
      } else {
        route.component = r => require.ensure([], () => r(require(`./docs/${route.name}.md`)));
      }
    }
  });
};

addComponent(routes);

const availableRoutes = routes.filter(item => item.path);

const router = new Router({
  routes: availableRoutes
});

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

export default router;
