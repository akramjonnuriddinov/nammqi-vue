<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import MainHeader from '@/components/organisms/MainHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ScrollTop from '@/components/organisms/ScrollTop.vue'
</script>

<template>
  <div>
    <TopHeader />
    <MainHeader />
    <RouterView />
    <TheFooter />
    <ScrollTop />
  </div>
</template>
