# Toast 轻提示

用于轻量级反馈或提示。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-toast": "kite-weapp/toast/toast"
}
```

## 示例代码

## API

### 属性

| 参数             | 说明                                                                              | 类型            | 默认值                       |
| ---------------- | --------------------------------------------------------------------------------- | --------------- | ---------------------------- |
| k-id             | 根节点 id                                                                         | String          | -                            |
| style            | 根结点样式                                                                        | String          | -                            |
| type             | 提示类型，可选值为 `success`、`warning`、`danger`、`loading`                      | String          | -                            |
| message          | 显示文字                                                                          | String / Slot   | -                            |
| icon             | 图标名称或图片链接，可选值见 Icon 组件。type 为 success、warning 和 danger 时有效 | String          | -                            |
| placement        | 弹出的方向，可选值为 `top`、`bottom`、`center`                                    | String          | center                       |
| stay             | 停留时长，值为 0 时，toast 不会消失，单位为毫秒。                                 | Number          | 3000                         |
| overlay          | 是否显示遮罩                                                                      | Boolean         | true                         |
| overlay-closable | 点击遮罩是否关闭提示                                                              | Boolean         | true                         |
| duration         | 动画时长，单位为毫秒                                                              | Object / Number | \{ enter: 300, leave: 300 \} |
| selector         | 自定义选择器                                                                      | String          | k-toast                      |
| context          | 选择器的选择范围，可以传入自定义组件的 this 作为上下文                            | Object          | 当前页面                     |
| z-index          | z-index 层级                                                                      | Number          | 11000                        |

### 方法

| 方法名        | 说明         | 参数           | 返回值 |
| ------------- | ------------ | -------------- | ------ |
| Toast         | 展示提示     | Props / String | -      |
| Toast.success | 展示成功提示 | Props / String | -      |
| Toast.warning | 展示警告提示 | Props / String | -      |
| Toast.error   | 展示错误提示 | Props / String | -      |
| Toast.loading | 展示加载提示 | Props / String | -      |

### 事件

| 事件名        | 说明           | 参数 |
| ------------- | -------------- | ---- |
| close         | 关闭时触发     | -    |
| click-overlay | 点击遮罩时触发 | -    |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |
