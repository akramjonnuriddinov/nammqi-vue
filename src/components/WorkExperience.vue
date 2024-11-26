<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const teacher = ref({
  work_experience: [],
})

const addExperience = () => {
  teacher.value.work_experience.push({
    company: '',
    logo: null,
    role: '',
    duration: '',
    description: '',
  })
}

const removeExperience = (index) => {
  teacher.value.work_experience.splice(index, 1)
}

const uploadLogo = (event, index) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      teacher.value.work_experience[index].logo = e.target.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<template>
  <div>
    <label class="block mb-2 text-base font-bold text-black"
      >Work Experience</label
    >

    <!-- Dynamic Work Experience List -->
    <div class="space-y-4">
      <div
        v-for="(experience, index) in teacher.work_experience"
        :key="index"
        class="p-4 space-y-4 border rounded"
      >
        <!-- Company Name -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Company Name</label
          >
          <input
            v-model="experience.company"
            type="text"
            placeholder="Enter company name"
            class="form-control"
            required
          />
        </div>

        <!-- Company Logo -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Company Logo</label
          >
          <div class="flex items-center gap-4 mt-1">
            <div
              class="flex items-center justify-center w-12 h-12 text-lg font-bold text-gray-600 bg-gray-100 border border-gray-300"
            >
              <!-- Show Logo or Default Letter -->
              <img
                v-if="experience.logo"
                :src="experience.logo"
                alt="Logo"
                class="object-cover w-full h-full"
              />
              <span v-else>
                {{
                  experience.company ? experience.company[0].toUpperCase() : '?'
                }}
              </span>
            </div>
            <input
              type="file"
              accept="image/*"
              @change="uploadLogo($event, index)"
              class="form-control"
            />
          </div>
        </div>

        <!-- Role -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Role/Position</label
          >
          <input
            v-model="experience.role"
            type="text"
            placeholder="Enter role/position"
            class="form-control"
            required
          />
        </div>

        <!-- Duration -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Duration</label
          >
          <input
            v-model="experience.duration"
            type="text"
            placeholder="Enter duration (e.g., Jan 2020 - Dec 2022)"
            class="form-control"
            required
          />
        </div>

        <!-- Description -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Description</label
          >
          <textarea
            v-model="experience.description"
            placeholder="Describe your responsibilities and achievements"
            class="outline-none form-control"
            style="height: 100px !important"
            required
          ></textarea>
        </div>

        <!-- Remove Experience Button -->
        <button
          type="button"
          @click="removeExperience(index)"
          class="text-sm text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- Add New Experience Button -->
    <BaseButton class="my-4" type="button" @click="addExperience">
      Add Work Experience
    </BaseButton>
  </div>
</template>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.75rem 0.9375rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.88;
  color: #6b6e6f;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 0.3125rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
