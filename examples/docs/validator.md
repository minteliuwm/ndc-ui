## Validator 校验器

常用的校验器组件。

<br />

### 基础用法

:::demo
```html
<ndc-validator name="instance" :validate="errors">
  <input type="text" class="ndc-input ndc-input-xl" name="instance"
    v-model="instance" autocomplete="off"
    placeholder="1-64位字母、数字或下划线组成，以字母开头，字母或数字结尾，禁用MySQL保留字"
    v-validate="{
      required: '实例名',
      beginWithLetter: true,
      includeWithWords: true,
      endWithLetterAndNumber: true,
      withoutMysql: true
    }"
  />
</ndc-validator>

<ndc-button class="g-mt-20" theme="primary" @click="validate">校验</ndc-button>

<script>
export default {
  data() {
    return {
      instance: ''
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(re => {
        if(re) {
          this.$message.success('校验成功');
        }
      });
    }
  }
};
</script>
```
:::

<br />

### 行内显示

校验提示信息可以和输入项显示在一行。

:::demo 通过属性`inline`来设置校验信息行内显示。
```html
<ndc-validator name="instance" :validate="errors" inline>
  <input type="text" class="ndc-input ndc-input-xl" name="instance"
    v-model="instance" autocomplete="off"
    placeholder="1-64位字母、数字或下划线组成，以字母开头，字母或数字结尾，禁用MySQL保留字"
    v-validate="{
      required: '实例名',
      beginWithLetter: true,
      includeWithWords: true,
      endWithLetterAndNumber: true,
      withoutMysql: true
    }"
  />
</ndc-validator>

<ndc-button class="g-mt-20" theme="primary" @click="validate">校验</ndc-button>

<script>
export default {
  data() {
    return {
      instance: ''
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(re => {
        if(re) {
          this.$message.success('校验成功');
        }
      });
    }
  }
};
</script>
```
:::

<br />

### 带边框

校验提示信息带边框显示。

:::demo 通过属性`is-border`来设置校验信息是否带边框。
```html
<ndc-validator name="instance" :validate="errors" is-border>
  <input type="text" class="ndc-input ndc-input-xl" name="instance"
    v-model="instance" autocomplete="off"
    placeholder="1-64位字母、数字或下划线组成，以字母开头，字母或数字结尾，禁用MySQL保留字"
    v-validate="{
      required: '实例名',
      beginWithLetter: true,
      includeWithWords: true,
      endWithLetterAndNumber: true,
      withoutMysql: true
    }"
  />
</ndc-validator>

<ndc-validator class="g-mt-20" name="source" :validate="errors" inline is-border>
  <input type="text" class="ndc-input ndc-input-xl" name="source"
    v-model="source" autocomplete="off"
    placeholder="1-64位字母、数字或下划线组成，以字母开头，字母或数字结尾，禁用MySQL保留字"
    v-validate="{
      required: '源端',
      beginWithLetter: true,
      includeWithWords: true,
      endWithLetterAndNumber: true,
      withoutMysql: true
    }"
  />
</ndc-validator>

<ndc-button class="g-mt-20" theme="primary" @click="validate">校验</ndc-button>

<script>
export default {
  data() {
    return {
      instance: '',
      source: ''
    };
  },
  methods: {
    validate() {
      this.$validator.validateAll().then(re => {
        if(re) {
          this.$message.success('校验成功');
        }
      });
    }
  }
};
</script>
```
:::

<br />

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| inline | 提示信息是否行内显示 | boolean | — | false |
| name | name（必须），和输入项的 name 对应 | string | — | — |
| isBorder | 提示信息是否显示边框 | boolean | — | false |
| validate | 校验规则 | object | — | — |

<br />

### Slots
| name    | 说明       |
| -------- | ------------ |
| — | 输入项 |

<br />

### Validates
| 名称 | 校验规则 | 提示信息 |
| -------- | ----------- | -------------- |
| gtThan0 | parseInt(val) === +val && +val > 0 | 大于0的整数 |
| gtThanN1 | +val === -1 \|\| (parseInt(val) === +val && +val > 0) | -1或大于0的整数组成 |
| gtThanWith0 | parseInt(val) === +val && +val >= 0 | 大于等于0的整数 |
| beginWithLetter | /^[a-zA-Z]/ | 以字母开头 |
| endWithLetterAndNumber | /[a-zA-Z0-9]$/ | 以字母或数字结尾 |
| withoutMysql | — | 不得使用MySQL保留字 |
| includeWithWords | /^[a-zA-Z0-9_]*$/ | 以字母、数字或下划线组成 |
| phoneNumber | /^\d{11}$/ | 手机号码为11位数字 |
| emailValidator | /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{2,})+$/ | 请输入正确的邮箱地址 |
| timeValidator | /^[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+$/ | 请输入正确格式的时间表达式 |
