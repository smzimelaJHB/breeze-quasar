import Dashboard from 'pages/Dashboard.vue'

const dashboard = {
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard,
  meta: {
      title: 'Dashboard',
      guard: 'auth',
  },
};

export default dashboard;
