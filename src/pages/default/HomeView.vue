<script setup lang="ts">
import MainHero from '@/sections/home/MainHero.vue'
import DepartmentList from '@/sections/home/DepartmentList.vue'
import InteractiveServices from '@/sections/home/InteractiveServices.vue'
import AppNews from '@/components/news/AppNews.vue'
import EventCarousel from '@/sections/home/EventCarousel.vue'
import PhotoGallery from '@/sections/home/PhotoGallery.vue'
import RectoratSection from '@/sections/home/RectoratSection.vue'
</script>

<template>
  <MainHero />
  <EventCarousel />
  <AppNews />
  <DepartmentList />
  <InteractiveServices />
  <RectoratSection />
  <PhotoGallery />
</template>
