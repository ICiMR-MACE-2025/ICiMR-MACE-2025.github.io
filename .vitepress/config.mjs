import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ICiMR x MARS 2025",
  description: "",
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
          { text: 'About MARS', link: '/about-mars' }, 
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
          { text: 'MARS', link: '/schedule-mars' },
        ]
      },
      {
        text: 'Speakers',
        items: [
          { 
            text: 'ICiMR', 
            items: [
              { text: 'AP Dr Ki-Young Song', link: '/speaker-icimr-keynote' },
              { text: 'Associate Professor Dr Devi Fitrianah', link: '/speaker-1-icimr' },
              { text: 'Dr Yang Fang', link: '/speaker-2-icimr' },
              { text: 'Dr Mohd Azraai Mohd Razman', link: '/speaker-3-icimr' },
            ]
          },
          { 
            text: 'MARS', 
            items: [
              { text: 'Alkusaie Bin Abd Rahim', link: '/speaker-mars-keynote-1' },
              { text: 'Zulfiqar Zainuddin', link: '/speaker-mars-keynote-2' },
            ]
          },
        ]
      },
      {
        text: 'Technical Sessions',
        items: [
          { 
            text: 'ICiMR', 
            items: [
              { text: 'Session 1', link: '/icimr-session-1' },
              { text: 'Session 2', link: '/icimr-session-2' },
            ]
          },
          { 
            text: 'MARS', 
            items: [
              { text: 'Session 1', link: '/mars-session-1' },
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
