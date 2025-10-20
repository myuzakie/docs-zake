// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: { searchDepth: 1 }
      }
    },
    // PREVIEW HARUS AKTIF
    preview: {
        api: 'https://api.nuxt.studio',
        gitInfo: {
        name: 'docs-zake',                   // <--- repo name only
        owner: 'myuzakie',                   // <--- owner/org
        url: 'https://github.com/myuzakie/docs-zake' // <--- no .git
        }
    }   
  },

  compatibilityDate: '2024-07-11',

  // jangan prerender seluruh site — biarkan SSR/server functions tersedia
  nitro: {
    // kosongkan prerender (atau hapus property ini sama sekali)
    prerender: {
      routes: [],
      crawlLinks: false,
      autoSubfolderIndex: false
    }
  },

  // Pastikan routeRules di top-level — agar hosting menjalankan SSR
  routeRules: {
    '/**': { ssr: true }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: { provider: 'iconify' },

  llms: {
    domain: 'https://docs-template.nuxt.dev/',
    title: 'Nuxt Docs Template',
    description: 'A template for building documentation with Nuxt UI and Nuxt Content.',
    full: {
      title: 'Nuxt Docs Template - Full Documentation',
      description: 'This is the full documentation for the Nuxt Docs Template.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [{ field: 'path', operator: 'LIKE', value: '/getting-started%' }]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [{ field: 'path', operator: 'LIKE', value: '/essentials%' }]
      }
    ]
  }
})
