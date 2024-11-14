<template>
  <div class="container p-6 mx-auto">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
      <!-- Aside Section for Additional Info -->
      <aside class="p-6 bg-white border border-gray-200 rounded-lg">
        <h2 class="text-lg font-medium text-gray-800">Quick Links</h2>
        <ul class="mt-4 space-y-2">
          <li>
            <a href="#" class="text-blue-600 hover:underline"
              ><i class="mr-2 fas fa-file-alt"></i>Published Research Papers</a
            >
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline"
              ><i class="mr-2 fas fa-calendar-alt"></i>Upcoming Lectures</a
            >
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline"
              ><i class="mr-2 fas fa-comments"></i>Student Feedback</a
            >
          </li>
          <li>
            <a href="#" class="text-blue-600 hover:underline"
              ><i class="mr-2 fas fa-video"></i>Online Courses</a
            >
          </li>
        </ul>

        <div class="mt-8">
          <h2 class="text-lg font-medium text-gray-800">Recent Activity</h2>
          <ul class="mt-4 space-y-4">
            <li class="flex items-start">
              <i class="mt-1 mr-3 text-blue-500 fas fa-chalkboard-teacher"></i>
              <p class="text-gray-600">
                Gave a lecture on
                <span class="font-semibold">Advanced Algorithms</span>.
              </p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 mr-3 text-blue-500 fas fa-book"></i>
              <p class="text-gray-600">
                Published a paper in
                <span class="font-semibold">Machine Learning Journal</span>.
              </p>
            </li>
            <li class="flex items-start">
              <i class="mt-1 mr-3 text-blue-500 fas fa-globe"></i>
              <p class="text-gray-600">
                Attended the
                <span class="font-semibold">International Conference on AI</span
                >.
              </p>
            </li>
          </ul>
        </div>
      </aside>

      <!-- Main Profile Content -->
      <div class="md:col-span-2">
        <!-- Cover Photo and Profile Picture -->
        <div
          class="relative h-48 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
        >
          <button
            class="absolute px-4 py-2 text-blue-600 bg-white border border-gray-200 rounded-md top-4 right-4"
          >
            <i class="mr-1 fas fa-edit"></i>Edit Profile
          </button>
          <div class="absolute transform -translate-x-1/2 left-1/2 -bottom-12">
            <img
              class="w-24 h-24 border-4 border-white rounded-full"
              src="https://tailwise.vercel.app/assets/user1-50x50-nO_v65RH.jpg"
              alt="Teacher Profile Picture"
            />
          </div>
        </div>

        <!-- Profile Info -->
        <div class="p-6 mt-16 bg-white border border-gray-200 rounded-lg">
          <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800">
              {{ teacher.fullName }}
            </h1>
            <p class="text-gray-600">{{ teacher.position }}</p>
          </div>

          <!-- Bio Section -->
          <div class="mt-6">
            <h2 class="text-lg font-medium text-gray-800">Bio</h2>
            <p class="mt-2 text-gray-600">{{ teacher.bio }}</p>
          </div>

          <!-- Contact Info Section -->
          <div class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
            <div>
              <h3 class="font-medium text-gray-800">
                <i class="mr-2 fas fa-envelope"></i>Email
              </h3>
              <p class="text-gray-600">{{ teacher.email }}</p>
            </div>
            <div>
              <h3 class="font-medium text-gray-800">
                <i class="mr-2 fas fa-phone"></i>Phone
              </h3>
              <p class="text-gray-600">{{ teacher.phone }}</p>
            </div>
            <div>
              <h3 class="font-medium text-gray-800">
                <i class="mr-2 fas fa-map-marker-alt"></i>Location
              </h3>
              <p class="text-gray-600">{{ teacher.location }}</p>
            </div>
            <div>
              <h3 class="font-medium text-gray-800">
                <i class="mr-2 fas fa-globe"></i>Website
              </h3>
              <a :href="teacher.website" class="text-blue-600 underline">{{
                teacher.website
              }}</a>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="flex justify-center mt-6 space-x-4">
            <a
              v-for="(link, index) in teacher.socialMedia"
              :key="index"
              :href="link.url"
              class="text-gray-600 hover:text-blue-600"
            >
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'

interface SocialMediaLink {
  icon: string
  url: string
}

interface Teacher {
  fullName: string
  position: string
  profilePicture: string
  bio: string
  email: string
  phone: string
  location: string
  website: string
  socialMedia: SocialMediaLink[]
}

const teacher = ref<Teacher>({
  fullName: 'Meryl Pitt',
  position: 'Senior Lecturer, Computer Science',
  profilePicture: 'path/to/profile-picture.jpg', // Replace with actual path or URL
  bio: 'Experienced educator in computer science with a focus on software development, data structures, and algorithms.',
  email: 'meryl.pitt@example.com',
  phone: '+1 (123) 456-7890',
  location: 'New York, NY',
  website: 'https://example.com',
  socialMedia: [
    { icon: 'fab fa-twitter', url: 'https://twitter.com/username' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/username' },
    { icon: 'fab fa-github', url: 'https://github.com/username' },
  ],
})
</script>

<style scoped></style>
