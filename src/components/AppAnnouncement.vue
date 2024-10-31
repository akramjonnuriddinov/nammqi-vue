<template>
  <section class="">
    <div class="container py-10">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-4xl font-semibold text-gray-800">E'lonlar</h2>
        <a
          href="#"
          class="px-4 py-2 transition-opacity duration-300 border whitespace-nowrap text-primary-blue border-primary-blue hover:opacity-80"
        >
          Barchasini ko'rish
        </a>
      </div>
      <div class="flex items-center justify-end h-12 mb-4 space-x-2">
        <button
          ref="prevButton"
          class="flex items-center mr-4 text-white duration-300 bg-primary-blue hover:opacity-80"
        ></button>
        <button
          ref="nextButton"
          class="flex items-center text-white duration-300 bg-primary-blue hover:opacity-80"
        ></button>
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="16"
        :loop="true"
        :centeredSlides="true"
        :autoplay="{ delay: 500, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="{ prevEl: prevButton, nextEl: nextButton }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(event, index) in events" :key="index" class="">
          <div class="p-6 bg-primary-gray rounded h-[155px] flex flex-col">
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
import { Navigation, Pagination } from 'swiper/modules'
import { ref, onMounted } from 'vue'

const modules = [Navigation, Pagination]
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

const prevButton = ref<any>(null)
const nextButton = ref<any>(null)

onMounted(() => {
  // Make sure the buttons are set up as Swiper navigation controls
  if (prevButton.value && nextButton.value) {
    prevButton.value?.classList.add('swiper-button-prev')
    nextButton.value?.classList.add('swiper-button-next')
  }
})
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  color: white;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after,
.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 20px;
}
.swiper-button-prev,
.swiper-button-next {
  width: 48px;
  height: 48px;
  position: static;
  margin: 0;
}
</style>
