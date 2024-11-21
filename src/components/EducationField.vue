<template>
  <div>
    <label class="block mb-2 text-base font-bold text-black">Education</label>

    <!-- Dynamic Education List -->
    <div class="space-y-4">
      <div
        v-for="(education, index) in teacher.education"
        :key="index"
        class="p-4 space-y-4 border rounded"
      >
        <!-- Institution Name -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Institution Name</label
          >
          <input
            v-model="education.institution"
            type="text"
            placeholder="Enter institution name"
            class="form-control"
            required
          />
        </div>

        <!-- Degree/Program -->
        <div>
          <label class="block mb-2 text-base font-bold text-black"
            >Degree/Program</label
          >
          <input
            v-model="education.degree"
            type="text"
            placeholder="Enter degree/program"
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
            v-model="education.duration"
            type="text"
            placeholder="Enter duration (e.g., 2015 - 2019)"
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
            v-model="education.description"
            placeholder="Provide details about your education (optional)"
            class="outline-none form-control"
            style="height: 100px !important"
          ></textarea>
        </div>

        <!-- Remove Education Button -->
        <button
          type="button"
          @click="removeEducation(index)"
          class="text-sm text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      </div>
    </div>

    <!-- Add New Education Button -->
    <BaseButton class="my-4" type="button" @click="addEducation">
      Add Education
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from './atoms/BaseButton.vue'

const teacher = ref({
  education: [],
})

const addEducation = () => {
  teacher.value.education.push({
    institution: '',
    degree: '',
    duration: '',
    description: '',
  })
}

const removeEducation = (index) => {
  teacher.value.education.splice(index, 1)
}
</script>

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
