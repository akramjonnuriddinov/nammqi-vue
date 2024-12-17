<script setup lang="ts">
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <section class="min-h-screen py-10 bg-[#f6f6f6]">
    <div class="container p-6">
      <span class="flex w-full mb-2 text-sm text-primary-blue">
        Instituti Axborot Xizmati</span
      >
      <h2 class="mb-10 text-4xl font-bold">Tadbirlar ro'yxati</h2>
      <ul class="flex flex-wrap gap-4 mb-6">
        <li class="w-fit whitespace-nowrap custom-radio">
          <input type="checkbox" class="hidden" id="v1" />
          <label for="v1">Лекции</label>
        </li>
        <li class="w-fit whitespace-nowrap custom-radio">
          <input type="checkbox" class="hidden" id="v2" />
          <label for="v2">Лекции2</label>
        </li>
        <li class="w-fit whitespace-nowrap custom-radio">
          <input type="checkbox" class="hidden" id="v3" />
          <label for="v3">Лекции3</label>
        </li>
      </ul>
      <ul class="grid grid-cols-2 gap-4">
        <li v-for="i in 6" class="flex items-start bg-white">
          <div class="flex mr-4 w-[360px] h-[320px]">
            <img
              class="block min-w-[360px] max-w-[360px] object-cover"
              src="https://news.tsu.ru/upload/resize_cache/iblock/ea4/i0mshtmklbhnh6srjri9uss6xhdthp48/430_380_2/DS-fond-Gorchakova-anons.jpg"
              alt=""
            />
          </div>
          <div class="flex flex-col h-full gap-1 py-4">
            <span>15-yanvar, 2025</span>
            <span class="mb-4 font-bold text-gray-500">14:00</span>
            <a href="#" class="mb-2 text-2xl font-bold text-black">
              Фонд Горчакова открывает прием заявок на Дипсеминар — 2025
            </a>
            <a
              class="flex items-center gap-1 mt-auto font-bold text-primary-blue"
              href="#"
            >
              Batafsil
              <ChevronRightIcon class="w-5" />
            </a>
          </div>
        </li>
      </ul>
      <div class="mt-10">
        <button
          class="flex items-center justify-center w-full gap-2 py-4 font-medium text-white cursor-pointer bg-primary-blue"
        >
          Yana ko'rsatish
          <ChevronDownIcon class="w-6" />
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-radio::before,
.custom-radio::before {
  content: '';
  position: relative;
}

.custom-radio label {
  position: relative;
  display: inline-block;
  padding: 16px 20px;
  border: 1px solid #ececec;
  color: #0072bc;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: #fff;
  cursor: pointer;
  transition: 0.35s ease-in-out;
  transition-property: background-color, color;
}
.custom-radio input[type='checkbox']:checked + label,
.custom-radio input[type='radio']:checked + label {
  background-color: #0072bc;
  color: #fff;
}
</style>
