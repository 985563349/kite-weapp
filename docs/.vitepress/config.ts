import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Kite Weapp',
  description: '微信小程序组件库',
  lastUpdated: true,
  metaChunk: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/kite-weapp-logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
  ],

  themeConfig: {
    logo: { src: '/kite-weapp-logo.svg', width: 24, height: 24 },

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
            { text: 'Grid 栅格', link: '/components/grid' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Space 间距', link: '/components/space' },
            { text: 'Flex 弹性布局', link: '/components/flex' },
            { text: 'Loading 加载', link: '/components/loading' },
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
        {
          text: '动画组件',
          items: [{ text: 'Transition 过渡', link: '/components/transition' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/985563349/kite-weapp/tree/main/docs' }],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: 'https://github.com/985563349/kite-weapp/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  markdown: {
    languageAlias: {
      wxml: 'html',
      wxss: 'css',
    },
  },
});
