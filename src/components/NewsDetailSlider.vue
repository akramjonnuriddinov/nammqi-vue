<template>
  <section>
    <div class="py-10">
      <div
        class="flex max-[400px]:flex-col gap-5 items-center justify-between mb-4"
      >
        <h2 class="text-2xl font-semibold text-gray-800">Foto lavhalar</h2>
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
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="16"
        :loop="true"
        :centeredSlides="true"
        :autoplay="autoplayConfig"
        :navigation="navigation"
        class="mySwiper"
      >
        <SwiperSlide v-for="(event, index) in news" :key="index">
          <div
            class="h-[250px] max-[500px]:h-[200px] max-[400px]:h-[150px] sm:h-[300px] lg:h-[500px] xls:h-[700px] flex flex-col"
          >
            <img
              class="object-cover object-center w-full h-full"
              :src="event.image"
              alt=""
            />
            <div
              class="absolute text-xs sm:text-base flex items-center fill-white gap-1 px-4 py-2 mb-3 font-bold top-10 left-0 bg-primary-blue text-white"
            >
              <svg
                class="w-3 h-3 sm:w-[18px] sm:h-[18px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
                ></path>
              </svg>
              <p class="mb-0">{{ event.date }}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import { ref, onMounted, reactive } from 'vue'

import { getNews } from '@/composables/useNews'
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

const modules = [Navigation, Autoplay]

const prevButton = ref<HTMLElement | null | any>(null)
const nextButton = ref<HTMLElement | null>(null)

const autoplayConfig: any = {
  delay: 3000,
  disableOnInteraction: false,
}

const navigation = reactive<any>({
  prevEl: null as HTMLElement | null | any,
  nextEl: null as HTMLElement | null | any,
})

onMounted(() => {
  if (prevButton.value && nextButton.value) {
    prevButton.value.classList.add('swiper-button-prev')
    nextButton.value.classList.add('swiper-button-next')

    navigation.prevEl = prevButton.value
    navigation.nextEl = nextButton.value
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
