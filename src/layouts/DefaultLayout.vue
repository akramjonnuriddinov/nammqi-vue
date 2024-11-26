<script setup lang="ts">
import TopHeader from '@/components/layouts/TopHeader.vue'
import MainHeader from '@/components/layouts/MainHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
import ScrollTop from '@/components/shared/ScrollTop.vue'
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
