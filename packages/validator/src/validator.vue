<template>
  <div class="ndc-validator" :class="{'inline': inline, 'invalid': content, 'valid': !content}">
    <slot></slot>
    <span v-if="content" class="error" :class="{'border': isBorder}">
      <i class="ndc-icon-warn-solid" v-if="isBorder" />
      {{content}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'NdcValidator',
  props: {
    inline: {
      default: false,
      type: Boolean
    },
    name: {
      type: String,
      required: true
    },
    isBorder: {
      type: Boolean,
      default: false
    },
    validate: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    content() {
      const { validate, name } = this;
      return (validate.first && validate.first(name)) || '';
    }
  }
};
</script>
