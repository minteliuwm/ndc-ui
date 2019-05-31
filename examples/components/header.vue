
<template>
  <header class="page-header">
    <div class="page-header-container">
      <a href="https://github.com/minteliuwm/ndc-ui" target="__blank">
        <span class="name">NDC UI</span>
      </a>
    </div>
  </header>
</template>

<style lang="scss">
.page-header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  opacity: 0.98;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  transition: all 0.3s;
  z-index: 100;
  &-container {
    width: 90%;
    margin: 0 auto;
    a {
      display: flex;
      align-items: center;
      height: 80px;
    }
    .name {
      color: #628cf5;
      font-size: 20px;
      margin-left: 5px;
    }
  }
}
</style>
