import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICiMR 2025",
  description: "Live resources for ICiMR 2025",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        items: [
          { text: 'About ICiMR', link: '/about-icimr' }, 
          { text: 'About MACE', link: '/about-mace' }, 
        ]
      },
      {
        text: 'Organisers',
        items: [
          { text: 'About Sunway University', link: '/about-sunway-university' },
          { text: 'About XJTLU', link: '/about-xjtlu' },
          { text: 'About UTM', link: '/about-utm' }
        ]
      },
      { 
        text: 'Schedule',
        items: [
          { text: 'ICiMR', link: '/schedule-icimr' },
          { text: 'MACE', link: '/schedule-mace' },
        ]
      },
      {
        text: 'Speakers',
        items: [
          { text: 'AP Dr Ki-Young Song', link: '/speaker-1' },
          { text: 'Speaker 2', link: '/api-examples' }
        ]
      },
      {
        text: 'Technical Sessions',
        items: [
          { 
            text: 'ICiMR', 
            items: [
              { text: 'Session 1', link: '/icimr-session-1' },
            ]
          },
          { 
            text: 'MACE', 
            items: [
              { text: 'Session 1', link: '/mace-session-1' },
            ]
          },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
