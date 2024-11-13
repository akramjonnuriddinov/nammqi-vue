<template>
  <div class="flex flex-col min-h-screen">
    <TopHeader />
    <MainHeader />
    <RouterView class="flex-1 overflow-auto" />
    <TheFooter />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import MainHeader from '@/components/organisms/MainHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ScrollTop from '@/components/organisms/ScrollTop.vue'
</script>
