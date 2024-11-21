<template>
  <div>
    <!-- Excerpt Start -->
    <div class="px-5">
      <h4 class="mt-5 text-lg font-semibold text-black mb-7">About</h4>
      <p class="mb-8 text-sm text-gray-700">
        {{ teacher?.about }}
      </p>
    </div>
    <!-- Skills -->
    <div class="p-5 border-t">
      <h4 class="mt-5 text-lg font-semibold text-black mb-7">Skills</h4>
      <ul class="flex flex-wrap">
        <li v-for="skill in teacher?.skills">
          <span
            class="px-3 py-1 mt-2 mb-2 mr-3 text-xs text-gray-700 bg-gray-100 rounded-md"
            >{{ skill }}</span
          >
        </li>
      </ul>
    </div>
    <!-- Card Section Start -->
    <div class="p-5 border-t">
      <h4 class="mt-5 text-lg font-semibold text-black mb-7">
        Work Experience
      </h4>
      <!-- Single Card -->
      <div
        v-for="experience in teacher?.work_experience"
        class="flex items-center pr-11 mb-9"
      >
        <div class="flex w-16 h-16 mr-8">
          <img :src="experience.logo" alt="" class="object-contain" />
        </div>
        <div class="w-full">
          <h3 class="mb-0">
            <a class="text-lg font-semibold text-black" href="#">{{
              experience.company
            }}</a>
          </h3>
          <a href="#" class="text-sm text-gray-500">{{
            experience.description
          }}</a>
          <div class="flex items-center justify-between text-sm text-gray-400">
            <a href="#">{{ experience.duration }}</a>
            <a href="#">
              <img
                src="https://finestwp.co/demos/html/jobcamp/image/svg/icon-loaction-pin-black.svg"
                alt=""
                class="inline-block mr-1"
              />
              {{ experience.role }}
            </a>
          </div>
        </div>
      </div>
      <!-- Single Card End -->
      <!-- Additional Work Experience Cards -->
    </div>
    <!-- Education Section Start -->
    <div class="p-5 border-t">
      <h4 class="mt-5 text-lg font-semibold text-black mb-7">Education</h4>
      <!-- Single Education Card -->
      <div
        v-for="education in teacher?.education"
        class="flex items-center pr-11 mb-9"
      >
        <div class="flex w-16 h-16 mr-8">
          <img :src="education.logo" alt="" class="object-contain" />
        </div>
        <div class="w-full">
          <h3 class="mb-0">
            <a class="text-lg font-semibold text-black" href="#">{{
              education.degree
            }}</a>
          </h3>
          <a href="#" class="text-sm text-gray-500">{{
            education.institution
          }}</a>
          <div class="flex items-center justify-between text-sm text-gray-400">
            <a href="#">{{ education.duration }}</a>
            <a href="#">
              <img
                src="https://finestwp.co/demos/html/jobcamp/image/svg/icon-loaction-pin-black.svg"
                alt=""
                class="inline-block mr-1"
              />
              {{ education.description }}
            </a>
          </div>
        </div>
      </div>
      <!-- Additional Education Cards -->
    </div>
    <!-- Card Section End -->
  </div>
</template>

<script setup lang="ts">
import { Teacher } from '@/types'

defineProps<{
  teacher: Teacher
}>()
</script>
