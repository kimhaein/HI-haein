import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main';
import Admin from '@/views/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
});
