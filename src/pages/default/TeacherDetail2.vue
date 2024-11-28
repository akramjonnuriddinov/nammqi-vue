<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import { getTeacherById } from '@/composables/useTeachers'
import { onMounted, ref } from 'vue'
import { ITeacher } from '@/types'
import { useRoute } from 'vue-router'

const route = useRoute()
const teacher = ref<ITeacher | null>(null)

onMounted(async () => {
  try {
    teacher.value = await getTeacherById(route.params.id as any)
  } catch (err) {
    console.log('CUSTOM ERROR:', err)
  }
})
</script>

<template>
  <div v-if="teacher" class="container py-10">
    <h1 class="mb-10 text-4xl font-semibold text-center">
      O'qituchi ma'lumotlari
    </h1>
    <div class="flex gap-10 pb-8">
      <div class="max-w-[470px] flex flex-col">
        <img
          class="sticky object-cover object-top mb-4 top-10 w-100 img-fluid"
          :src="teacher?.image"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-10">
        <div class="p-16 px-12 bg-white border">
          <h1 class="text-4xl font-bold text-gray-800">
            {{ teacher?.fullname }}
          </h1>
          <p class="mt-6 text-primary-blue">{{ teacher.position }}</p>
        </div>
        <div>
          <div class="flex flex-col gap-6 p-16 bg-white border">
            <h3
              class="pb-1 m-auto text-xl font-bold border-b-2 border-primary-blue w-max"
            >
              Biografiya
            </h3>
            <div v-html="teacher.content" class="teacher"></div>
            <div class="grid justify-between grid-cols-2 mt-5">
              <div class="text-xl">
                <span class="text-primary-blue">F.I.O:</span>
                <span class="ms-2">{{ teacher.fullname }}</span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Darajasi:</span>
                <span class="ms-2">{{ teacher.academic_title }}</span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Telefon:</span>
                <span class="ms-2">{{ teacher.phone_number }}</span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Email:</span>
                <span class="ms-2">{{ teacher.email }}</span>
              </div>
            </div>
          </div>
          <div
            class="flex justify-between p-6 text-white transition-all duration-300 border-b bg-primary-blue border-x group hover:bg-white hover:text-black"
          >
            <h1 class="font-semibold">Rektorga murojat</h1>
            <ChevronRightIcon
              class="w-5 transition-transform duration-300 group-hover:translate-x-3"
            ></ChevronRightIcon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.teacher ul {
  @apply list-[square] flex flex-col gap-5 ps-5 marker:text-primary-blue indent-3;
}
.teacher p {
  @apply indent-5;
}

.teacher li {
  position: relative;
  padding-left: 3.2rem;
  line-height: 2rem;
}

.editor li:not(:last-child) {
  margin-bottom: 2.4rem;
}

.teacher li::before {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 0.7rem;
  left: 0;
  background-color: #0072bc;
  content: '';
}
</style>
