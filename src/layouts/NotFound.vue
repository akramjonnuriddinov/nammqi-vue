<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
import { EThemes } from '@/types'
</script>

<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-blue"
        >
          404
        </h1>
        <p
          class="mb-4 text-3xl tracking-tight font-bold text-gray-800 md:text-4xl"
        >
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-gray-500">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <router-link to="/">
          <BaseButton :theme="EThemes.TRANSPARENT">
            Back to Homepage
          </BaseButton>
        </router-link>
      </div>
    </div>
  </section>
</template>
