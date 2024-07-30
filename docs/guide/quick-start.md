# 快速开始

使用 kite-weapp 前，请确保你已经学习过微信官方的 [小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/framework) 和 [自定义组件介绍](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component)。

## 安装

### 通过 npm 安装

小程序已经支持使用 npm 安装第三方包，详见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm) 。

```bash
npm install kite-weapp
```

### 构建 npm 包

安装完成后，需要在微信开发者工具中对 npm 包进行构建，具体见 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html?search-key=npm)。

## 配置

### 样式重置

将 `app.json` 中的 `"style": "v2"` 移除。[该配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)表示启用新版组件样式，将会导致 Kite 的组件样式错乱。

### TypeScript

如果你使用 `TypeScript` 进行开发，需要修改 `tsconfig.json` 指定 `paths`。

```json
{
  "paths": {
    "kite-weapp/*": ["./miniprogram/miniprogram_npm/kite-weapp/*"]
  }
}
```

## 使用

### 引入组件

以 Button 组件为例，只需要在 `json` 文件中配置 Button 对应的路径即可。

```json
{
  "usingComponents": {
    "k-button": "kite-weapp/button/button"
  }
}
```

### 使用组件

引入组件后，可以在 `wxml` 中直接使用组件。

```wxml
<k-button color="primary">Button</k-button>
```
