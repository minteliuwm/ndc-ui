## 开发指南

----

<br/>

### 初始化项目

```js
git clone https://github.com/minteliuwm/ndc-ui.git

cd ndc-ui

# 初始化项目、安装依赖
npm run init

# 本地开发模式
npm run dev

# 样式开发单独启动一个服务
npm run dev:style

```

浏览器访问 [http://localhost:8080](http://localhost:8080) 就可以看到所有组件的示例了

<br />

### 添加新组件和样式

请按照 `packages` 目录下的文件夹结构添加新的组件，如需新的样式请在 `packages/theme-chalk/src` 添加。

> tips: 添加新组件后，需执行 npm run build:entry 后，才能在本地使用

<br />

### 添加组件文档

如需添加文档，请在 `examples/docs` 下添加新的文档，同时要在 `nav.config.json` 中添加新的路由才能预览。

<br />

### 发布NPM包和文档

```js
# 发布npm包
npm run release

# 发布文档
npm run publish:docs
```

具体执行命令，可查看对应脚本。

<br />

### 生成CHANGELOG

```js
npm run changelog
```
