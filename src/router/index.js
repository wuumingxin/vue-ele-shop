import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/city/:cityid',
    name: 'City',
    component: () => import(/* webpackChunkName: "about" */ '../views/City.vue')
  },
  {
    path: '/msite',
    name: 'Msite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Msite.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import(/* webpackChunkName: "about" */ '../views/Food.vue')
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      console.log(savedPosition)
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

export default router
