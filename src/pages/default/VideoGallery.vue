<script lang="ts" setup>
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
    </div>
  </section>
</template>
