/* eslint-disable */
// This file is auto gererated by build/build-entry.js
    import Breadcrumb from './breadcrumb'
import Button from './button'
import Card from './card'
import Checkbox from './checkbox'
import Clipboard from './clipboard'
import ContextMenu from './context-menu'
import Dropdown from './dropdown'
import DropdownItem from './dropdown-item'
import File from './file'
import Icon from './icon'
import Message from './message'
import Modal from './modal'
import Pagination from './pagination'
import Progress from './progress'
import Searchbox from './searchbox'
import Select from './select'
import Table from './table'
import TableEmpty from './table-empty'
import TableFilter from './table-filter'
import TableLink from './table-link'
import TableOrder from './table-order'
import Timer from './timer'
import Tooltip from './tooltip'
import VirtualList from './virtual-list'
    const version = '0.2.7'
    const components = [
      Breadcrumb,
  Button,
  Card,
  Checkbox,
  Clipboard,
  ContextMenu,
  Dropdown,
  DropdownItem,
  File,
  Icon,
  Modal,
  Pagination,
  Progress,
  Searchbox,
  Select,
  Table,
  TableEmpty,
  TableFilter,
  TableLink,
  TableOrder,
  Timer,
  Tooltip,
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
  ContextMenu,
  Dropdown,
  DropdownItem,
  File,
  Icon,
  Message,
  Modal,
  Pagination,
  Progress,
  Searchbox,
  Select,
  Table,
  TableEmpty,
  TableFilter,
  TableLink,
  TableOrder,
  Timer,
  Tooltip,
  VirtualList
    }
    export default {
      install,
      version
    }
  