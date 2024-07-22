import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Cisco",
  description: "Une documentation des commandes des appareils réseau de la marque Cisco",
  base: '/documentation_cisco/',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Documentation', link: '/introduction' }
    ],

    sidebar: [ // ici : côté gauche, sidebar
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Exemples Markdown', link: '/introduction/markdown-examples' },
          { text: 'Exemples API', link: '/introduction/api-examples' }
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TTheGlock/documentation_cisco/' }
    ]
  },
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon',  href: 'public/favicon.ico' }
    ]
  ]

})
