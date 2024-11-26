import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/home/HomeView.vue'
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
        component: () => import('@/pages/home/TeachersDetailView.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/home/NewsView.vue'),
      },
      {
        path: 'news/:id',
        name: 'news-detail',
        component: () => import('@/pages/home/NewsDetailView.vue'),
      },
    ],
  },
  {
    path: '/teachers',
    component: () => import('@/layouts/TeachersLayout.vue'),
    children: [
      {
        path: '',
        name: 'teachers',
        component: () => import('@/pages/home/TeachersList.vue')
      },
      {
        path: '/:id',
        name: 'teacher-detail2',
        component: () => import('@/pages/home/TeacherDetail2.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/pages/admin/AdminDashboard.vue'),
      },
      {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/admin/AdminNews.vue'),
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
        component: () => import('@/pages/home/ProfileInfoView.vue'),
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
