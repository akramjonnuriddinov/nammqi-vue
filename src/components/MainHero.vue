<template>
  <Swiper :loop="true" class="h-[460px] relative">
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
        class="hero-slide"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="container py-16 text-white">
          <div class="max-w-[600px] w-full">
            <h2 class="text-[55px] font-extrabold mb-3 leading-[55px]">
              {{ slide.title }}
            </h2>
            <p class="text-2xl">{{ slide.description }}</p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

const slides = [
  {
    image:
      'https://tsu.ru/upload/resize_cache/iblock/5c4/jjy6sk2t03uy0igfadkkuj48qlqmqw3r/1920_460_2/ed_tech-_1_.jpg',
    title: 'Namangan Muhandislik Qurilish Instituti',
    description:
      'Современные инструменты обеспечения качества образования для университетов России',
  },
  {
    image: 'https://my.nammqi.uz/storage/banner/banner-1.png',
    title: "Yangi O'zbekison",
    description:
      'Федеральный проект по содействию занятости отдельных категорий граждан',
  },
  {
    image: 'https://my.nammqi.uz/storage/galleries/2023-03-09-105525.jpg',
    title: 'Universitet Haqida',
    description: 'Новые компетенции в области информационных технологий',
  },
]
</script>

<style scoped>
.hero-slide {
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  height: 460px;
  align-items: center;
  z-index: 0;
}

.hero-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(23, 38, 61, 0.8);
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  color: white;
}

h2 {
  font-size: 55px;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Text shadow for added contrast */
}

p {
  font-size: 1.25rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
