<template>
  <div class="ndc-file">
    <div @click="showSelectFiles">
      <slot>
        <ndc-button theme="primary">{{buttonText}}</ndc-button>
      </slot>
    </div>
    <input class="ndc-file-input" ref="file" type="file" :multiple="multiple" :accept="mediaType" @change.stop="handleChangeFile">
  </div>
</template>

<script>
import NdcButton from '../../button';

export default {
  name: 'NdcFile',
  components: {
    NdcButton
  },
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    mediaType: {
      type: String,
      default: '*/*'
    },
    extensions: {
      type: Array,
      default() {
        return [];
      }
    },
    maxSize: {
      default: null
    },
    autoReset: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: '请选择'
    }
  },
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    showSelectFiles() {
      if (this.autoReset) {
        this.$refs.file.value = '';
      }
      this.$refs.file.click();
    },
    handleChangeFile(event) {
      const { extensions, maxSize } = this;
      const rxp = extensions.length ? new RegExp(`.*.(${extensions.join('|')})$`, 'g') : null;
      const files = this.$refs.file.files;
      for (let i = 0, len = files.length; i < len; i++) {
        if (rxp && !rxp.test(files[i].name)) {
          this.handleError('EXT_ERROR');
          return;
        }
        if (maxSize && files[i].size > maxSize) {
          this.handleError('SIZE_ERROR');
          return;
        }
      }
      this.fileList = files;
      this.$emit('change', {
        files,
        event
      });
    },
    handleError(type) {
      this.$emit('error', {
        type,
        files: this.fileList,
        currentFiles: this.$refs.file.files
      });
    }
  }
};
</script>
