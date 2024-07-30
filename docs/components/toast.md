# Toast 轻提示

用于轻量级反馈或提示。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-toast": "kite-weapp/toast/toast"
}
```

## 代码示例

## API

### 属性

| 参数             | 说明                                                                              | 类型            | 默认值                       |
| ---------------- | --------------------------------------------------------------------------------- | --------------- | ---------------------------- |
| k-id             | 根节点 id                                                                         | String          | -                            |
| style            | 根结点样式                                                                        | String          | -                            |
| type             | 提示类型，可选值为 `success`、`warning`、`danger`、`loading`                      | String          | -                            |
| content          | 内容                                                                              | String / Slot   | -                            |
| icon             | 图标名称或图片链接，可选值见 Icon 组件。type 为 success、warning 和 danger 时有效 | String          | -                            |
| position         | 弹出的位置，可选值为 `top`、`bottom`                                              | String          | -                            |
| stay             | 停留时长，值为 0 时，toast 不会消失，单位为毫秒。                                 | Number          | 2000                         |
| overlay          | 是否显示遮罩                                                                      | Boolean         | true                         |
| overlay-closable | 点击遮罩是否关闭弹出层                                                            | Boolean         | true                         |
| duration         | 动画时长，单位为毫秒                                                              | Object / Number | \{ enter: 300, leave: 300 \} |
| lock-scroll      | 防止滚动穿透                                                                      | Boolean         | true                         |
| z-index          | z-index 层级                                                                      | Number          | 11000                        |

### 方法

包括：

- Toast
- Toast.success
- Toast.warning
- Toast.error
- Toast.loading

以上均为一个函数，参数为对象，具体属性如下：

| 参数        | 说明                                                                              | 类型            | 默认值                       |
| ----------- | --------------------------------------------------------------------------------- | --------------- | ---------------------------- |
| visible     | 是否显示轻提示                                                                    | Boolean         | true                         |
| type        | 提示类型，可选值为 `success`、`warning`、`danger`、`loading`                      | String          | -                            |
| content     | 内容                                                                              | String          | -                            |
| icon        | 图标名称或图片链接，可选值见 Icon 组件。type 为 success、warning 和 danger 时有效 | String          | -                            |
| position    | 弹出的位置，可选值为 `top`、`bottom`                                              | String          | -                            |
| stay        | 停留时长，值为 0 时，toast 不会消失，单位为毫秒。                                 | Number          | 2000                         |
| overlay     | 是否显示遮罩                                                                      | Boolean         | true                         |
| duration    | 动画时长，单位为毫秒                                                              | Object / Number | \{ enter: 300, leave: 300 \} |
| lock-scroll | 防止滚动穿透                                                                      | Boolean         | true                         |
| selector    | 自定义选择器                                                                      | String          | k-toast                      |
| context     | 选择器的选择范围，可以传入自定义组件的 this 作为上下文                            | Object          | 当前页面                     |
| z-index     | z-index 层级                                                                      | Number          | 11000                        |

### 事件

| 事件名        | 说明           | 参数 |
| ------------- | -------------- | ---- |
| close         | 关闭时触发     | -    |
| click-overlay | 点击遮罩时触发 | -    |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

Toast 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                             | 默认值              |
| -------------------------------- | ------------------- |
| --k-toast-position-top-offset    | 20%                 |
| --k-toast-position-bottom-offset | 20%                 |
| --k-toast-border-radius          | @radius-m           |
| --k-toast-padding                | 20px                |
| --k-toast-width                  | 120px               |
| --k-toast-min-height             | 120px               |
| --k-toast-line-heigh             | @lien-height-s      |
| --k-toast-font-size              | @font-size-s        |
| --k-toast-color                  | @white-color        |
| --k-toast-bg-color               | @spotlight-bg-color |
| --k-toast-text-max-width         | 70%                 |
| --k-toast-padding-block          | 12px                |
| --k-toast-padding-inline         | 20px                |
| --k-toast-loading-size           | 30px                |
| --k-toast-icon-size              | 36px                |
