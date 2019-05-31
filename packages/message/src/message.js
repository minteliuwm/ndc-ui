import Vue from 'vue';
import MessageComp from './message.vue';
let MessageConstructor = Vue.extend(MessageComp);

const instances = [];
let instance;
let seed = 1;

let wrapperDom;

const Message = (options = {}) => {
  if (Vue.prototype.$isServer) {
    return;
  }

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  const id = 'message_' + seed++;
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;

  if (!wrapperDom) { // TODO: 在一个合适的时机移除该dom
    wrapperDom = document.createElement('div');
    wrapperDom.className = 'ndc-message-wrapper';
    wrapperDom.style.zIndex = 101;
    document.body.appendChild(wrapperDom);
  }
  instance.vm = instance.$mount();
  wrapperDom.appendChild(instance.vm.$el);

  instance.vm.visible = true;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

export default Message;
