import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Facts from '@/views/Facts';
import FactX from '@/views/FactX';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/facts',
      name: 'Facts',
      component: Facts
    },
    {
      path: '/facts/:id',
      name: 'FactX',
      component: FactX
    }
  ]
})
