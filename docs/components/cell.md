# Cell 单元格

用于各个类别行的信息展示

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-cell-group": "kite-weapp/cell-group/cell-group",
  "k-cell": "kite-weapp/cell/cell"
}
```

## 代码示例

### 基础用法

通过 `title` 属性设置标题，`label` 属性设置描述文本`value` 属性设置内容信息。

```wxml
<k-cell title="Title" label="Description" value="Content" />
```

### 内容居中

通过 `center` 属性设置内容信息垂直居中。

```wxml
<k-cell title="Title" label="Description" value="Content" center />
```

### 尺寸

通过 `size` 属性设置尺寸，支持 `default`、`large` 两种尺寸。

```wxml
<k-cell title="Title" label="Description" />
<k-cell title="Title" label="Description" size="large" />
```

### 图标

通过 `icon` 属性设置标题左侧图标。

```wxml
<k-cell title="Title" icon="add" />
```

通过 `arrow` 属性设置内容信息右侧显示箭头图标。

```wxml
<k-cell title="Title" arrow />
```

### 点击反馈

通过 `clickable` 属性设置是否显示点击反馈。

```wxml
<k-cell title="Title" arrow clickable />
```

### 导航

通过 `url` 属性设置跳转链接，`open-type` 属性设置跳转方式，

```wxml
<k-cell title="Home" url="/pages/index/index" open-type="switchTab" arrow clickable />
```

### 分组

使用 cell-croup 组件可以给 cell 组件分组。

```wxml
<k-cell-group>
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

通过 `title` 属性设置分组标题。

```wxml
<k-cell-group title="Group Title">
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

### 变体

通过 `variant` 属性设置变体，支持 `default`、`card` 两种变体，将呈现标准变体与卡片变体。

```wxml
<k-cell-group>
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>

<k-cell-group variant="card">
  <k-cell title="Title" />
  <k-cell title="Title" />
</k-cell-group>
```

### 高级用法

如果以上用法不能满足你的需求，可以使用对应的插槽来自定义显示的内容。

```wxml
<k-cell>
  <k-icon slot="icon" name="add" />
  <text slot="title">Title</text>
</k-cell>

<k-cell title="Title">
  <view slot="value">
    <text>Content</text>
  </view>
  <k-icon slot="right-icon" name="add" />
</k-cell>
```

## API

### Cell 属性

| 参数      | 说明                                                                                      | 类型          | 默认值     |
| --------- | ----------------------------------------------------------------------------------------- | ------------- | ---------- |
| k-id      | 根节点 id                                                                                 | String        | -          |
| style     | 根结点样式                                                                                | String        | -          |
| title     | 左侧标题                                                                                  | String / Slot | -          |
| label     | 标题下描述文本                                                                            | String / Slot | -          |
| value     | 右侧内容信息                                                                              | String / Slot | -          |
| size      | 单元格大小，可选值为 `large`                                                              | String        | -          |
| center    | 是否使内容信息垂直居中                                                                    | Boolean       | false      |
| border    | 是否显示底部边框                                                                          | Boolean       | false      |
| icon      | 左侧图标名称或图片链接，可选值见 Icon 组件                                                | String / Slot | -          |
| arrow     | 是否显示右侧箭头图标                                                                      | Boolean       | false      |
| clickable | 是否开启点击反馈                                                                          | Boolean       | false      |
| url       | 跳转链接                                                                                  | String        | -          |
| open-type | 链接跳转类型，可选值为 `navigateTo`、`redirectTo`、`switchTo`、`reLaunch`、`navigateBack` | String        | navigateTo |

### Cell 事件

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| click  | 点击单元格时触发 | -    |

### Cell Slots

| 名称       | 说明           |
| ---------- | -------------- |
| title      | 左侧标题       |
| label      | 描述文本       |
| value      | 右侧内容       |
| icon       | 左侧图标       |
| right-icon | 右侧图标       |
| extra      | 最右侧额外内容 |

### Cell 外部样式类

| 类名          | 说明           |
| ------------- | -------------- |
| k-class       | 根节点样式类   |
| hover-class   | 点击态样式类   |
| k-title-class | 标题样式类     |
| k-label-class | 描述文本样式类 |
| k-value-class | 内容信息样式类 |

### Cell CSS 变量

| 名称                             | 默认值                     |
| -------------------------------- | -------------------------- |
| --k-cell-padding-block           | 12px                       |
| --k-cell-padding-inline          | 16px                       |
| --k-cell-line-height             | 24px                       |
| --k-cell-font-size               | @font-size-s               |
| --k-cell-color                   | @text-color                |
| --k-cell-bg-color                | @component-bg-color        |
| --k-cell-bg-color-active         | @component-bg-color-active |
| --k-cell-label-line-height       | @line-height-xs            |
| --k-cell-label-font-size         | @font-size-xs              |
| --k-cell-label-color             | @text-color-placeholder    |
| --k-cell-value-color             | @text-color-placeholder    |
| --k-cell-icon-size               | 16px                       |
| --k-cell-right-icon-color        | @text-color-placeholder    |
| --k-cell-large-padding-block     | 16px                       |
| --k-cell-large-font-size         | @font-size-m               |
| --k-cell-large-label-line-height | @line-height-s             |
| --k-cell-large-label-font-size   | @font-size-s               |

### Cell Group 属性

| 参数    | 说明                            | 类型          | 默认值 |
| ------- | ------------------------------- | ------------- | ------ |
| k-id    | 根节点 id                       | String        | -      |
| style   | 根结点样式                      | String        | -      |
| title   | 单元格分组标题                  | String / Slot | -      |
| variant | 单元格分组变体，可选值为 `card` | String        | -      |

### Cell Group 外部样式类

| 类名          | 说明         |
| ------------- | ------------ |
| k-class       | 根节点样式类 |
| k-title-class | 标题样式类   |

### Cell Group CSS 变量

| 名称                                | 默认值                  |
| ----------------------------------- | ----------------------- |
| --k-cell-group-card-margin-inline   | 16px                    |
| --k-cell-group-card-border-radius   | @radius-m               |
| --k-cell-group-title-padding-block  | 16px                    |
| --k-cell-group-title-padding-inline | 16px                    |
| --k-cell-group-title-line-height    | @line-height-s          |
| --k-cell-group-title-font-size      | @font-size-s            |
| --k-cell-group-title-color          | @text-color-placeholder |
