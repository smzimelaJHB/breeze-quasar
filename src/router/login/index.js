import Login from 'pages/auth/Login.vue'

const login = {
  path: '/login',
  name: 'login',
  component: Login,
  query: {
      reset: 'reset',
  },
  meta: {
      title: 'Log in',
      guard: 'guest',
  },
};

export default login;
