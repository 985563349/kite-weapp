# Transition 过渡

用于为内容创建过渡动画。

## 引入

全局引入，在 `miniprogram` 根目录下的 `app.json` 中配置。局部引入，在需要引入的页面或组件的 `index.json` 中配置。

```json
"usingComponents": {
  "k-transition": "kite-weapp/transition/transition"
}
```

## 代码示例

### 基础用法

将元素包裹在 transition 组件内，通过 `visible` 属性控制元素显示/隐藏时，会自动添加相应的过渡样式类。

::: code-group

```wxml [WXML]
<k-transition visible="{{ visible }}" name="fade">
  <text>Content</text>
</k-transition>
```

```wxss [WXSS]
.k-fade-enter-active,
.k-fade-leave-active {
  transition-property: opacity;
}

.k-fade-enter,
.k-fade-leave-to {
  opacity: 0;
}
```

:::

### 动画名称

通过 `name` 属性设置动画名称，transition 组件内部会根据动画名称生成相应的过渡样式类。

```wxml
<k-transition name="rotate" />
```

### 动画时长

通过 `duration` 属性设置动画时长，`enter` 与 `leave` 属性分别用于控制进场与离场动画时长。

```wxml
<k-transition duration="{{ enter: 300, leave: 500 }}" />
```

## API

### 属性

| 参数     | 说明                 | 类型            | 默认值                       |
| -------- | -------------------- | --------------- | ---------------------------- |
| k-id     | 根节点 id            | String          | -                            |
| style    | 根结点样式           | String          | -                            |
| visible  | 是否显示内容         | Boolean         | false                        |
| name     | 动画名称             | String          | transition                   |
| duration | 动画时长，单位为毫秒 | Object / Number | \{ enter: 300, leave: 300 \} |

### 外部样式类

| 类名    | 说明         |
| ------- | ------------ |
| k-class | 根节点样式类 |
