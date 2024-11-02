<template>
  <div class="relative">
    <TopHeader />
    <MainHeader />
    <RouterView />
    <TheFooter />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/home/TopHeader.vue'
import MainHeader from '@/components/home/MainHeader.vue'
import TheFooter from '@/components/home/TheFooter.vue'
import ScrollTop from '@/components/home/ScrollTop.vue'
</script>
