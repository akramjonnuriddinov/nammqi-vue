<script setup lang="ts">
import {
  NewspaperIcon,
  PhotoIcon,
  BellAlertIcon,
  SquaresPlusIcon,
  UsersIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  ArrowRightEndOnRectangleIcon,
  PencilSquareIcon,
  HomeIcon,
} from '@heroicons/vue/24/solid'
</script>

<template>
  <div>
    <aside
      id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <div class="mb-2">
          <div
            class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <HomeIcon class="w-6 h-6 text-neutral-gray" />
            <RouterLink to="/" class="flex-1 ms-3 whitespace-nowrap"
              >Home</RouterLink
            >
          </div>
        </div>
        <ul class="space-y-2 font-medium">
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <NewspaperIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink
                :to="{ name: 'admin-news' }"
                class="flex-1 ms-3 whitespace-nowrap"
                >Yangiliklar</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <BellAlertIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >E'lonlar</RouterLink
              >
              <span
                class="inline-flex items-center justify-center px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full ms-3 dark:bg-gray-700 dark:text-gray-300"
                >Pro</span
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <SquaresPlusIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Xizmatlar</RouterLink
              >
              <span
                class="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 dark:bg-blue-900 dark:text-blue-300"
                >3</span
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <UsersIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Rektorat</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <AcademicCapIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Fakultetlar</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <BuildingLibraryIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Kafedralar</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <UserGroupIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >O'qituvchilar</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <PhotoIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Gallery</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <ArrowRightEndOnRectangleIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Sign In</RouterLink
              >
            </div>
          </li>
          <li>
            <div
              class="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <PencilSquareIcon class="w-6 h-6 text-neutral-gray" />
              <RouterLink to="/admin" class="flex-1 ms-3 whitespace-nowrap"
                >Sign Up</RouterLink
              >
            </div>
          </li>
        </ul>
      </div>
    </aside>

    <div class="p-4 sm:ml-64">
      <RouterView />
    </div>
  </div>
</template>
