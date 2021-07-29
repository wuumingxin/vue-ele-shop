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
  }
]

const router = new VueRouter({
  routes
})

export default router
