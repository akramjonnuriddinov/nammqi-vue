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
import TopHeader from '../components/TopHeader.vue'
import MainHeader from '../components/MainHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import ScrollTop from '../components/ScrollTop.vue'
</script>
