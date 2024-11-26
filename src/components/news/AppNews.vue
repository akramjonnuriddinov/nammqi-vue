<script setup lang="ts">
import { getNews } from '@/composables/useNews'
import { onMounted, ref } from 'vue'
import NewsCard from '@/components/news/NewsCard.vue'
import { Article } from '@/types'

const news = ref<Article[] | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    news.value = await getNews()
  } catch (err) {
    error.value = 'Failed to load faculties'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="py-10">
    <div class="container">
      <!-- Header -->
      <header class="flex items-center justify-between mb-8">
        <h2 class="mb-4 text-4xl font-semibold text-gray-800">Yangiliklar</h2>
        <RouterLink
          to="/news"
          class="font-bold duration-500 text-primary-blue hover:opacity-80"
          >Barchasini ko'rish
        </RouterLink>
      </header>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Large Article -->
        <div
          data-aos="fade-right"
          class="relative overflow-hidden bg-white shadow-lg lg:col-span-2"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Main article image"
            class="object-cover w-full h-64 lg:h-80"
          />
          <div class="h-full p-6 text-white bg-primary-blue">
            <span
              class="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase bg-primary-blue"
              >ВАЖНО</span
            >
            <p class="text-xs opacity-75">29.10.2024</p>
            <h2 class="mt-1 text-2xl font-bold">
              Учёные открыли семейство бактерий, способных дышать кислородом под
              землей
            </h2>
            <p class="mt-2 text-sm opacity-75">
              «Поймать» ранее неизвестные бактерии удалось с помощью
              метагеномного анализа.
            </p>
            <a
              href="#"
              class="inline-block mt-4 font-semibold underline text-primary-gray"
              >Подробнее</a
            >
          </div>
        </div>

        <!-- Small Articles -->
        <div class="flex flex-col gap-4 judstify-between">
          <NewsCard
            v-for="article in news?.slice(0, 2)"
            :key="article.id"
            :article="article"
          />
        </div>
      </div>

      <!-- Additional Sections Below -->
      <div
        data-aos="fade-up"
        class="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2"
      >
        <!-- Rector's Message -->
        <div
          class="flex items-center p-6 transition-transform duration-300 transform bg-white shadow-lg hover:scale-105"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Rector"
            class="object-cover w-24 h-24 mr-4"
          />
          <div>
            <a href="#" class="block text-xl font-bold text-primary-blue"
              >Слово — ректору</a
            >
            <p class="mt-2 text-sm leading-snug text-gray-600 line-clamp-2">
              Реформа высшего образования: чего ждут работодатели и к чему они
              Реформа высшего образования: чего ждут работодатели и к чему они
              Реформа высшего образования: чего ждут работодатели и к чему они
              готовы?
            </p>
            <p class="mt-1 text-xs text-gray-500">30.09.2024</p>
          </div>
        </div>

        <!-- Special Project Section -->
        <div
          class="relative p-6 transition-transform duration-300 transform bg-white shadow-lg hover:scale-105"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Special project"
            class="object-cover w-full h-40"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-white bg-opacity-75 bg-primary-blue"
          >
            <a href="#" class="text-center">
              <h2 class="text-xl font-bold">Спецпроект</h2>
              <p class="mt-1 text-sm">
                О проекте на тему развития сельского хозяйства
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
