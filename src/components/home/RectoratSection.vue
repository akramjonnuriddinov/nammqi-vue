<template>
  <section class="py-10 bg-blue-50">
    <div class="container">
      <h2 class="mb-4 text-4xl font-semibold text-gray-800">Rektorat</h2>
      <!-- <div class="flex justify-center py-8">
        <div class="w-[350px] ">
          <ThreeDCard></ThreeDCard>
        </div>
      </div> -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]">
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
        <ThreeDCard></ThreeDCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ThreeDCard from '../utils/card3d/ThreeDCard.vue'
</script>

<style>
</style>