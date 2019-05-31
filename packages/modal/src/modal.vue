<template>
  <div class="ndc-modal-wrapper"
    :class="{'center': center, className}"
    v-show="visible"
    @click="handleClickWrapper"
  >
    <div ref="modal" class="ndc-modal-main" :style="modalStyle">
      <div class="ndc-modal-header" v-if="headerVisible">
        <slot name="header">
          <div class="content">
            {{title}}
            <i class="ndc-icon-close" :class="{disabled: !closable}" @click="closable && hide()"></i>
          </div>
        </slot>
      </div>
      <div class="ndc-modal-content">
        <slot></slot>
      </div>
      <div class="ndc-modal-footer" v-if="footerVisible">
        <slot name="footer">
          <div class="content">
            <ndc-button theme="primary" v-if="confirmButton" @click="confirm">{{confirmButton}}</ndc-button>
            <ndc-button v-if="cancelButton" @click="cancel">{{cancelButton}}</ndc-button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import NdcButton from '../../button/index';

export default {
  name: 'NdcModal',
  components: {
    NdcButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      default: ''
    },
    top: {
      type: Number,
      default: 150
    },
    center: {
      type: Boolean,
      default: false
    },
    minHeight: {
      type: Number,
      default: 200
    },
    maxHeight: {
      type: Number,
      default: 500
    },
    headerVisible: {
      type: Boolean,
      default: true
    },
    footerVisible: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeOnClickMask: {
      type: Boolean,
      default: false
    },
    confirmButton: {
      type: String,
      default: '确认'
    },
    cancelButton: {
      type: String,
      default: '取消'
    },
    onConfirm: Function
  },
  computed: {
    modalStyle() {
      const { width, height, minHeight, maxHeight, top } = this;
      return {
        width: width ? width + 'px' : '600px',
        height: height ? height + 'px' : 'auto',
        minHeight: minHeight ? minHeight + 'px' : '100px',
        maxHeight: maxHeight ? maxHeight + 'px' : '500px',
        top: top ? top + 'px' : '150px'
      };
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.$emit('show', { sender: this });
      }
    }
  },
  methods: {
    confirm() {
      if (this.onConfirm && typeof this.onConfirm === 'function') {
        const funcResult = this.onConfirm({ sender: this });
        if (funcResult.then) { // TODO: 先简单判断返回是否异步
          funcResult.then(re => {
            if (re) {
              this.hide();
            }
          });
        } else if (funcResult) {
          this.hide();
        }
        return;
      }
      this.$emit('confirm', { sender: this });
      this.hide();
    },
    cancel() {
      this.$emit('cancel', { sender: this });
      this.hide();
    },
    hide(isHideFromConfirm) {
      this.$emit('hide', { sender: this });
    },
    handleClickWrapper(e) {
      if (this.closeOnClickMask && e.target.className === e.currentTarget.className) {
        this.hide();
      }
    }
  }
};
</script>
