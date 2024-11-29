<script setup lang="ts">
import { getTeachers } from '@/composables/useTeachers'
import { ref, computed, onMounted } from 'vue'
import TeachersSidebar from '@/components/layouts/TeachersSidebar.vue'
import { ITeacher } from '@/types'
import MainHeader from '@/components/layouts/MainHeader.vue'
import ThreeDCard from '@/components/shared/ThreeDCard.vue'
// State
const teachers = ref<ITeacher[]>([])
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
    teacher.fullname.toLowerCase().includes(search.value.toLowerCase())
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
  <MainHeader />
  <section class="py-[100px]">
    <div class="container px-5 mx-auto">
      <h1 class="text-[52px] leading-[64px] mb-16 font-semibold">
        Bizning ustozlar bilan tanishing
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px]"
      >
        <ThreeDCard v-for="i in 12" :key="i"></ThreeDCard>
      </div>
    </div>
  </section>
</template>
