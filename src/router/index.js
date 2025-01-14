import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '../pages/dashboardPage.vue'
import homiy from '../pages/homiy.vue'
import talaba from '../pages/talaba.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
          path: '/',
          name: 'dashboard',
          meta: { layout: "Defoult" },
          component: DashboardPage,
        },
        {
          path: '/homiylar',
          name: 'homiylar',
          meta: {layout: "Defoult"},
          component: homiy
        },
        {
          path: '/talabalar',
          name: 'talabalar',
          meta: {layout: "Defoult"},
          component: talaba
        }
      
      ]
})

export default router
