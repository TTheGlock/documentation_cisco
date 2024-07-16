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

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Lire la Documentation', link: '/markdown-examples' },
          { text: 'Retourner au Hub', link: 'https://ttheglock.github.io' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TTheGlock/documentation_cisco/' }
    ]
  }
})
