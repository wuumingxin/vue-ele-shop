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
  }
]

const router = new VueRouter({
  routes
})

export default router
