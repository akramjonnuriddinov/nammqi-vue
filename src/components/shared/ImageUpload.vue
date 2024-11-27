<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['upload', 'remove'])
const previewUrl = ref<string | null>(null)

const handleMainImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    previewUrl.value = URL.createObjectURL(file)
    emit('upload', previewUrl.value)
  }
}

const removeImage = () => {
  previewUrl.value = null
  emit('remove')
}
</script>

<template>
  <div class="flex flex-col items-center space-y-4 image-upload">
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span class="font-semibold">Rasm yuklash uchun bosing</span>
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-400">
            PNG, JPEG, JPG yoki SVG
          </p>
        </div>
        <input
          @change="handleMainImageUpload"
          id="dropzone-file"
          accept="image/*"
          type="file"
          class="hidden"
        />
      </label>
    </div>

    <!-- Image Preview -->
    <div v-if="previewUrl" class="relative image-preview">
      <img
        :src="previewUrl"
        alt="Uploaded Image"
        class="object-cover w-full h-full rounded-lg"
      />
      <button
        @click="removeImage"
        class="absolute flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded top-2 right-2 hover:opacity-70"
      >
        <XMarkIcon class="w-6" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.image-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
