<script lang="ts" setup>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { PlayIcon } from '@heroicons/vue/24/solid'

const categories = [
  {
    title: 'All',
    link: 'all',
  },
  {
    title: 'Fashion',
    link: 'fashion',
  },
  {
    title: 'Game',
    link: 'game',
  },
  {
    title: 'Sports',
    link: 'sports',
  },
  {
    title: 'Technology',
    link: 'technology',
  },
  {
    title: 'Video',
    link: 'video',
  },
]
</script>

<template>
  <section class="min-h-screen py-10 bg-[#f6f6f6]">
    <div class="container p-6 mx-auto">
      <span class="flex w-full mb-2 text-sm text-primary-blue"
        >Namangan Muhandislik Qurilish Instituti</span
      >
      <h2 class="mb-6 text-4xl font-bold">Videogalareya</h2>
      <div class="relative mb-6">
        <input
          class="w-full px-20 py-4 border border-[#b4b4b4]"
          placeholder="Videoni qidirish"
          type="text"
        />
        <SearchIcon
          class="absolute w-4 -translate-y-1/2 text-primary-blue left-4 top-1/2"
        />
      </div>
      <div class="flex items-center gap-10 border-b">
        <h2
          class="py-5 mr-10 text-2xl font-medium border-b border-primary-blue"
        >
          Kategoriyalar
        </h2>
        <ul class="flex flex-wrap items-center space-x-4 text-gray-600">
          <li
            v-for="category in categories"
            :key="category.link"
            class="transition-colors duration-0 hover:text-primary-blue"
          >
            <button class="whitespace-nowrap">{{ category.title }}</button>
          </li>
        </ul>
      </div>

      <ul class="grid grid-cols-3 gap-10 py-10">
        <li v-for="i in 10" class="flex flex-col">
          <div class="relative group">
            <img
              class="rounded"
              src="https://demo.harutheme.com/vidio/wp-content/uploads/2020/01/technology-17.jpg"
              alt=""
            />
            <button
              class="absolute z-20 hidden text-white -translate-x-1/2 -translate-y-1/2 group-hover:flex top-1/2 left-1/2"
            >
              <PlayIcon class="w-14" />
            </button>
            <div
              class="absolute top-0 z-10 w-full h-full rounded bg-black/50"
            ></div>
          </div>

          <div class="flex flex-col">
            <h3 class="my-2">Video Created by Vidio</h3>
            <div class="flex items-center gap-2 text-xs text-gray-500">
              <span class="text-sm">Marc Campbell</span>
              <span class="text-sm">April 21, 2020</span>
              <span class="text-sm">6.267K views</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
