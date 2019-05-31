<template>
  <div id="app" class="page">
    <page-header></page-header>
    <div class="page-container">
      <page-nav class="nav"></page-nav>
      <router-view class="view"></router-view>
    </div>
    <!-- <page-footer></page-footer> -->
  </div>
</template>

<script>
import PageHeader from './components/header.vue';
import PageNav from './components/nav.vue';
import router from './router';

export default {
  name: 'app',
  components: {
    PageHeader,
    PageNav
  },
  mounted () {
    if ('onhashchange' in window) {
      window.onhashchange = (ev) => {
        const name = window.location.hash.substring(2);
        router.push({ name });
      };
    }
  }
};
</script>

<style lang="scss">
@import './scss/index.scss';

.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  &-container {
    flex: 1;
    height: 0;
    width: 100%;
    padding-left: 40px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    .nav {
      overflow-y: auto;
      width: 210px;
    }
    .view {
      overflow-y: auto;
      flex: 1;
      padding: 32px 48px 48px;
      box-sizing: border-box;
    }
  }
}
</style>
