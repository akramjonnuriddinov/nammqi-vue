<template>
  <section class="bg-primary-gray">
    <div class="container py-10">
      <div class="flex items-center justify-between mb-4">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">E'lonlar</h2>
        <a
          href="#"
          class="px-4 py-2 transition-opacity duration-300 border text-primary-blue border-primary-blue hover:opacity-80"
        >
          Barchasini ko'rish
        </a>
      </div>
      <Swiper
        :slides-per-view="3"
        :space-between="16"
        :loop="true"
        :autoplay="{ delay: 500, disableOnInteraction: true }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(event, index) in events" :key="index" class="">
          <div class="p-6 bg-white rounded h-[155px] flex flex-col">
            <p class="mb-2 text-neutral-gray">{{ event.date }}</p>
            <a href="#" class="flex items-center h-full font-semibold">
              {{ event.description }}
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

const events = [
  {
    date: '15 noyabr 2024',
    description: 'Концерт «В ритме танца через континенты»',
  },
  {
    date: '3 noyabr 2024',
    description: 'Вечер музыки для органа и гобоя «Два Баха: отец и сын»',
  },
  { date: '23 oktabr 2024', description: 'Лекция-концерт «Музыка для всех»' },
  {
    date: '15 noyabr 2024',
    description: 'Концерт «В ритме танца через континенты»',
  },
  {
    date: '3 noyabr 2024',
    description: 'Вечер музыки для органа и гобоя «Два Баха: отец и сын»',
  },
  { date: '23 oktabr 2024', description: 'Лекция-концерт «Музыка для всех»' },
]
</script>
