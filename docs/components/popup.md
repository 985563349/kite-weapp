# Popup 弹出层

屏幕边缘滑出或弹出的浮层面板。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-popup": "kite-weapp/popup/popup"
}
```

## 代码示例

## API

### 属性

| 参数             | 说明                                                            | 类型            | 默认值                       |
| ---------------- | --------------------------------------------------------------- | --------------- | ---------------------------- |
| k-id             | 根节点 id                                                       | String          | -                            |
| style            | 根结点样式                                                      | String          | -                            |
| open             | 是否显示弹出层                                                  | Boolean         | false                        |
| placement        | 弹出的方向，可选值为 `top`、`right`、`bottom`、`left`、`center` | String          | center                       |
| overlay          | 是否显示遮罩                                                    | Boolean         | true                         |
| overlay-closable | 点击遮罩是否关闭弹出层                                          | Boolean         | true                         |
| duration         | 动画时长，单位为毫秒                                            | Object / Number | \{ enter: 300, leave: 300 \} |
| shape            | 弹出层形状，可选值为 `round`                                    | String          | -                            |
| z-index          | z-index 层级                                                    | Number          | 11000                        |

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

Popup 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                     | 默认值                 |
| ------------------------ | ---------------------- |
| --popup-border-radius    | @radius-l              |
| --popup-background-color | rgba(255, 255, 255, 1) |
