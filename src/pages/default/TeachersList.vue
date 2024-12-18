<script setup lang="ts">
import ThreeDCard from '@/components/shared/ThreeDCard.vue'
</script>

<template>
  <section class="py-[100px]">
    <div class="container px-5 mx-auto">
      <h1 class="text-[52px] leading-[64px] mb-16 font-semibold">
        Bizning ustozlar bilan tanishing
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]"
      >
        <ThreeDCard v-for="i in 12" :key="i"></ThreeDCard>
      </div>
    </div>
  </section>
</template>
