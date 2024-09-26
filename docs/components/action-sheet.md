# ActionSheet 动作面板

向上弹出的选择列表。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-action-sheet": "kite-weapp/action-sheet/action-sheet"
}
```

## 代码示例

## API

### 属性

| 参数             | 说明                   | 类型            | 默认值                       |
| ---------------- | ---------------------- | --------------- | ---------------------------- |
| k-id             | 根节点 id              | String          | -                            |
| style            | 根结点样式             | String          | -                            |
| visible          | 是否显示动作面板       | Boolean         | false                        |
| options          | 选项配置               | Array           | -                            |
| title            | 标题                   | String / Slot   | -                            |
| cancel-text      | 取消按钮文本           | String / Slot   | -                            |
| overlay          | 是否显示遮罩           | Boolean         | true                         |
| overlay-closable | 点击遮罩是否关闭弹出层 | Boolean         | true                         |
| duration         | 动画时长，单位为毫秒   | Object / Number | \{ enter: 300, leave: 300 \} |
| lock-scroll      | 防止滚动穿透           | Boolean         | true                         |
| z-index          | z-index 层级           | Number          | 11000                        |

#### Option 属性

| 参数     | 说明         | 类型    |
| -------- | ------------ | ------- |
| label    | 文本         | String  |
| value    | 选值         | String  |
| color    | 颜色         | String  |
| disabled | 是否禁用     | Boolean |
| class    | 额外的样式类 | String  |

### 事件

| 事件名        | 说明                                   | 参数                         |
| ------------- | -------------------------------------- | ---------------------------- |
| select        | 选中选项时触发，选项禁用状态下不会触发 | event.detail: 选项对应的对象 |
| cancel        | 点击取消按钮时触发                     | -                            |
| click-overlay | 点击遮罩时触发                         | -                            |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

ActionSheet 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                                   | 默认值                     |
| -------------------------------------- | -------------------------- |
| --k-action-sheet-spacer                | 8px                        |
| --k-action-sheet-border-radius         | @radius-l                  |
| --k-action-sheet-header-padding-block  | 12px                       |
| --k-action-sheet-header-padding-inline | 12px                       |
| --k-action-sheet-title-line-height     | @line-height-s             |
| --k-action-sheet-title-font-size       | @font-size-s               |
| --k-action-sheet-title-color           | @text-color-placeholder    |
| --k-action-sheet-item-padding-inline   | 20px                       |
| --k-action-sheet-item-height           | 50px                       |
| --k-action-sheet-item-font-size        | @font-size-l               |
| --k-action-sheet-item-color            | @text-color                |
| --k-action-sheet-item-bg-color         | @component-bg-color        |
| --k-action-sheet-item-bg-color-active  | @component-bg-color-active |
| --k-action-sheet-item-disabled-opacity | 0.5                        |
| --k-action-sheet-item-icon-size        | 1em                        |
