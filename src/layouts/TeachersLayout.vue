<script setup lang="ts">
import { getTeachers } from '@/composables/useTeachers'
import { ref, computed, onMounted } from 'vue'
import TeachersSidebar from '@/components/TeachersSidebar.vue'

// Teacher interface
interface Teacher {
  id: number
  name: string
}

// State
const teachers = ref<Teacher[]>([])
const total = ref(0) // Total number of teachers
const currentPage = ref(1) // Current page number
const limit = 20 // Teachers per page
const search = ref('') // Search query

// Fetch teachers for the current page
const fetchTeachers = async () => {
  try {
    const { data, total: totalCount } = await getTeachers(
      currentPage.value,
      limit
    )
    teachers.value = data // Update the teacher list
    total.value = totalCount // Update the total teacher count
  } catch (error) {
    console.error('Failed to fetch teachers:', error)
  }
}

// Filter teachers based on the search query
const filteredTeachers = computed(() => {
  if (!search.value.trim()) {
    return teachers.value // Return all teachers if there's no search query
  }
  return teachers.value.filter((teacher) =>
    teacher.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

// Calculate total pages for pagination
const totalPages = computed(() => {
  return Math.ceil(total.value / limit)
})

// Handle pagination (Previous Page)
const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value-- // Decrement the page number
    await fetchTeachers() // Fetch the previous page
  }
}

// Handle pagination (Next Page)
const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++ // Increment the page number
    await fetchTeachers() // Fetch the next page
  }
}

// Handle search input
const onSearch = async () => {
  currentPage.value = 1 // Reset to the first page when searching
  await fetchTeachers() // Fetch the teachers after search
}

// Fetch teachers on component mount
onMounted(fetchTeachers)
</script>

<template>
  <div class="flex">
    <!-- <TeachersSidebar class="w-[400px]" /> -->
    <div class="flex-1 min-h-screen bg-gray-100">
      <!-- Header -->
      <header class="top-0 py-4 text-white bg-primary-blue">
        <div class="container flex items-center justify-between mx-auto">
          <h1 class="text-2xl font-bold">O'qituvchilar ro'yxati</h1>
          <div class="flex items-center">
            <input
              v-model="search"
              type="text"
              placeholder="Qidirish..."
              class="px-4 py-2 text-gray-700 shadow-sm"
              @input="onSearch"
            />
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="container py-6 mx-auto">
        <h2 class="mb-4 text-xl font-bold">Всего: {{ total }}</h2>
        <ul class="bg-white shadow-md">
          <li
            v-for="teacher in filteredTeachers"
            :key="teacher.id"
            class="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50"
          >
            <RouterLink :to="{ name: 'teachers', params: { id: teacher.id } }">
              {{ teacher.name }}
            </RouterLink>
          </li>
        </ul>

        <!-- Pagination -->
        <div class="flex items-center justify-between mt-6">
          <!-- Previous Button -->
          <button
            class="px-4 py-2 text-white bg-primary-blue"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Orqaga
          </button>

          <!-- Current Page Info -->
          <span>Страница {{ currentPage }} из {{ totalPages }}</span>

          <!-- Next Button -->
          <button
            class="px-4 py-2 text-white bg-primary-blue"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            Oldinga
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
