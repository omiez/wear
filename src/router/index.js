import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Attack from '../views/Attack.vue'
import Improvise from '../views/Improvise.vue'
import Protect from '../views/Protect.vue'
import Escape from '../views/Escape.vue'
import Article from '../views/article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/attack',
    name: 'attack',
    component
    : Attack
  },
  {
    path: '/improvise',
    name: 'improvise',
    component
    : Improvise
  },
  {
    path: '/protect',
    name: 'protect',
    component
    : Protect
  },
  {
    path: '/escape',
    name: 'escape',
    component
    : Escape
  },
  {
    path: '/article',
    name: 'article',
    component
    : Article
  }
  // ,
  // {
    // path: '/about',
    // name: 'about',
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
