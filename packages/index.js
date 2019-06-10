/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import Breadcrumb from './breadcrumb'
import Button from './button'
import Card from './card'
import Checkbox from './checkbox'
import Clipboard from './clipboard'
import Dropdown from './dropdown'
import DropdownItem from './dropdown-item'
import Icon from './icon'
import Message from './message'
import Modal from './modal'
import Pagination from './pagination'
import Searchbox from './searchbox'
import Select from './select'
import Timer from './timer'
import VirtualList from './virtual-list'
    const version = '0.1.11'
    const components = [
      Breadcrumb,
  Button,
  Card,
  Checkbox,
  Clipboard,
  Dropdown,
  DropdownItem,
  Icon,
  Modal,
  Pagination,
  Searchbox,
  Select,
  Timer,
  VirtualList
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
  Checkbox,
  Clipboard,
  Dropdown,
  DropdownItem,
  Icon,
  Message,
  Modal,
  Pagination,
  Searchbox,
  Select,
  Timer,
  VirtualList
    }
    export default {
      install,
      version
    }
  