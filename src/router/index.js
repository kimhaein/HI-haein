import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/Main';
import HelloWorld from '@/views/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
