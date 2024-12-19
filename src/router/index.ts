import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/pages/default/HomeView.vue'
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
        component: () => import('@/pages/default/TeachersDetailView.vue'),
      },
      {
        path: 'teachers',
        name: 'teachers',
        component: () => import('@/pages/default/TeachersList.vue'),
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/default/NewsView.vue'),
      },
      {
        path: 'news/:id',
        name: 'news-detail',
        component: () => import('@/pages/default/NewsDetailView.vue'),
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/default/ContactView.vue')
      },
      {
        path: '/faculties',
        name: 'faculties',
        component: () => import('@/pages/default/FacultiesView.vue')
      },
      {
        path: '/faculties/:id',
        name: 'faculty',
        component: () => import('@/pages/default/FacultiesInnerView.vue')
      },
      {
        path: '/announcements',
        name: 'announcements',
        component: () => import('@/pages/default/AnnouncementsView.vue')
      },
      {
        path: '/rectorat',
        name: 'rectorat',
        component: () => import('@/pages/default/RectoratView.vue')
      },
      {
        path: '/institute-charter',
        name: 'institute-charter',
        component: () => import('@/pages/default/InstituteCharter.vue')
      },
      {
        path: '/about-institute',
        name: 'about-institute',
        component: () => import('@/pages/default/AboutInstituteView.vue')
      },
      {
        path: '/video-gallery',
        name: 'video-gallery',
        component: () => import('@/pages/default/VideoGallery.vue')
      }
    ],
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
      {
        path: 'teachers',
        name: 'admin-teachers',
        component: () => import('@/pages/admin/AdminTeachers.vue'),
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
        component: () => import('@/pages/default/ProfileInfoView.vue'),
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/default/LoginView.vue')
      }
    ]
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
