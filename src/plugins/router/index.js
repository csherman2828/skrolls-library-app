import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = { template: '<div>Hello World</div>' };

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
