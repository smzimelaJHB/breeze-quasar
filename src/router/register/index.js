import Register from 'pages/auth/Register.vue'

const register = {
  path: '/register',
  name: 'register',
  component: Register,
  meta: {
      title: 'Register',
      guard: 'guest',
  },
};

export default register;
