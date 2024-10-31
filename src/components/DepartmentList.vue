<template>
  <section class="py-10 bg-blue-50">
    <div class="container flex flex-col md:flex-row">
      <!-- Sidebar for Faculties -->
      <aside class="w-full p-4 bg-white border md:w-1/3">
        <h2 class="mb-4 text-3xl font-semibold text-gray-800">Fakultetlar</h2>
        <ul data-aos="fade-up">
          <li
            v-for="(faculty, index) in faculties"
            :key="faculty.name"
            :class="[
              'flex items-center p-4  cursor-pointer mb-2 font-medium transition duration-300 ease-in-out',
              selectedFacultyIndex === index
                ? 'bg-primary-blue text-white shadow-md'
                : 'bg-[#cceeff80] hover:bg-[#cceeffcc]',
            ]"
            @click="selectFaculty(index)"
          >
            <img :src="faculty.icon" alt="icon" class="w-12 h-12 mr-3" />
            <span class="font-medium">{{ faculty.name }}</span>
          </li>
        </ul>
      </aside>

      <!-- Main Content for Departments -->
      <section class="w-full p-4 md:w-2/3">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-4xl font-semibold text-gray-800">Kafedralar</h2>
          <button class="font-bold text-primary-blue hover:opacity-80">
            Barchasini ko'rish
          </button>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="department in selectedFaculty.departments"
            :key="department.name"
            class="overflow-hidden transition duration-300 ease-in-out bg-white border border-gray-200"
          >
            <img
              :src="department.image"
              alt="department image"
              class="object-cover w-full h-32 mb-3"
            />
            <h3
              class="p-4 font-semibold text-center text-gray-700 truncate-lines"
            >
              {{ department.name }}
            </h3>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Define faculties and departments data
const faculties = ref([
  {
    name: 'Iqtisodiyot va Boshqaruv fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg', // Replace with actual icon path
    departments: [
      {
        name: "Temir yo'l transporti muhandislik fakulteti",
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Tabiiy fanlar',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Energetika va Mehnat muhozasi fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-58.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image: 'https://my.nammqi.uz/storage/galleries/2023-03-09-105525.jpg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Mashinasozlik fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-37.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Transport fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-52.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Muhandislik kommunikatsiyalari fakulteti',
    icon: 'https://my.nammqi.uz/storage/general/2023-03-29-165018.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Sanoatni Axborotlashtirish fakulteti',
    icon: 'https://my.nammqi.uz/storage/img-20231226-151252-748.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
  {
    name: 'Qurilish fakulteti',
    icon: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg',
    departments: [
      {
        name: 'Mexanika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Fizika',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
      {
        name: 'Materialshunoslik',
        image:
          'https://tstu.uz/api/file-uploads/attached/images/6ea2caf2-333b-449d-9af2-a1c5f56b3007.jpeg',
      },
    ],
  },
])

// Track the selected faculty
const selectedFacultyIndex = ref(0)
const selectedFaculty = computed(
  () => faculties.value[selectedFacultyIndex.value]
)

// Function to update selected faculty
function selectFaculty(index: any) {
  selectedFacultyIndex.value = index
}
</script>

<style scoped>
.truncate-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Show only 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* Approximate height for 3 lines */
}
</style>
