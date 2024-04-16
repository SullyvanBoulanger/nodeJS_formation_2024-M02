import { createRouter, createWebHistory } from 'vue-router'
import Index from "../components/task/Index.vue";
import Create from "../components/task/Create.vue";
import Update from "../components/task/Update.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/update',
      name: 'update',
      component: Update
    },
  ]
})

export default router
