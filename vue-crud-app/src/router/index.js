import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PersonList from '../views/PersonList.vue';
import PersonDetails from '../views/PersonDetails.vue';
import PersonForm from '../views/PersonForm.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/persons', name: 'PersonList', component: PersonList },
  { path: '/persons/new', name: 'PersonForm', component: PersonForm },
  { path: '/persons/:id', name: 'PersonDetails', component: PersonDetails },
  { path: '/persons/:id/edit', name: 'PersonEdit', component: PersonForm }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
