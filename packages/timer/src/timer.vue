<template>
  <div class="ndc-timer" :style="{color: color}">
    {{timeText}}
  </div>
</template>

<script>
export default {
  name: 'NdcTimer',
  props: {
    color: {
      type: String,
      default: '#333'
    },
    pause: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1000
    },
    value: {
      type: Number,
      default: 0
    },
    countdown: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      time: 0
    };
  },
  created() {
    this.time = this.value;
  },
  mounted() {
    if (!this.pause) {
      this.start();
    }
  },
  computed: {
    timeText() {
      const t = Number(this.time);
      const second = Math.floor((t / 1000) % 60);
      const minute = Math.floor((t / 1000 / 60) % 60);
      const hour = Math.floor((t / (1000 * 60 * 60)) % 24);

      return (`${hour > 9 ? hour + ':' : hour ? '0' + hour + ':' : ''}` + `${('0' + minute).slice(-2)}:${('0' + second).slice(-2)}`);
    }
  },
  methods: {
    start() {
      if (this.countdown && this.time <= 0) {
        return;
      }
      this._interval = setInterval(() => {
        if (this.countdown) { // 倒计时，到 0 停止
          this.time -= this.step;
          if (this.time <= 0) {
            this.stop();
          }
        } else {
          this.time += this.step;
        }
        this.$emit('change', {
          time: this.time
        });
      }, this.step);
    },
    stop() {
      clearInterval(this._interval);
      this.$emit('stop');
    }
  },
  watch: {
    pause(value) {
      value ? this.stop() : this.start();
    }
  }
};
</script>
