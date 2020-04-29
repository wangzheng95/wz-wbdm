import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home'
import cate from '../views/cate'
import daypub from '../views/daypub'
import end from '../views/end'
import mine from '../views/mine'
import rank from '../views/rank'
import search from '../views/search'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/cate',
      component: cate
    },
    {
      path: '/daypub',
      component: daypub
    },
    {
      path: '/end',
      component: end
    },
    {
      path: '/mine',
      component: mine
    },
    {
      path: '/rank',
      component: rank
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
