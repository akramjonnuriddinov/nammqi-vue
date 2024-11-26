<script setup lang="ts">
import { ref } from 'vue'

interface Faculty {
  name: string
  count: number
}

const faculties: Faculty[] = [
  { name: 'Computer Science', count: 20 },
  { name: 'Mathematics', count: 15 },
  { name: 'Physics', count: 10 },
]

const showFilters = ref(true)
const selectedFaculty = ref<string | null>(null)
const searchQuery = ref('')
</script>

<template>
  <aside class="w-64 h-screen p-4 bg-gray-100 border-r border-primary-gray">
    <!-- Search -->
    <div class="mb-6">
      <h2 class="mb-2 text-lg font-bold">Search</h2>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name"
        class="w-full px-4 py-2 border border-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue"
      />
    </div>

    <!-- Filters -->
    <div class="mb-6">
      <h2
        class="flex items-center justify-between mb-2 text-lg font-bold cursor-pointer"
        @click="showFilters = !showFilters"
      >
        Filters
        <span class="text-sm text-gray-500">
          {{ showFilters ? 'Hide' : 'Show' }}
        </span>
      </h2>
      <div v-if="showFilters" class="space-y-4">
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700"
            >Faculty</label
          >
          <select
            v-model="selectedFaculty"
            class="w-full px-4 py-2 border border-primary-gray focus:outline-none focus:ring-2 focus:ring-primary-blue"
          >
            <option value="" disabled selected>-- Select Faculty --</option>
            <option
              v-for="faculty in faculties"
              :key="faculty.name"
              :value="faculty.name"
            >
              {{ faculty.name }} ({{ faculty.count }})
            </option>
          </select>
        </div>
      </div>
    </div>

    <!-- Quick Links -->
    <div class="mb-6">
      <h2 class="mb-2 text-lg font-bold">Quick Links</h2>
      <ul class="space-y-2">
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-center text-white transition bg-primary-blue hover:bg-blue-600"
          >
            Add New Teacher
          </a>
        </li>
        <li>
          <a href="#" class="block text-primary-blue hover:underline">
            Top-Rated Teachers
          </a>
        </li>
        <li>
          <a href="#" class="block text-primary-blue hover:underline">
            Recently Updated Profiles
          </a>
        </li>
      </ul>
    </div>

    <!-- Statistics -->
    <div>
      <h2 class="mb-2 text-lg font-bold">Statistics</h2>
      <ul class="space-y-2">
        <li>
          Total Teachers:
          <span class="font-semibold">{{
            faculties.reduce((sum, f) => sum + f.count, 0)
          }}</span>
        </li>
        <li>
          Departments: <span class="font-semibold">{{ faculties.length }}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
/* Add any custom styles here if needed */
</style>
