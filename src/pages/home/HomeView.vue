<template>
  <MainHero />
  <AppAnnouncement />
  <DepartmentList />
  <InteractiveServices />
  <AppNews />
  <AppStats />
</template>

<script setup lang="ts">
import MainHero from '@/components/home/MainHero.vue'
import DepartmentList from '@/components/home/DepartmentList.vue'
import InteractiveServices from '@/components/home/InteractiveServices.vue'
import AppNews from '@/components/home/AppNews.vue'
import AppAnnouncement from '@/components/home/AppAnnouncement.vue'
import AppStats from '@/components/home/AppStats.vue'
</script>
