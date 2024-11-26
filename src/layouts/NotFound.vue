<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import { EThemes } from '@/types'
</script>

<template>
  <section class="bg-white">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <div class="max-w-screen-sm mx-auto text-center">
        <h1
          class="mb-4 font-extrabold tracking-tight text-7xl lg:text-9xl text-primary-blue"
        >
          404
        </h1>
        <p
          class="mb-4 text-3xl font-bold tracking-tight text-gray-800 md:text-4xl"
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
