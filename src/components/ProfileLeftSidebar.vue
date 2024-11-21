<template>
  <!-- Left Sidebar Start -->
  <div class="w-full xl:w-3/12 lg:w-4/12 md:w-5/12 mb-11 lg:mb-0">
    <div class="lg:pl-5">
      <!-- Top Start -->
      <div v-if="teacher" class="bg-white border rounded-lg">
        <div class="px-5 text-center border-b border-gray-200 py-11">
          <a class="mb-4" href="#">
            <img
              class="mx-auto rounded-full w-14 h-14"
              :src="teacher.image"
              alt=""
            />
          </a>
          <h4 class="mb-0">
            <a class="text-lg font-semibold text-gray-900" href="#">{{
              teacher.fullname
            }}</a>
          </h4>
          <p class="mb-8">
            <a class="text-base text-gray-500" href="#">{{
              teacher.position
            }}</a>
          </p>
          <div class="flex flex-wrap items-center justify-center space-x-3">
            <a
              v-for="i in 4"
              class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
              href="#"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
        <!-- Top End -->
        <!-- Bottom Start -->
        <div class="pb-5 px-9 pt-9">
          <h5 class="mb-8 text-lg text-gray-900">Contact Info</h5>
          <!-- Single List -->
          <div class="mb-7">
            <p class="mb-0 text-base">Location</p>
            <h5 class="mb-0 text-base font-semibold text-gray-900 break-words">
              New York, USA
            </h5>
          </div>
          <!-- Single List -->
          <div class="mb-7">
            <p class="mb-0 text-base">E-mail</p>
            <h5 class="mb-0 text-base font-semibold">
              <a
                class="text-gray-900 break-words"
                href="mailto:name_ac@gmail.com"
                >{{ teacher.email }}</a
              >
            </h5>
          </div>
          <!-- Single List -->
          <div class="mb-7">
            <p class="mb-0 text-base">Phone</p>
            <h5 class="mb-0 text-base font-semibold">
              <a
                class="text-gray-900 break-words"
                :href="`tel:${teacher.phone_number}`"
                >{{ teacher.phone_number }}</a
              >
            </h5>
          </div>
          <!-- Single List -->
          <div class="mb-7">
            <p class="mb-0 text-base">Website Linked</p>
            <h5 class="mb-0 text-base font-semibold">
              <a class="break-words" href="#">{{ teacher.linkedin }}</a>
            </h5>
          </div>
          <!-- Single List -->
        </div>
        <!-- Bottom End -->
      </div>
    </div>
  </div>
  <!-- Left Sidebar End -->
</template>

<script setup lang="ts">
import { Teacher } from '@/types'

defineProps<{
  teacher: Teacher | null
}>()
</script>
