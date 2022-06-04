import Welcome from 'pages/Welcome.vue'

const welcome =
{
  path: '/welcome',
  name: 'welcome',
  component: Welcome,
  meta: {
      title: 'Welcome',
      metaTags: [
          {
              name: 'Welcome',
              content:
                  'An application / authentication starter kit frontend in Vue.js 3 for Laravel Breeze.',
          },
          {
              property: 'og:Welcome',
              content:
                  'An application / authentication starter kit frontend in Vue.js 3 for Laravel Breeze.',
          },
      ],
  },
}

export default welcome


