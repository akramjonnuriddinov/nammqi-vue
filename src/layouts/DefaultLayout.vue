<template>
  <div>
    <TopHeader />
    <MainHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '../components/TopHeader.vue'
import MainHeader from '../components/MainHeader.vue'
</script>
