## Icon 图标

提供了一套常用的图标集合。

<br/>

### 使用方法

直接通过设置类名为 `ndc-icon-iconName` 来使用即可。

:::demo
```html
<i class="ndc-icon-success"></i>
<i class="ndc-icon-warn"></i>
<i class="ndc-icon-error"></i>
<ndc-button type="primary" icon="ndc-icon-search">搜索</ndc-button>
```
:::

### 图标集合

<ul class="md-icon-list">
  <li v-for="name in ['file-copy', 'line', 'choose', 'plus', 'minus', 'eye', 'eye-open', 'table', 'task',
    'source', 'engine', 'warn-solid', 'info-solid', 'question-solid', 'undo', 'stop', 'notAllow', 'success', 
    'warn', 'plus-circle', 'minus-circle', 'move', 'error', 'build', 'fix', 'down', 'up', 'drop-down', 'close', 
    'search', 'back', 'info', 'add', 'refresh', 'cpu', 'previous', 'next', 'setting', 'question', 'view',
    'tick', 'chevron-down', 'chevron-up', 'finance', 'db', 'dbn', 'mig', 'policy', 'save', 'sql', 'document',
    'timing', 'trigger', 'user', 'fullScreen_off', 'fullScreen_on', 'tpl', 'filter', 'more']" :key="name" class="md-icon-item">
    <span class="item">
      <i class="icon" :class="'ndc-icon-' + name"></i>
      <span class="name">{{'ndc-icon-' + name}}</span>
    </span>
  </li>
</ul>
