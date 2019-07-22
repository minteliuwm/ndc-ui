<template>
  <div class="ndc-select" :class="{'disabled': disabled}">
    <input class="ndc-select-input" ref="input" @click.stop v-if="searchable && searchInputVisible" v-model="keyword" :placeholder="getCurrentLabel()" />
    <div class="ndc-select-searchbox" v-if="searchable && !searchInputVisible"
      :class="{
        'disabled': disabled,
        'placeholder': !selected
      }"
      @click="togglePanel"
    >{{getCurrentLabel()}}</div>
    <div class="ndc-select-label" v-else :class="{'disabled': disabled, 'placeholder': !selected}" @click="togglePanel">
      <slot name="label" :option="selected">
        {{getCurrentLabel()}}
      </slot>
    </div>

    <i class="ndc-select-down ndc-icon-chevron-down" @click="togglePanel"></i>
    <i class="ndc-select-clear ndc-icon-error" v-if="clearable && selected" @click="clear"></i>

    <div class="ndc-select-panel" v-show="panelVisible">
      <div v-if="internalOptions.length">
        <div class="ndc-select-option"
          v-for="(item, index) in internalOptions" :key="index"
          :class="{
            'selected': isSelected(item),
            'disabled': item.disabled
          }"
          @click="handleClick(item)"
        >
          <slot name="option" :option="item">
            <span v-html="getCustomOption(item)"></span>
          </slot>
        </div>
      </div>
      <div class="ndc-select-empty" v-else>
        <span>{{ keyword ? noMatchText : noDataText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { isObject } from '../../utils';

export default {
  name: 'NdcSelect',
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [String, Number],
      required: true
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    labelKey: {
      type: String,
      default: 'label'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    noDataText: {
      type: String,
      default: '无数据'
    },
    noMatchText: {
      type: String,
      default: '无结果'
    },
    getOption: {
      type: Function
    }
  },
  data() {
    return {
      selected: null,
      panelVisible: false,
      keyword: '',
      searchInputVisible: false
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.setSelect(val);
      }
    },
    panelVisible(val) {
      if (this.searchable) {
        this.keyword = '';
        this.searchInputVisible = val;
        if (val) {
          this.$nextTick(() => {
            this.$refs.input.focus();
          });
        }
      }
    }
  },
  computed: {
    actualOptions() {
      return this.options.map(o => {
        const isobject = isObject(o);
        const currentLabel = isobject ? o[this.labelKey] || o[this.valueKey] || '' : o;
        const currentValue = isobject ? o[this.valueKey] || o[this.labelKey] || '' : o;
        const old = isobject ? o : {};
        return Object.assign(old, {
          currentLabel,
          currentValue,
          disabled: !!o.disabled
        });
      });
    },
    internalOptions() {
      return this.searchable ? this.actualOptions.filter(o => o[this.valueKey].includes(this.keyword) || o[this.labelKey].includes(this.keyword)) : this.actualOptions;
    }
  },
  methods: {
    getCurrentLabel() {
      return (this.selected && this.selected.currentLabel) || this.placeholder;
    },
    getCustomOption(item) {
      if (this.getOption) {
        return this.getOption(item);
      }
      return item.currentLabel;
    },
    togglePanel() {
      if (this.disabled) {
        return;
      }
      this.panelVisible = !this.panelVisible;
      if (this.panelVisible) {
        setTimeout(() => {
          document.body.addEventListener('click', () => {
            this.panelVisible = false;
          }, { once: true });
        }, 0);
      }
      this.$emit('before-show');
    },
    isSelected(item) {
      return this.selected && this.selected.currentValue === item.currentValue;
    },
    handleClick(item) {
      this.selected = item;
      this.emitChange();
      this.panelVisible = false;
    },
    setSelect(val) {
      const arr = this.actualOptions.filter(a => a.currentValue === val);
      this.selected = arr.length ? arr[0] : null;
    },
    clear() {
      this.selected = null;
      this.emitChange();
    },
    emitChange() {
      const val = (this.selected && this.selected[this.valueKey]) || '';
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  }
};
</script>
