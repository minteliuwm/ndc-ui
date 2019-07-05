import Vue from 'vue';

import _ from 'lodash';
import cst from '../utils/cst';

import VeeValidate, { Validator } from 'vee-validate';
import zhCN from 'vee-validate/dist/locale/zh_CN';

Validator.localize(zhCN);

const config = {
  locale: 'zh_CN',
  events: 'input|blur'
};

Vue.use(VeeValidate, config);

const dictionary = {
  zh_CN: {
    messages: {
      required: (field, [name]) => (name || '') + '不能为空'
    }
  }
};

Validator.localize(dictionary);

/**
 * 自定义校验规则
 */
const validateMap = {
  gtThan0: {
    text: '大于0的整数',
    validator(val) {
      return !val || (parseInt(val) === +val && +val > 0);
    }
  },
  gtThanN1: {
    text: '-1或大于0的整数组成',
    validator(val) {
      return !val || (+val === -1 || (parseInt(val) === +val && +val > 0));
    }
  },
  gtThanWith0: {
    text: '大于等于0的整数',
    validator(val) {
      return !val || (parseInt(val) === +val && +val >= 0);
    }
  },
  beginWithLetter: {
    text: '以字母开头',
    validator(val) {
      return !val || /^[a-zA-Z]/.test(val);
    }
  },
  endWithLetterAndNumber: {
    text: '以字母或数字结尾',
    detect: 'blur',
    validator(val) {
      return !val || /[a-zA-Z0-9]$/.test(val);
    }
  },
  withoutMysql: {
    text: '不得使用MySQL保留字',
    detect: 'blur',
    validator(val) {
      return !cst.MYSQL_RESERVE_WORD.includes(val.toUpperCase());
    }
  },
  includeWithWords: {
    text: '以字母、数字或下划线组成',
    validator(val) {
      return !val || /^[a-zA-Z0-9_]*$/.test(val);
    }
  },
  phoneNumber: {
    text: '手机号码为11位数字',
    validator(val) {
      return /^\d{11}$/.test(val);
    }
  },
  emailValidator: {
    text: '请输入正确的邮箱地址',
    validator(val) {
      return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]{2,})+$/.test(val);
    }
  },
  timeValidator: {
    text: '请输入正确格式的时间表达式',
    validator(val) {
      return /^[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+\s[^\s]+$/.test(val);
    }
  },
  diffWithOthers: {
    text: (name, { label }) => `${label}已存在，请重新设置`,
    detect: 'blur',
    validator(val, { key, arr }) {
      let count = 0;
      return !arr.some(item => {
        if (key ? item[key] === val : item === val) { count++; }
        return count === 2;
      });
    }
  }
};

_.forIn(validateMap, ({ text, option, validator, detect }, key) => {
  Validator.extend(key, {
    getMessage: _.isString(text) ? () => text : text,
    validate(val, args) {
      if (detect === 'blur') {
        const name = _.isArray(args) ? args[0] : args.name;
        if (document.activeElement.name === name) {
          return true;
        }
      }
      return validator(val, args);
    }
  }, {
    ...(option || {})
  });
});
