<script setup>
import { PlusIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import WorkExperience from '@/components/profile/WorkExperience.vue'
import BaseButton from '@/components/shared/BaseButton.vue'
import EducationField from '@/components/profile/EducationField.vue'
import { postTeacher } from '@/composables/useNews'

const teacher = ref({
  fullname: '',
  position: '',
  phone_number: '',
  email: '',
  linkedin: '',
  work_experience: '',
  education: '',
  skills: [],
  about: '',
})

const newSkill = ref('')

const addSkill = () => {
  if (newSkill.value.trim() !== '') {
    teacher.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

const removeSkill = (index) => {
  teacher.value.skills.splice(index, 1)
}

const handleSubmit = async () => {
  console.log('Teacher Info:', teacher.value)
  await postTeacher(teacher.value)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="p-5 mx-auto space-y-6">
    <!-- Full Name -->
    <div>
      <label for="fullname" class="block mb-2 text-base font-bold text-black"
        >Full Name</label
      >
      <input
        v-model="teacher.fullname"
        id="fullname"
        type="text"
        placeholder="Enter full name"
        class="block form-control"
        required
      />
    </div>

    <!-- Position -->
    <div>
      <label for="position" class="block mb-2 text-base font-bold text-black"
        >Position</label
      >
      <input
        v-model="teacher.position"
        id="position"
        type="text"
        placeholder="Enter position"
        class="block form-control"
        required
      />
    </div>

    <!-- Phone Number -->
    <div>
      <label
        for="phone_number"
        class="block mb-2 text-base font-bold text-black"
        >Phone Number</label
      >
      <input
        v-model="teacher.phone_number"
        id="phone_number"
        type="tel"
        placeholder="Enter phone number"
        class="block form-control"
        required
      />
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block mb-2 text-base font-bold text-black"
        >Email</label
      >
      <input
        v-model="teacher.email"
        id="email"
        type="email"
        placeholder="Enter email"
        class="block form-control"
        required
      />
    </div>

    <!-- LinkedIn -->
    <div>
      <label for="linkedin" class="block mb-2 text-base font-bold text-black"
        >LinkedIn</label
      >
      <input
        v-model="teacher.linkedin"
        id="linkedin"
        type="url"
        placeholder="Enter LinkedIn profile URL"
        class="block form-control"
      />
    </div>

    <!-- Work Experience -->
    <div class="flex items-center justify-between gap-2 font-bold">
      <span class="block mb-2 text-base font-bold text-black">Ish joylari</span>
      <button
        class="flex items-center justify-center p-2 text-white transition-all duration-200 rounded-full bg-primary-blue hover:bg-primary-gray hover:text-primary-blue"
        type="button"
      >
        <PlusIcon class="w-7" />
      </button>
    </div>
    <WorkExperience />
    <!-- Education -->
    <EducationField />

    <!-- Skills (LinkedIn-style input) -->
    <div>
      <label class="block mb-2 text-base font-bold text-black">Skills</label>
      <div
        class="flex flex-wrap items-center gap-2 p-2 mt-1 border border-gray-300 rounded"
      >
        <span
          v-for="(skill, index) in teacher.skills"
          :key="index"
          class="flex items-center w-auto gap-2 px-2 py-1 text-sm bg-blue-100 rounded text-primary-blue"
        >
          {{ skill }}
          <button
            type="button"
            class="text-red-500 hover:text-red-700"
            @click="removeSkill(index)"
          >
            <XMarkIcon class="w-5" />
          </button>
        </span>

        <!-- Skill Input -->
        <input
          v-model="newSkill"
          type="text"
          placeholder="Add a skill"
          class="flex-grow outline-none form-control"
          @keydown.enter.prevent="addSkill"
        />
      </div>
      <p class="mt-1 text-sm text-gray-500">Press Enter to add a skill.</p>
    </div>

    <!-- About -->
    <div>
      <label for="about" class="block mb-2 text-base font-bold text-black"
        >About</label
      >
      <textarea
        v-model="teacher.about"
        id="about"
        placeholder="Tell something about yourself"
        class="outline-none form-control"
        style="height: 100px !important"
        required
      ></textarea>
    </div>

    <!-- Submit Button -->
    <div>
      <BaseButton type="submit">Submit</BaseButton>
    </div>
  </form>
</template>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  height: 3rem;
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
