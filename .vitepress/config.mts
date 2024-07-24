import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'fr-FR',
  title: "Documentation Cisco",
  description: "Une documentation des commandes des appareils réseau de la marque Cisco",
  base: '/documentation_cisco/',
  cleanUrls: true,
  themeConfig: {
    docFooter: {
      prev: 'Page précédente',
      next: 'Page suivante'
    },

    lastUpdated: {
      text: 'Page mise à jour pour la dernière fois le ',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    logo: '/doro.png',
    // https://vitepress.dev/reference/default-theme-config

    nav: [ // navbar (en haut)
      { text: 'Accueil', link: '/' },
      { text: 'Documentation', 
        items: [
          { text: 'Avant de Commencer', link: '/avant_de_commencer' },
          { text: 'À Remplir', link: '/a_remplir' },
        ]
      }
    ],

    sidebar: [ // sidebar (côté gauche)
      {
        text: 'Avant de Commencer',
        items: [
          { text: 'Introduction', link: '/avant_de_commencer' }, // ou /avant_de_commencer/introduction.md ?
          { text: 'Exemples Markdown', link: '/avant_de_commencer/markdown-examples' },
          { text: 'Exemples API', link: '/avant_de_commencer/api-examples' }
        ]
      },
      {
        text: 'À Remplir',
        items: [
          { text: 'À Remplir', link: '/a_remplir' },
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

  head: [['link', { rel: 'icon', type: "image/x-icon", href: '/documentation_cisco/favicon.ico' }]],

  lastUpdated: true,

  markdown: {
    container: {
      tipLabel: 'ASTUCE(S)',
      warningLabel: 'ATTENTION RECOMMANDÉE',
      dangerLabel: 'ATTENTION REQUISE',
      infoLabel: 'INFORMATION(S)',
      detailsLabel: 'DÉTAIL(S)'

    }
  }
})
