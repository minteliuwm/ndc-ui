<template>
  <div class="page-nav">
    <div v-for="title in (Object.keys(data))" class="group-container" :key="title">
      <p class="page-nav-title">{{title}}</p>
      <div class="page-nav-items" v-for="nav in data[title]" :key="nav.name">
        <template v-if="nav.desc">
          <router-link
            :class="$route.name === nav.name ? 'active' : ''"
            v-if="nav.name"
            :to="{name: nav.name}"
          >{{nav.desc}}</router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import navConf from '@/nav.config.json';
export default {
  data () {
    return {
      data: navConf
    };
  }
};
</script>

<style lang="scss">
.page-nav {
  display: inline-block;
  margin: 32px 0;
  padding: 0;
  color: #333;
  background-color: #fff;
  z-index: 99;
  .group-container {
    margin-bottom: 32px;
  }
  .page-nav-title {
    font-size: 16px;
    line-height: 40px;
    font-weight: bold;
  }
  .page-nav-items {
    font-size: 14px;
    font-weight: normal;
    line-height: 1.8;
    a {
      display: block;
      position: relative;
      padding: 8px 24px;
      color: #333;
      font-weight: normal;
      line-height: 1.5;
      cursor: pointer;
      &.hover {
        color: #2888fb;
      }
      &.active {
        color: #3274e6;
      }
    }
  }
}
</style>
