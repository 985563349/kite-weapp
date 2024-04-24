import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'iKun WeApp',
  description: '微信小程序组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/quick-start' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: {
      '/guide': [
        {
          text: '开发指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '样式覆盖', link: '/guide/custom-style' },
            { text: '定制主题', link: '/guide/theme' },
          ],
        },
      ],
      '/components': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Flex 弹性布局', link: '/components/flex' },
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'Space 间距', link: '/components/space' },
          ],
        },
        {
          text: '数据展示',
          items: [
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Cell 单元格', link: '/components/cell' },
          ],
        },
        {
          text: '反馈组件',
          items: [
            { text: 'ActionSheet 动作面板', link: '/components/action-sheet' },
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Overlay 遮罩', link: '/components/overlay' },
            { text: 'Popup 弹出层', link: '/components/popup' },
            { text: 'Toast 轻提示', link: '/components/toast' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
