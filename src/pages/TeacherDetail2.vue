<script setup lang="ts">
import { ref } from 'vue'

// Teacher interface
interface Teacher {
  id: number
  name: string
  email?: string
  phoneNumber?: string
  department?: string
  designation?: string
  photoUrl?: string
  subjects?: string[]
  bio?: string
  experienceYears?: number
  qualifications?: string[]
  isActive?: boolean
  officeHours?: string
  courses?: {
    id: number
    name: string
    studentsCount: number
  }[]
  socialLinks?: {
    linkedin?: string
    twitter?: string
    personalWebsite?: string
  }
  hireDate?: string
}

// Mock teacher data
const teacher = ref<Teacher>({
  id: 1,
  name: 'Dr. Sarah Johnson',
  email: 'sarah.johnson@university.edu',
  phoneNumber: '+123 456 7890',
  department: 'Computer Science',
  designation: 'Professor',
  photoUrl: 'https://via.placeholder.com/150',
  bio: 'Passionate about teaching and research in computer science. Focused on AI and algorithms.',
  experienceYears: 10,
  qualifications: ['PhD in Computer Science', 'MSc in Computer Science'],
  isActive: true,
  officeHours: 'Mon, Wed, Fri: 2:00 PM - 4:00 PM',
  courses: [
    { id: 101, name: 'Introduction to Algorithms', studentsCount: 120 },
    { id: 102, name: 'Machine Learning Basics', studentsCount: 80 },
  ],
  socialLinks: {
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
    personalWebsite: 'https://sarahjohnson.com',
  },
  hireDate: '2015-08-01',
})
</script>

<template>
  <div v-if="teacher.socialLinks" class="container px-4 py-10 mx-auto lg:px-8">
    <!-- Header Section -->
    <div class="flex items-center mb-10">
      <img
        :src="teacher.photoUrl"
        alt="Teacher Profile Picture"
        class="object-cover w-32 h-32 mr-6 rounded-full shadow-lg"
      />
      <div>
        <h1 class="text-3xl font-bold">{{ teacher.name }}</h1>
        <p class="text-lg text-gray-600">
          {{ teacher.designation }} - {{ teacher.department }}
        </p>
        <p class="mt-2 text-gray-800">{{ teacher.bio }}</p>
      </div>
    </div>

    <!-- Personal Information Table -->
    <section class="mb-10">
      <h2 class="mb-4 text-2xl font-semibold">Personal Information</h2>
      <table
        class="w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-md"
      >
        <tbody>
          <tr class="border-b border-gray-300">
            <th class="px-4 py-2 text-left bg-gray-100">Email</th>
            <td class="px-4 py-2">{{ teacher.email }}</td>
          </tr>
          <tr class="border-b border-gray-300">
            <th class="px-4 py-2 text-left bg-gray-100">Phone</th>
            <td class="px-4 py-2">{{ teacher.phoneNumber }}</td>
          </tr>
          <tr class="border-b border-gray-300">
            <th class="px-4 py-2 text-left bg-gray-100">Office Hours</th>
            <td class="px-4 py-2">{{ teacher.officeHours }}</td>
          </tr>
          <tr class="border-b border-gray-300">
            <th class="px-4 py-2 text-left bg-gray-100">Experience</th>
            <td class="px-4 py-2">{{ teacher.experienceYears }} years</td>
          </tr>
          <tr>
            <th class="px-4 py-2 text-left bg-gray-100">Hire Date</th>
            <td class="px-4 py-2">{{ teacher.hireDate }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Qualifications Table -->
    <section class="mb-10">
      <h2 class="mb-4 text-2xl font-semibold">Qualifications</h2>
      <table
        class="w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-md"
      >
        <tbody>
          <tr
            v-for="(qualification, index) in teacher.qualifications"
            :key="index"
            class="border-b border-gray-300"
          >
            <td class="px-4 py-2">{{ qualification }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Courses Table -->
    <section class="mb-10">
      <h2 class="mb-4 text-2xl font-semibold">Courses</h2>
      <table
        class="w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-md"
      >
        <thead class="bg-gray-100">
          <tr>
            <th class="px-4 py-2 text-left">Course Name</th>
            <th class="px-4 py-2 text-right">Students Enrolled</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="course in teacher.courses"
            :key="course.id"
            class="border-b border-gray-300"
          >
            <td class="px-4 py-2">{{ course.name }}</td>
            <td class="px-4 py-2 text-right">{{ course.studentsCount }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Social Links Table -->
    <section>
      <h2 class="mb-4 text-2xl font-semibold">Social Links</h2>
      <table
        class="w-full bg-white border border-collapse border-gray-300 rounded-lg shadow-md"
      >
        <tbody>
          <tr
            v-if="teacher.socialLinks.linkedin"
            class="border-b border-gray-300"
          >
            <th class="px-4 py-2 text-left bg-gray-100">LinkedIn</th>
            <td class="px-4 py-2">
              <a
                :href="teacher.socialLinks.linkedin"
                target="_blank"
                class="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </td>
          </tr>
          <tr
            v-if="teacher.socialLinks.twitter"
            class="border-b border-gray-300"
          >
            <th class="px-4 py-2 text-left bg-gray-100">Twitter</th>
            <td class="px-4 py-2">
              <a
                :href="teacher.socialLinks.twitter"
                target="_blank"
                class="text-blue-400 hover:underline"
              >
                View Profile
              </a>
            </td>
          </tr>
          <tr v-if="teacher.socialLinks.personalWebsite">
            <th class="px-4 py-2 text-left bg-gray-100">Personal Website</th>
            <td class="px-4 py-2">
              <a
                :href="teacher.socialLinks.personalWebsite"
                target="_blank"
                class="text-blue-800 hover:underline"
              >
                Visit Website
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
