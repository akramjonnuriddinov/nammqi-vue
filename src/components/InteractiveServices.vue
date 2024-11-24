<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue'
import { cards } from '@/constants'
</script>

<template>
  <section>
    <div class="container py-10">
      <h2 class="mb-4 text-4xl font-semibold text-gray-800">Xizmatlar</h2>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ServiceCard
          v-for="(card, index) in cards"
          :key="index"
          :link="card.link"
          :icon="card.hoverIcon"
          :hoverIcon="card.hoverIcon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>
