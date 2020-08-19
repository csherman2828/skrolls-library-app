import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import features from '@/structure/features';

import SkrollsDashboard from '@/features/skrolls_dashboard';
import SkrollsCatalog from '@/features/skrolls_catalog';

const routes = [
  {
    path: features.dashboard.route.path,
    name: features.dashboard.route.name,
    component: SkrollsDashboard,
  },
  {
    path: features.catalog.route.path,
    name: features.catalog.route.name,
    component: SkrollsCatalog,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
