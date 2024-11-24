<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/24/solid'

const translateYCustom = ref(true)

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
      translateYCustom.value = false
    } else {
      translateYCustom.value = true
    }
  })
})
</script>

<template>
  <div
    :class="{
      'translate-y-[100%]': translateYCustom,
      'translate-y-[-28px]': !translateYCustom,
    }"
    class="fixed bottom-0 z-50 flex flex-col items-center transition-all duration-700 ease-out right-12"
  >
    <a
      class="flex h-[50px] w-[50px] items-center justify-center bg-primary-blue text-white hover:bg-primary-blue"
      href="#"
    >
      <ChevronUpIcon class="w-8" />
    </a>
  </div>
</template>
