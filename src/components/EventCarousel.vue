<template>
  <section>
    <div class="container py-10">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-4xl font-semibold text-gray-800">E'lonlar</h2>
        <BaseButton
          :theme="EThemes.TRANSPARENT"
          class="px-4 py-2 font-bold transition-opacity duration-300 border whitespace-nowrap text-primary-blue border-primary-blue hover:opacity-80"
        >
          <RouterLink to="/">Barchasini ko'rish</RouterLink>
        </BaseButton>
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
        :autoplay="autoplayConfig"
        :navigation:any="{ prevEl: prevButton, nextEl: nextButton }"
        class="mySwiper"
      >
        <SwiperSlide v-for="(event, index) in events" :key="index">
          <div class="p-6 bg-primary-gray h-[155px] flex flex-col">
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
import { Navigation, Autoplay } from 'swiper/modules'
import { ref, onMounted } from 'vue'
import { events } from '@/constants'
import BaseButton from '@/components/atoms/BaseButton.vue'
import { EThemes } from '@/types'

const modules = [Navigation, Autoplay]

const prevButton = ref<HTMLElement | null>(null)
const nextButton = ref<HTMLElement | null>(null)

// Define autoplay configuration
const autoplayConfig: any = {
  delay: 3500,
  disableOnInteraction: false,
}

onMounted(() => {
  if (prevButton.value && nextButton.value) {
    console.log('Hye')
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
