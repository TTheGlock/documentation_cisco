import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation Cisco",
  description: "Une documentation des commandes des appareils réseau de la marque Cisco",
  base: '/documentation_cisco/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [ // ici : côté gauche, sidebar
      {
        text: 'Introduction',
        items: [
          { text: 'Introduction', link: '/markdown-examples' },
          { text: 'Examples', link: '/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TTheGlock/documentation_cisco/' }
    ]
  }
})
