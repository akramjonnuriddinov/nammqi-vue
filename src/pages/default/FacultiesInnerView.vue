<template>
  <div class="bg-[#f6f6f6]">
    <!-- Overview Section -->
    <section class="container px-6 py-12 mx-auto">
      <span class="flex w-full mb-2 text-sm text-primary-blue"
        >Namangan Muhandislik Qurilish Instituti</span
      >
      <h2 class="mb-10 text-4xl font-bold">Computer Science</h2>
      <p class="mb-6 text-gray-700">
        Earn a bachelor's in computer science degree from Acadia University and
        develop the software engineering, project management, and programming
        skills to impact how technology will change and transform our world.
      </p>
      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h3 class="mb-4 text-xl font-semibold">Overview</h3>
          <p class="mb-4 text-gray-700">
            How we do business, how we communicate, and what we do for
            entertainment are all being transformed by computer scientists and
            software developers.
          </p>
          <ul class="space-y-2">
            <li class="flex items-center space-x-2">
              <span class="text-primary-blue">&#9679;</span>
              <span>Programming</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-primary-blue">&#9679;</span>
              <span>Big Data and Data Science</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-primary-blue">&#9679;</span>
              <span>Artificial Intelligence</span>
            </li>
            <li class="flex items-center space-x-2">
              <span class="text-primary-blue">&#9679;</span>
              <span>Software Development</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Core Curriculum Section -->
    <section class="py-12">
      <div class="container px-6 mx-auto">
        <h2 class="mb-6 text-2xl font-bold">Core Curriculum</h2>
        <div class="space-y-6">
          <div v-for="i in 4">
            <h3 class="mb-2 font-semibold">Semester {{ i }}</h3>
            <table class="w-full border border-collapse border-gray-300">
              <thead>
                <tr class="bg-gray-200">
                  <th class="px-4 py-2 border border-gray-300">Course ID</th>
                  <th class="px-4 py-2 border border-gray-300">Course Title</th>
                  <th class="px-4 py-2 border border-gray-300">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-2 border border-gray-300">ENG-101</td>
                  <td class="px-4 py-2 border border-gray-300">
                    Basic Functional English
                  </td>
                  <td class="px-4 py-2 border border-gray-300">3</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-gray-300">MAT-101</td>
                  <td class="px-4 py-2 border border-gray-300">
                    Mathematics 1
                  </td>
                  <td class="px-4 py-2 border border-gray-300">3</td>
                </tr>
                <tr>
                  <td class="px-4 py-2 border border-gray-300">CSE-115</td>
                  <td class="px-4 py-2 border border-gray-300">
                    Programming and Problem Solving
                  </td>
                  <td class="px-4 py-2 border border-gray-300">1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- Repeat for other semesters -->
        </div>
      </div>
    </section>
  </div>
</template>
