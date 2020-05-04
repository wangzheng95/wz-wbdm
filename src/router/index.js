import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home'
import cate from '../views/cate'
import daypub from '../views/daypub'
import end from '../views/end'
import mine from '../views/mine'
import rank from '../views/rank'
import search from '../views/search'
import fine from '../views/more/fine'
import hot from '../views/more/hot'
import popular from '../views/more/popular'
import week from '../views/more/week'
import xiaobian from '../views/more/xiaobian'
import newA from '../views/more/newA'

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
      path: '/fine',
      component: fine
    },
    {
      path: '/hot',
      component: hot
    },
    {
      path: '/popular',
      component: popular
    },
    {
      path: '/week',
      component: week
    },
    {
      path: '/newA',
      component: newA
    },
    {
      path: '/xiaobian',
      component: xiaobian
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router
