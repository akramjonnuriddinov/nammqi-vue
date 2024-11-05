<template>
  <div class="flip-card w-full h-[450px]">
    <div class="flip-card-inner relative w-full h-full text-center">
      <div class="flip-card-front flex flex-col bg-white">
        <div class="overflow-hidden">
          <img
            class="w-full h-full object-cover object-top"
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
        class="flip-card-back p-5 flex flex-col border border-primary-blue bg-transparent"
      >
        <div class="w-32 h-32 m-auto">
          <img
            class="w-full h-full object-cover rounded-full"
            src="https://my.nammqi.uz/storage/news/rektor.jpg"
          />
        </div>
        <div class="h-full items-center flex flex-col">
          <div>
            <p class="text-primary-blue">Rektor</p>
            <h3 class="text-xl font-bold text-gray-800">
              Ergashev Sharibboy To'lanovich
            </h3>
          </div>
          <div class="flex mt-7 flex-col gap-1">
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center bg-primary-blue"
              >
                <PhoneIcon class="w-5 text-white" />
              </div>
              <p>+998 99 477 65 18</p>
            </div>
            <div class="flex items-center gap-3">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center bg-primary-blue"
              >
                <EnvelopeIcon class="w-5 text-white" />
              </div>
              <p>sharibboy@gmail.com</p>
            </div>
          </div>
          <BaseButton
            @click="$router.push({ path: '/teachers-detail' })"
            class="mt-auto w-max"
          >
            Batafsil
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'
import BaseButton from '../button/BaseButton.vue'
</script>


<style>
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
  