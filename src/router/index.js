import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import DetailView from '../views/DetailView.vue';
import EditView from '../views/EditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/detail/:recipeId',
      name: 'recipe-detail',
      component: DetailView,
      props: true,
    },
    {
      path: '/edit/:recipeId', 
      name: 'edit',
      component: EditView,
      props: true, 
    },
  ]
})

export default router
