<template>
  <div class="ndc-tabs">
    <div class="ndc-tabs-header">
      <div class="wrapper" :class="{'card': isCard}">
        <div v-for="(tab, index) in tabs" :key="index"
          :class="[
            'tab',
            tab.name === currentName ? 'active' : ''
          ]"
          @click="handleClickTab(tab.name)"
        >
          <span>{{tab.label || tab.name}}</span>
          <i v-if="closable" class="ndc-icon-close" @click="handleCloseTab(tab.name, index)" />
        </div>
      </div>
    </div>
    <div class="ndc-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NdcTabs',
  provide() {
    return {
      tabs: this
    };
  },
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: String,
      default: ''
    },
    isCard: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    beforeLeave: {
      type: Function,
      default: () => {
        return true;
      }
    },
    beforeClose: {
      type: Function,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      currentName: ''
    };
  },
  watch: {
    value(val) {
      this.setCurrentName(val);
    }
  },
  created() {
    this.currentName = this.value;
  },
  methods: {
    handleClickTab(name) {
      this.setCurrentName(name);
      this.$emit('tab-click', name);
    },
    handleCloseTab(name, index) {
      const close = (name) => {
        this.$emit('close', name);
      };

      if (this.beforeClose && typeof this.beforeClose === 'function') {
        const funcRe = this.beforeLeave();
        if (funcRe && funcRe.then) {
          return funcRe.then(re => {
            if (re) {
              close(name);
            }
          });
        }
        if (funcRe !== false) {
          close(name);
        }
      } else {
        close(name);
      }
    },
    setCurrentName(name) {
      const changeCurrentName = (name) => {
        this.currentName = name;
        this.$emit('input', name);
      };

      if (this.beforeLeave && typeof this.beforeLeave === 'function') {
        const funcRe = this.beforeLeave();
        if (funcRe && funcRe.then) {
          return funcRe.then(re => {
            if (re) {
              changeCurrentName(name);
            }
          });
        }
        if (funcRe !== false) {
          changeCurrentName(name);
        }
      } else {
        changeCurrentName(name);
      }
    }
  }
};
</script>
