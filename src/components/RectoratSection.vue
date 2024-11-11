<template>
  <section class="py-10 bg-blue-50">
    <div class="container">
      <h2 class="mb-4 text-4xl font-semibold text-gray-800">Rektorat</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]"
      >
        <ThreeDCard v-for="i in 5" :key="i"></ThreeDCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ThreeDCard from '@/components/ThreeDCard.vue'
</script>

<style></style>
