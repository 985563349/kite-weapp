# Icon 图标

基于字体的图标

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-icon": "kite-weapp/icon/icon",
}
```

## 代码示例

### 基础用法

通过 `name` 属性设置图标名称，也可以传入图片链接。

```wxml
<k-icon name="close" />
```

### 图标颜色

通过 `color` 属性设置图标颜色。

```wxml
<k-icon name="close" color="#006fee" />
```

### 图标大小

通过 `size` 属性设置图标大小。

```wxml
<k-icon name="close" size="32px" />
```

## API

### 属性

| 参数   | 说明                       | 类型   | 默认值 |
| ------ | -------------------------- | ------ | ------ |
| k-id   | 根节点 id                  | String | -      |
| style  | 根结点样式                 | String | -      |
| name   | 图标名称或图片链接         | String | -      |
| color  | 图标颜色                   | String | -      |
| size   | 图标大小，如 `20px`、`2em` | String | -      |
| prefix | 类名前缀                   | String | k-icon |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### 事件

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 点击图标时触发 | -    |
