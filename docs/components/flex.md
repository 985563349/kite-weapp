# Flex 弹性布局

用于对齐的弹性布局容器。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-flex": "kite-weapp/flex/flex"
}
```

### 与 space 组件的区别

- space 为内联元素提供间距，适用于行、列中多个子元素等距排列。
- space 为块级元素提供间距，适用于垂直或水平方向上的子元素布局，并提供了更多灵活性和控制能力。

## 代码示例

### 垂直布局

通过 `vertical` 属性设置主轴为垂直方向。

```wxml
<k-flex vertical>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>
```

### 对齐方式

通过 `justify` 属性设置主轴方向的对齐方式。

```wxml
<k-flex justify="center">
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>
```

通过 `align` 属性设置交叉轴方向的对齐方式。

```wxml
<k-flex align="center">
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>
```

### 间距

通过 `gap` 属性设置元素之间的间距，预设了 `small`、`middle`、`large` 三种尺寸，也可以自定义间距，默认单位为 `px`。

```wxml
<k-flex gap="small">
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>

<k-flex gap="100">
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>
```

### 自动换行

通过 `wrap` 属性设置元素自动换行。

```wxml
<k-flex gap="small" wrap>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
  <k-button color="primary">Button</k-button>
</k-flex>
```

## API

### 属性

| 参数     | 说明                                                | 类型                                                                                | 默认值 |
| -------- | --------------------------------------------------- | ----------------------------------------------------------------------------------- | ------ |
| k-id     | 根节点 id                                           | String                                                                              | -      |
| style    | 根结点样式                                          | String                                                                              | -      |
| vertical | 主轴方向是否垂直                                    | Boolean                                                                             | -      |
| justify  | 主轴方向对齐方式                                    | [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) | -      |
| align    | 交叉轴方向对齐方式                                  | [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)         | -      |
| flex     | flex CSS 简写属性                                   | [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)                       | -      |
| gap      | 元素之间的间距，可选值为 `small`、`middle`、`large` | String / Number                                                                     | -      |
| wrap     | 是否自动换行                                        | [flex-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap) / Boolean   | -      |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |