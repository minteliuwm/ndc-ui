<template>
  <div class="ndc-context-menu" v-show="visible" :style="{top: position.y + 'px', left: position.x + 'px'}">
    <slot>
      <div v-for="(item, index) in items" :key="index">
        <hr class="line" v-if="item.split" />
        <div v-else
          class="item"
          :class="{disabled: item.disabled}"
          @click="handleClick(item, $event)"
        >
          <slot name="item" :data="item">{{item.title}}</slot>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'NdcContextMenu',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      position: {
        x: -9999,
        y: -9999
      },
      visible: false
    };
  },
  methods: {
    open(event) {
      if (!event) {
        console.warn('Open method is missing event object.');
        return;
      }
      this.visible = true;
      this.$nextTick(() => {
        const height = this.$el.clientHeight;
        const width = this.$el.clientWidth;
        const bodyHeight = document.body.clientHeight;
        const bodyWidth = document.body.clientWidth;
        this.position.x = width + event.clientX < bodyWidth ? event.clientX : bodyWidth - width - 10;
        this.position.y = height + event.clientY < bodyHeight ? event.clientY : bodyHeight - height - 10;
        setTimeout(() => {
          document.body.addEventListener('click', () => {
            this.visible = false;
          }, { once: true });
        }, 0);
      });
    },
    handleClick(item, event) {
      if (item.disabled) {
        return;
      }
      this.$emit('select', { item, event });
    }
  }
};
</script>
