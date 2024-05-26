# Grid 栅格

24 栅格系统。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-row": "kite-weapp/row/row",
  "k-col": "kite-weapp/col/col"
}
```

## 代码示例

### 基础用法

使用单一的一组 row 和 col 栅格组件，就可以创建一个基本的栅格系统。所有 col（列）必须放在 row（行）内。

```wxml
<k-row>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
</k-row>
```

### 区块间隔

通过 `gutter` 属性设置 col 之间的间隔，默认单位为 `px`。如果需要垂直间隔，可以写成数组形式 `[水平间隔、垂直间隔]`。

```wxml
<k-row gutter="16">
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
</k-row>
```

### 左右偏移

通过 `offset` 属性设置 col 的偏移，例如，`offset="8"` 表示将 col 右偏移 8 个宽度。

```wxml
<k-row>
  <k-col span="8">col-8</k-col>
  <k-col span="8" offset="8">col-8</k-col>
</k-row>
```

### 栅格排序

通过 `pull` 和 `push` 属性可以改变 col 的顺序

```wxml
<k-row>
  <k-col span="16" push="8">col-16 push-8</k-col>
  <k-col span="8" pull="16">col-8 pull-16</k-col>
</k-row>
```

### 排版

通过 `justify` 属性设置 col 水平方向的排版方式。

```wxml
<k-row justify="center">
  <k-col span="4">span:4</k-col>
  <k-col span="4">span:4</k-col>
</k-row>

<k-row justify="space-between">
  <k-col span="4">span:4</k-col>
  <k-col span="4">span:4</k-col>
</k-row>
```

### 对齐方式

通过 `align` 属性设置 col 垂直方向的对齐方式。

```wxml
<k-row align="middle">
  <k-col span="4" style="height: 100px">span:4</k-col>
  <k-col span="4" style="height: 50px">span:4</k-col>
</k-row>
```

### 排序

通过 `order` 属性设置 col 的排序。

```wxml
<k-row>
  <k-col span="6" order="4">1 col-6 order-4</k-col>
  <k-col span="6" order="3">2 col-6 order-3</k-col>
  <k-col span="6" order="2">3 col-6 order-2</k-col>
  <k-col span="6" order="1">4 col-6 order-1</k-col>
</k-row>
```

### Flex 填充

通过 `flex` 属性设置 col 的填充。

```wxml
<k-row>
  <k-col flex="2">2 / 5</k-col>
  <k-col flex="3">3 / 5</k-col>
</k-row>

<k-row>
  <k-col flex="100px">100px</k-col>
  <k-col flex="auto">Fill Rest</k-col>
</k-row>
```

### 自动换行

通过 `wrap` 属性设置 col 自动换行。

```wxml
<k-row wrap>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
  <k-col span="8">col-8</k-col>
</k-row>
```

### 响应式

栅格组件预设了五个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl`。

```wxml
<k-row>
  <k-col xs="2" sm="4" md="6" lg="8" xl="10">col</k-col>
  <k-col xs="20" sm="16" md="12" lg="8" xl="4">col</k-col>
  <k-col xs="2" sm="4" md="6" lg="8" xl="10">col</k-col>
</k-row>
```

`span`、`offset`、`push`、`pull`、`order` 属性可以通过内嵌到 `xs`、`sm`、`md`、`lg`、`xl` 中来使用。

```wxml
<k-row>
  <k-col xs="{{ { span: 5, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">col</k-col>
  <k-col xs="{{ { span: 11, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">col</k-col>
  <k-col xs="{{ { span: 5, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">col</k-col>
</k-row>
```

## API

### Row 属性

| 参数    | 说明                                                                                         | 类型           | 默认值 |
| ------- | -------------------------------------------------------------------------------------------- | -------------- | ------ |
| k-id    | 根节点 id                                                                                    | String         | -      |
| style   | 根结点样式                                                                                   | String         | -      |
| gutter  | 区块间隔，默认单位为 `px`                                                                    | Number / Array | -      |
| justify | 排版方式，可选值为 `start`、`center`、`end`、`space-between`、`space-around`、`space-evenly` | String         | start  |
| align   | 垂直对齐方式，可选值为 `start`、`center`、`end`、`stretch`                                   | String         | top    |
| wrap    | 元素是否自动换行                                                                             | Boolean        | true   |

### Row 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### Col 属性

| 参数   | 说明                                                            | 类型            | 默认值 |
| ------ | --------------------------------------------------------------- | --------------- | ------ |
| k-id   | 根节点 id                                                       | String          | -      |
| style  | 根结点样式                                                      | String          | -      |
| span   | 栅格占位格数，为 0 时相当于 `display: none`                     | Number          | -      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格                          | Number          | -      |
| pull   | 栅格左移动格数                                                  | Number          | -      |
| push   | 栅格右移动格数                                                  | Number          | -      |
| flex   | flex 布局属性                                                   | Number          | -      |
| order  | 栅格顺序                                                        | Number          | -      |
| xs     | `屏幕 < 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象   | Number / Object | -      |
| sm     | `屏幕 >= 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | Number / Object | -      |
| md     | `屏幕 >= 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | Number / Object | -      |
| lg     | `屏幕 >= 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -      |
| xl     | `屏幕 >= 1920px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | Number / Object | -      |

### Col 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |