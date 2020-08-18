import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import SkrollsDashboard from '@/features/skrolls_dashboard';

const routes = [
  {
    path: '/',
    name: 'skrolls_dashboard',
    component: SkrollsDashboard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
