<template>
  <div class="ndc-dropdown">
    <div class="ndc-dropdown-target" ref="target" @click="toggleDropdown">
      <slot></slot>
    </div>
    <div class="ndc-dropdown-panel" v-show="visible" :style="panelStyle">
      <slot name="content">
        <ndc-dropdown-item
          v-for="(item, index) in items"
          :key="index"
          @click="doClick(item)"
					:selected="item[trackKey] === internalValue"
        >
          {{parse(item)}}
          <i class="ndc-icon-tick" v-if="item[trackKey] === internalValue"></i>
        </ndc-dropdown-item>
      </slot>
    </div>
  </div>
</template>

<script>
import NdcDropdownItem from './dropdown-item';

export default {
  name: 'NdcDropdown',
  components: {
    NdcDropdownItem
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    parse: {
      type: Function,
      default(item) {
        return item.title;
      }
    },
    trackKey: {
      type: String,
      default: 'key'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    alignLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      internalValue: '',
      panelStyle: {}
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.internalValue = val;
      }
    }
  },
  methods: {
    toggleDropdown() {
      if (this.visible) {
        this.hide();
        return;
      }

      const targetDom = this.alignLeft ? this.$refs.target : (this.$refs.target.children.length ? this.$refs.target.children[0] : this.$refs.target);
      const { top, left, height } = targetDom.getBoundingClientRect();
      this.panelStyle = {
        top: top + height + (this.alignLeft ? -10 : 0) + 'px',
        left: left + 'px'
      };

      this.visible = true;
      setTimeout(() => {
        document.body.addEventListener('click', () => {
          this.visible = false;
        }, { once: true });
      }, 0);
    },
    doClick(item) {
      const val = item && item[this.trackKey];
      if (val) {
        this.internalValue = val;
        this.$emit('update:value', val);
        this.$emit('select', item);
        this.hide();
        item.onclick && item.onclick();
      }
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
