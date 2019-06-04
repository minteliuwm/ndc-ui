<template>
	<ul class="ndc-pagination" v-show="total">
		<span class="ndc-pagination-desc" v-if="totalVisible">共 {{total}} 条记录</span>
		<li @click="goPrePage" :disabled="internalPage <= 1">
			<a href="javascript:void(0)">
				<span>&laquo;</span>
			</a>
		</li>
		<li :class="{'active': n === internalPage, 'eps': (n === hideFrontIndex || n === hideBackIndex) && n !== pageCount}"
			v-for="(n, index) in pageCount" :key="index"
			v-show="[1, 2, pageCount].indexOf(n) > -1 || (n >= hideFrontIndex && n <= hideBackIndex)"
			@click="changePage(n)"
    >
			<a href="javascript:void(0)">
				{{(n === hideFrontIndex || n === hideBackIndex) && n !== pageCount ? '' : n}}
			</a>
		</li>
		<li @click="goNextPage" :disabled="internalPage >= pageCount">
			<a href="javascript:void(0)">
				<span>&raquo;</span>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'NdcPagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    totalVisible: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: Number,
      default: 10
    },
    page: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      internalPage: 1
    };
  },
  watch: {
    page: {
      immediate: true,
      handler(val) {
        this.internalPage = val;
      }
    }
  },
  computed: {
    pageCount() {
      const { total, pageSize } = this;
      return Math.ceil(total / pageSize);
    },
    hideFrontIndex() {
      const { internalPage, pageCount } = this;
      if (pageCount <= 7 || internalPage < 6) {
        return -1;
      }
      if (internalPage > pageCount - 3) {
        return pageCount - 6;
      }
      return internalPage - 3;
    },
    hideBackIndex() {
      const { internalPage, pageCount } = this;
      if (internalPage > pageCount - 3) {
        return pageCount;
      }
      if (internalPage < 6) {
        return 8;
      }
      return internalPage + 3;
    }
  },
  methods: {
    changePage(page) {
      this.internalPage = page;
      this.emitChange();
    },
    goPrePage() {
      if (this.internalPage === 1) {
        return;
      }
      this.internalPage -= 1;
      this.emitChange();
    },
    goNextPage() {
      const { internalPage, pageCount } = this;
      if (internalPage === pageCount) {
        return;
      }
      this.internalPage += 1;
      this.emitChange();
    },
    emitChange() {
      this.$emit('update:page', this.internalPage);
      this.$emit('change', this.internalPage);
    }
  }
};
</script>
