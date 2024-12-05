<script lang="ts" setup>
import { ref } from 'vue'

interface Faculty {
  name: string
  subFaculties: string[]
}

const faculties = ref<Faculty[]>([
  {
    name: 'Engineering',
    subFaculties: ['Computer Science', 'Mechanical', 'Electrical'],
  },
  { name: 'Arts', subFaculties: ['History', 'Literature', 'Philosophy'] },
  { name: 'Science', subFaculties: ['Physics', 'Chemistry', 'Biology'] },
])

const selectedFaculty = ref<Faculty | null>(null)

function selectFaculty(faculty: Faculty) {
  selectedFaculty.value = faculty
}
</script>

<template>
  <div class="container p-6 mx-auto">
    <h1 class="mb-6 text-3xl font-bold">Faculties</h1>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="faculty in faculties"
        :key="faculty.name"
        class="p-4 bg-white rounded-lg shadow-lg"
      >
        <h2 class="mb-2 text-xl font-semibold">{{ faculty.name }}</h2>
        <button
          class="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          @click="selectFaculty(faculty)"
        >
          View Sub-Faculties
        </button>
      </div>
    </div>

    <div v-if="selectedFaculty" class="mt-8">
      <h2 class="text-2xl font-bold">{{ selectedFaculty.name }}</h2>
      <ul class="mt-4 space-y-2">
        <li
          v-for="subFaculty in selectedFaculty.subFaculties"
          :key="subFaculty"
          class="p-2 bg-gray-100 rounded"
        >
          {{ subFaculty }}
        </li>
      </ul>
    </div>
  </div>
</template>
