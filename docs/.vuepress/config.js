import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Book of DHW',
  description: 'DHW 官方用于公开本组资讯与规定的网站。',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/logo.png', // 弄个黑底logo
    repo: 'https://github.com/DHW-PCS/Book-of-DHW-vuepress/',
    sidebarDepth: '0',
    editLink: false,
    colorMode: 'light',
    locales: {
      '/': {
        lang: 'en-US',
        title: '',
        description: '',
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'Book-of-DHW',
        description: 'DHW 官方用于公开本组资讯与规定的网站。',
      },
    }, 
    contributors: false,
    lastUpdated: false,
    plugins: [
      docsearchPlugin({
        apiKey: 'd9c5176210e119499f3f205b633a19c2',
        appId: '77GC4FUYYC',
        indexName: 'bookvercel',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
            translations: {
              button: {
                buttonText: 'Search Documentation',
              },
            },
          },
          '/zh/': {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
              },
            },
          },
        },
      }),
    ],
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
          '/inf-docs/updates-to-inf.md',
          '/inf-docs/inf-updating.md',
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
