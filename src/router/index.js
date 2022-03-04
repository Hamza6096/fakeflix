import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavorisView from '../views/FavorisView.vue'
import PageMovie from '../views/PageMovie.vue'
import FormToken from '../views/FormToken.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/favoris',
    name: 'favoris',
    component: FavorisView
  },
  {
    path: '/page/:id',
    name: 'page',
    component: PageMovie
  },
  {
    path: '/form',
    name: 'form',
    component: FormToken
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
