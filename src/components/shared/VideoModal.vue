<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'

const props = defineProps(['link'])
defineEmits(['close'])

const embedLink = computed(() => {
  if (!props.link) return ''
  const videoId = props.link.split('/').pop()
  return `https://www.youtube.com/embed/${videoId}`
})
</script>

<template>
  <section
    @click="$emit('close')"
    class="fixed top-0 left-0 z-[1000] flex items-center justify-center w-full p-10 h-full bg-[#00000080]"
  >
    <div
      @click.stop
      class="bg-white h-full max-w-[1000px] relative w-full max-h-[600px]"
    >
      <button
        @click="$emit('close')"
        class="absolute top-0 right-0 text-red-500 -translate-y-full hover:opacity-80"
      >
        <XMarkIcon class="w-10" />
      </button>
      <iframe
        class="w-full h-full"
        :src="embedLink"
        title="YouTube Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
