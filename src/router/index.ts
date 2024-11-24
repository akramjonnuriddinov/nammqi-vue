import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: any = [
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
        component: () => import('@/pages/TeachersDetailView.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/NewsView.vue'),
      },
      {
        path: 'news/news-detail',
        name: 'news-detail',
        component: () => import('@/pages/NewsDetailView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/AdminDashboard.vue'),
      },
      {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/AdminNews.vue'),
      },
    ],
  },
  {
    path: '/profile',
    component: () => import('@/layouts/ProfileLayout.vue'),
    children: [
      {
        path: '',
        name: 'profile-info',
        component: () => import('@/pages/ProfileInfoView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/layouts/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes,
})
