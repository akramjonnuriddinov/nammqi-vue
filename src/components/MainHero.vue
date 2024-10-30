<template>
  <Swiper :loop="true" pagination class="h-[460px] relative">
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <div
        class="hero-slide bg-cover"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="container text-white py-16">
          <div class="max-w-[600px] w-full">
            <h2 class="text-[55px] font-extrabold mb-3 leading-[55px]">
              {{ slide.title }}
            </h2>
            <p class="text-2xl">{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <div class="shadow-img"></div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    image:
      'https://tsu.ru/upload/resize_cache/iblock/5c4/jjy6sk2t03uy0igfadkkuj48qlqmqw3r/1920_460_2/ed_tech-_1_.jpg',
    title: 'Namangan Muhandislik Qurilish Instituti',
    description:
      'Современные инструменты обеспечения качества образования для университетов России',
  },
  {
    image:
      'https://en.tsu.ru/upload/resize_cache/iblock/336/tqx5dp6xw04qurv3yvqoqv1p0c2glxcy/1920_460_2/gras2022-_2_.jpg',
    title: 'Call Markaz',
    description:
      'Федеральный проект по содействию занятости отдельных категорий граждан',
  },
  {
    image:
      'https://tsu.ru/upload/resize_cache/iblock/a11/1rrkvb7dy43oo1kkmuyz6ju4lesp3vii/1920_460_2/Fon_Montazhnaya-oblast-1.jpg',
    title: 'Universitet Haqida',
    description: 'Новые компетенции в области информационных технологий',
  },
]
</script>

<style scoped>
.hero-slide {
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}
.hero-slide::before {
  background: #17263d;
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
.text-overlay {
  position: absolute;
  color: white;
  bottom: 20%;
  left: 10%;
}
.shadow-img {
  background: #17263d;
  bottom: 0;
  left: 0;
  opacity: 0.8;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}
</style>
