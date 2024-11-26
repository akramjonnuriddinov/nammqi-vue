<script setup lang="ts">
import { getTeachers } from '@/composables/useTeachers'
import { ref, computed, onMounted } from 'vue'
import TeachersSidebar from '@/components/layouts/TeachersSidebar.vue'

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
  <div class="flex min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <TeachersSidebar
      class="fixed top-0 left-0 h-full bg-white border-r border-gray-200 shadow-lg"
    />

    <!-- Main Content -->
    <div class="flex-1 ml-80">
      <!-- Header -->
      <header
        class="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm"
      >
        <h1 class="text-2xl font-semibold text-gray-800">Teachers</h1>
        <input
          v-model="search"
          type="text"
          placeholder="Search for a teacher..."
          class="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary-blue"
          @input="onSearch"
        />
      </header>

      <!-- Teachers List -->
      <main class="px-6 py-8">
        <div class="mb-6 text-lg font-semibold text-gray-600">
          Total Teachers: {{ total }}
        </div>

        <!-- Teacher Cards -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="teacher in filteredTeachers"
            :key="teacher.id"
            class="p-4 bg-white border rounded hover:shadow-sm"
          >
            <RouterLink
              :to="{ name: 'teacher-detail2', params: { id: teacher.id } }"
              class="block text-lg font-medium text-primary-black hover:opacity-80"
            >
              {{ teacher.name }}
            </RouterLink>
          </div>
        </div>

        <!-- Pagination -->
        <div class="flex items-center justify-between mt-8">
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-primary-blue hover:bg-blue-600 disabled:opacity-50"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            Previous
          </button>
          <span class="text-sm font-medium text-gray-600">
            Page {{ currentPage }} of {{ totalPages }}
          </span>
          <button
            class="px-4 py-2 text-sm font-medium text-white bg-primary-blue hover:bg-blue-600 disabled:opacity-50"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  </div>
</template>
