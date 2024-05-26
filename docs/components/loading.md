# Loading 加载

用于页面和区块的加载中状态。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-loading": "kite-weapp/loading/loading"
}
```

## 代码示例

### 类型

通过 `type` 属性设置类型，支持 `default`、`primary`、`secondary`、`success`、`warning`、`danger` 六种颜色。

```wxml
<k-loading />
<k-loading type="primary" />
<k-loading type="secondary" />
<k-loading type="success" />
<k-loading type="warning" />
<k-loading type="danger" />
```

### 尺寸

通过 `size` 属性设置尺寸，支持 `small`、`default`、`large` 三种尺寸。

```wxml
<k-loading size="sm" />
<k-loading />
<k-loading size="lg" />
```

### 描述文本

通过 `label` 属性设置描述文本。

```wxml
<k-loading label="loading..." />
```

### 垂直布局

通过 `vertical` 属性设置加载指示符与描述文案呈垂直布局。

```wxml
<k-loading label="loading..." vertical />
```

## API

### 属性

| 参数     | 说明                                                                       | 类型    | 默认值 |
| -------- | -------------------------------------------------------------------------- | ------- | ------ |
| k-id     | 根节点 id                                                                  | String  | -      |
| style    | 根结点样式                                                                 | String  | -      |
| color    | 组件颜色，可选值为 `primary`、 `secondary`、`success`、`warning`、`danger` | String  | -      |
| size     | 组件大小，可选值为 `small`、`large`                                        | String  | -      |
| label    | 描述文案                                                                   | String  | -      |
| vertical | 是否为垂直布局                                                             | Boolean | false  |

### 外部样式类

| 类名            | 说明         |
| --------------- | ------------ |
| k-class         | 根节点样式类 |
| k-spinner-class | 指示符样式类 |
| k-label-class   | 文本样式类   |

### CSS 变量

Spinner 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                                | 默认值           |
| ----------------------------------- | ---------------- |
| --k-loading-size                    | 26px             |
| --k-loading-label-line-height       | @line-height-s   |
| --k-loading-label-font-size         | @font-size-s     |
| --k-loading-color                   | @default-color   |
| --k-loading-primary-color           | @primary-color   |
| --k-loading-secondary-color         | @secondary-color |
| --k-loading-success-color           | @success-color   |
| --k-loading-warning-color           | @warning-color   |
| --k-loading-danger-color            | @danger-color    |
| --k-loading-small-size              | 20px             |
| --k-loading-small-label-line-height | @line-height-xs  |
| --k-loading-small-label-font-size   | @font-size-xs    |
| --k-loading-large-size              | 32px             |
| --k-loading-large-label-line-height | @line-height-m   |
| --k-loading-large-label-font-size   | @font-size-m     |
| --k-loading-animation-duration      | 0.8s             |
