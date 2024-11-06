import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/home/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import AdminDashboard from '@/pages/admin/AdminDashboard.vue'
import TeachersDetailView from '@/pages/teachers-detail/TeachersDetailView.vue'
import NotFound from '@/layouts/NotFound.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'teachers-detail',
        name: 'teachers-detail',
        component: TeachersDetailView,
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: AdminDashboard,
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes,
})
