import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Book of DHW',
  description: 'DHW 官方通过 GitBook 公开本组资讯与规定的网站。',
  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '', // 弄个黑底logo
    repo: 'https://github.com/DHW-PCS/Book-of-DHW',
    sidebarDepth: '0',
    editLink: false,
    sidebar: [
      {

        text: 'DHW 规定',
        //link: '/dhw-regulations/',
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
        //link: '/inf-docs/',
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
