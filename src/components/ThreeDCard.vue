<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <div class="flip-card w-full h-[450px]">
    <div class="relative w-full h-full text-center flip-card-inner">
      <div class="flex flex-col bg-white flip-card-front">
        <div class="overflow-hidden">
          <img
            class="object-cover object-top w-full h-full"
            src="https://my.nammqi.uz/storage/news/rektor.jpg"
          />
        </div>
        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-800">
            Ergashev Shariboy To'lanovich
          </h3>
          <p class="text-primary-blue">Rektor</p>
        </div>
      </div>
      <div
        class="flex flex-col p-5 bg-transparent border flip-card-back border-primary-blue"
      >
        <div class="w-32 h-32 m-auto">
          <img
            class="object-cover w-full h-full rounded-full"
            src="https://my.nammqi.uz/storage/news/rektor.jpg"
          />
        </div>
        <div class="flex flex-col items-center h-full">
          <div>
            <p class="text-primary-blue">Rektor</p>
            <h3 class="text-xl font-bold text-gray-800">
              Ergashev Sharibboy To'lanovich
            </h3>
          </div>
          <div class="flex flex-col gap-1 mt-7">
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue"
              >
                <PhoneIcon class="w-5 text-white" />
              </div>
              <p>+998 99 477 65 18</p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-blue"
              >
                <EnvelopeIcon class="w-5 text-white" />
              </div>
              <p>sharibboy@gmail.com</p>
            </div>
          </div>
          <RouterLink class="mt-auto w-max" to="/teachers-detail">
            <BaseButton>Batafsil</BaseButton>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
