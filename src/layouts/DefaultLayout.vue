<template>
  <div>
    <TopHeader />
    <MainHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '../components/TopHeader.vue'
import MainHeader from '../components/MainHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>
