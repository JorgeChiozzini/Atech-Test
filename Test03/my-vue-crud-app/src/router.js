import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import PersonPage from './views/PersonPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/person/:id', component: PersonPage, props: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
