# Dialog 对话框

展示一个对话框，提供标题、内容区、操作区。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-dialog": "kite-weapp/dialog/dialog"
}
```

## 代码示例

## API

### 属性

| 参数                | 说明                   | 类型            | 默认值                       |
| ------------------- | ---------------------- | --------------- | ---------------------------- |
| k-id                | 根节点 id              | String          | -                            |
| style               | 根结点样式             | String          | -                            |
| visible             | 是否显示对话框         | Boolean         | false                        |
| width               | 对话框宽度             | Number / String | 500                          |
| title               | 对话框标题             | String / Slot   | -                            |
| content             | 对话框内容             | String / Slot   | -                            |
| show-confirm-button | 是否展示确认按钮       | Boolean         | true                         |
| show-cancel-button  | 是否展示取消按钮       | Boolean         | true                         |
| confirm-text        | 确认按钮文案           | String          | Confirm                      |
| cancel-text         | 取消按钮文案           | String          | Cancel                       |
| confirm-loading     | 确认按钮 loading       | Boolean         | false                        |
| cancel-loading      | 取消按钮 loading       | Boolean         | false                        |
| closable            | 是否显示关闭图标       | Boolean         | false                        |
| overlay             | 是否显示遮罩           | Boolean         | true                         |
| overlay-closable    | 点击遮罩是否关闭弹出层 | Boolean         | true                         |
| duration            | 动画时长，单位为毫秒   | Object / Number | \{ enter: 300, leave: 300 \} |
| lock-scroll         | 防止滚动穿透           | Boolean         | true                         |
| z-index             | z-index 层级           | Number          | 11000                        |

### 方法

包括：

- Dialog
- Dialog.confirm
- Dialog.alert

以上均为一个函数，参数为对象，具体属性如下：

| 参数              | 说明                                                                | 类型            | 默认值                       |
| ----------------- | ------------------------------------------------------------------- | --------------- | ---------------------------- |
| visible           | 是否显示对话框                                                      | Boolean         | true                         |
| width             | 对话框宽度                                                          | Number / String | 500                          |
| title             | 对话框标题                                                          | String / Slot   | -                            |
| content           | 对话框内容                                                          | String / Slot   | -                            |
| showConfirmButton | 是否展示确认按钮                                                    | Boolean         | true                         |
| showCancelButton  | 是否展示取消按钮                                                    | Boolean         | true                         |
| confirmText       | 确认按钮文案                                                        | String          | Confirm                      |
| cancelText        | 取消按钮文案                                                        | String          | Cancel                       |
| closable          | 是否显示关闭图标                                                    | Boolean         | false                        |
| overlay           | 是否显示遮罩                                                        | Boolean         | true                         |
| overlayClosable   | 点击遮罩是否关闭弹出层                                              | Boolean         | true                         |
| duration          | 动画时长，单位为毫秒                                                | Object / Number | \{ enter: 300, leave: 300 \} |
| lockScroll        | 防止滚动穿透                                                        | Boolean         | true                         |
| zIndex            | z-index 层级                                                        | Number          | 11000                        |
| onConfirm         | 点击确认回调，若返回 promise 时 resolve 为正常关闭，reject 为不关闭 | Function        | -                            |
| onCancel          | 点击取消回调，若返回 promise 时 resolve 为正常关闭，reject 为不关闭 | Function        | -                            |

### 事件

| 事件名        | 说明               | 参数 |
| ------------- | ------------------ | ---- |
| confirm       | 点击确认按钮时触发 |      |
| cancel        | 点击取消按钮时触发 | -    |
| click-overlay | 点击遮罩时触发     | -    |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

Dialog 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                             | 默认值                |
| -------------------------------- | --------------------- |
| --k-dialog-max-width             | 90%                   |
| --k-dialog-line-height           | @line-height-s        |
| --k-dialog-font-size             | @font-size-s          |
| --k-dialog-color                 | @text-color-secondary |
| --k-dialog-height-padding-top    | 26px                  |
| --k-dialog-height-padding-inline | 24px                  |
| --k-dialog-title-line-height     | @line-height-m        |
| --k-dialog-title-font-size       | @font-size-m          |
| --k-dialog-title-color           | @text-color           |
| --k-dialog-body-padding-top      | 8px                   |
| --k-dialog-body-padding          | 24px                  |
| --k-dialog-button-height         | 50px                  |
| --k-dialog-button-font-weight    | normal                |
| --k-dialog-confirm-button-color  | @primary-color        |
