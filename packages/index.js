/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import Breadcrumb from './breadcrumb'
import Button from './button'
import Card from './card'
import Clipboard from './clipboard'
import Icon from './icon'
import Message from './message'
import Modal from './modal'
import Pagination from './pagination'
import Searchbox from './searchbox'
    const version = '0.1.9'
    const components = [
      Breadcrumb,
  Button,
  Card,
  Clipboard,
  Icon,
  Modal,
  Pagination,
  Searchbox
    ]
    const install = Vue => {
      components.forEach(Component => {
        Vue.use(Component)
      })

      Vue.prototype.$message = Message
    };
    /* istanbul ignore if */
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    export {
      install,
      version,
      Breadcrumb,
  Button,
  Card,
  Clipboard,
  Icon,
  Message,
  Modal,
  Pagination,
  Searchbox
    }
    export default {
      install,
      version
    }
  