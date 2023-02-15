import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default({
  lang: 'zh-CN',
  title: 'Book of DHW',
  description: 'DHW 官方用于公开本组资讯与规定的网站。',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  plugins: [
    docsearchPlugin({
      apiKey: 'd9c5176210e119499f3f205b633a19c2',
      appId: '77GC4FUYYC',
      indexName: 'bookvercel',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      }
    }),
    backToTopPlugin(),
  ],
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo.png', // 弄个黑底logo
    repo: 'https://github.com/DHW-PCS/Book-of-DHW/',
    sidebarDepth: '0',
    editLink: false,
    colorMode: 'light',
    contributors: false,
    lastUpdated: false,
    sidebar: [
          '/readme.md',
      {
        text: 'DHW 规定',
        children: [
          '/dhw-regulations/regulation-of-information.md',
          '/dhw-regulations/dhw.md',
          '/dhw-regulations/standards-used-by-dhw.md',
          '/dhw-regulations/diplomacy.md',
          '/dhw-regulations/usage-rules.md',
          '/dhw-regulations/group-chat-management.md',
        ],
      },
      {
        text: 'INF 文档',
        children: [
          '/inf-docs/inf-faqs.md',
          '/inf-docs/ai-setup.md',
          '/inf-docs/announced-blacklist-of-dhw.md',
          //'/inf-docs/updates-to-inf.md',
          //'/inf-docs/inf-updating.md',
          '/inf-docs/downloads.md',
          '/inf-docs/inf-1.16-quick-state.md',
          '/inf-docs/inf-1.18-quick-state.md',
        ],
      },
      {
        text: '关于本站',
        children: [
          '/about/contact-us.md',
          '/about/evolution.md',
        ],
      },
      {
        text: 'IA-SETUP',
        children: [
          '/ia-setup/this-is-just-a-joke.md',
        ],
      },
    ],
  }),
})
