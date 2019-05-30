<template>
  <i :class="'ndc-icon-' + name"></i>
</template>

<script>
export default {
  name: 'NdcIcon',

  props: {
    name: String
  }
};
</script>
