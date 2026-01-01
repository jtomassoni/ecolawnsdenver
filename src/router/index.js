import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import About from '../views/About.vue'
import Testimonials from '../views/Testimonials.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: Testimonials
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 