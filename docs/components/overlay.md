# Overlay 遮罩

遮罩用于强调区块内部分内容。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-overlay": "kite-weapp/overlay/overlay"
}
```

## 代码示例

## API

### 属性

| 参数        | 说明                 | 类型            | 默认值                       |
| ----------- | -------------------- | --------------- | ---------------------------- |
| k-id        | 根节点 id            | String          | -                            |
| style       | 根结点样式           | String          | -                            |
| open        | 是否显示遮罩         | Boolean         | false                        |
| duration    | 动画时长，单位为毫秒 | Object / Number | \{ enter: 300, leave: 300 \} |
| lock-scroll | 防止滚动穿透         | Boolean         | true                         |
| z-index     | z-index 层级         | Number          | 11000                        |

### 事件

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 点击遮罩时触发 | -    |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |

### CSS 变量

Overlay 组件提供了以下 CSS 变量，可用于自定义样式。

| 名称                       | 默认值             |
| -------------------------- | ------------------ |
| --overlay-background-color | rgba(0, 0, 0, 0.6) |
