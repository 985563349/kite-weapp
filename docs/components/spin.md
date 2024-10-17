# Spin 加载

用于页面和区块的加载中状态。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-spin": "kite-weapp/spin/spin"
}
```

## 代码示例

### 颜色

通过 `color` 属性设置颜色，支持 `default`、`primary`、`warning`、`danger`、`success` 五种颜色。

```html
<k-spin>Default</k-spin>
<k-spin color="primary" />
<k-spin color="warning" />
<k-spin color="danger" />
<k-spin color="success" />
```

### 尺寸

通过 `size` 属性设置尺寸，支持 `small`、`default`、`large` 三种尺寸。

```html
<k-spin size="sm" />
<k-spin />
<k-spin size="lg" />
```

### 描述文案

通过 `label` 属性设置描述文案。

```html
<k-spin label="loading..." />
```

### 垂直布局

通过 `vertical` 属性设置加载指示符与描述文案呈垂直布局。

```html
<k-spin label="loading..." vertical />
```

## API

### 属性

### 属性

| 参数     | 说明                                                         | 类型    | 默认值 |
| -------- | ------------------------------------------------------------ | ------- | ------ |
| k-id     | 根节点 id                                                    | String  | -      |
| style    | 根结点样式                                                   | String  | -      |
| color    | 组件颜色，可选值为 `primary`、`warning`、`danger`、`success` | String  | -      |
| size     | 组件大小，可选值为 `small`、`large`                          | String  | -      |
| label    | 描述文案                                                     | String  | -      |
| vertical | 是否为垂直布局                                               | Boolean | false  |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

spin 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                      | 默认值         |
| ------------------------- | -------------- |
| --spin-default-color      | @default-color |
| --spin-primary-color      | @primary-color |
| --spin-warning-color      | @warning-color |
| --spin-danger-color       | @danger-color  |
| --spin-success-color      | @success-color |
| --spin-small-size         | 20px           |
| --spin-default-size       | 28px           |
| --spin-large-size         | 36px           |
| --spin-label-font-size    | @font-size-xs  |
| --spin-animation-duration | 0.8s           |
