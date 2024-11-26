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
  <aside
    class="h-screen p-6 border-r border-gray-200 shadow-md w-80 bg-gray-50"
  >
    <!-- Search -->
    <div class="mb-8">
      <h2 class="mb-3 text-xl font-semibold text-gray-800">Search</h2>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name"
        class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
      />
    </div>

    <!-- Filters -->
    <div class="mb-8">
      <h2
        class="flex items-center justify-between mb-3 text-xl font-semibold text-gray-800 cursor-pointer"
        @click="showFilters = !showFilters"
      >
        Filters
        <span class="text-sm text-gray-500">
          {{ showFilters ? 'Hide' : 'Show' }}
        </span>
      </h2>
      <div v-if="showFilters" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700">Faculty</label>
          <select
            v-model="selectedFaculty"
            class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary-blue"
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
    <div class="mb-8">
      <h2 class="mb-3 text-xl font-semibold text-gray-800">Quick Links</h2>
      <ul class="space-y-4">
        <li>
          <a
            href="#"
            class="block px-4 py-3 text-center text-white transition-colors duration-200 rounded bg-primary-blue hover:bg-blue-600"
          >
            Add New Teacher
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block text-lg font-medium transition-all duration-150 text-primary-blue hover:underline"
          >
            Top-Rated Teachers
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block text-lg font-medium transition-all duration-150 text-primary-blue hover:underline"
          >
            Recently Updated Profiles
          </a>
        </li>
      </ul>
    </div>

    <!-- Statistics -->
    <div>
      <h2 class="mb-3 text-xl font-semibold text-gray-800">Statistics</h2>
      <ul class="space-y-4 text-lg font-medium">
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
