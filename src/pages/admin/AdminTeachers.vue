<script setup lang="ts">
import { ref } from 'vue'
import AppEditor from '@/components/shared/AppEditor.vue'
import ImageUpload from '@/components/shared/ImageUpload.vue'
import { ITeacher } from '@/types'
import { postTeacher } from '@/composables/useNews'
import { v4 as uuidv4 } from 'uuid'

const editorContent = ref<string>('')
const uploadedImage = ref<File | null>(null)
const teacher = ref<ITeacher>({
  id: '',
  fullname: '',
  content: '',
  image: '',
  position: '',
  phone_number: '',
  academic_title: '',
  email: '',
})

const handleInput = (content: string) => {
  editorContent.value = content
  teacher.value.content = content
}

const handleUpload = (newImageUrl: string) => {
  teacher.value.image = newImageUrl
}

const handleRemove = () => {
  uploadedImage.value = null
}

const postData = async () => {
  try {
    teacher.value.id = uuidv4()
    console.log('TEACHER: ', teacher.value)
    await postTeacher(teacher.value)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <h2 class="mb-6 text-2xl font-medium">O'qituvchi ma'lumotlari</h2>
  <div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >O'qituvchining to'liq ism-sharifi</label
      >
      <input
        v-model="teacher.fullname"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Ism-familiya"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Telefon raqami</label
      >
      <input
        v-model="teacher.phone_number"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Telefon raqami"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Email</label
      >
      <input
        v-model="teacher.email"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Email"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Lavozimi</label
      >
      <input
        v-model="teacher.position"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Lavozimi"
        required
      />
    </div>
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Ilmiy darajasi</label
      >
      <input
        v-model="teacher.academic_title"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Ilmiy darajasi"
        required
      />
    </div>
    <div class="mb-6">
      <span class="block mb-2 text-sm font-bold text-primary-black"
        >O'qituvchining rasmi</span
      >
      <ImageUpload @upload="handleUpload" @remove="handleRemove" />
    </div>

    <AppEditor
      :value="editorContent"
      :edit-editor="editorContent"
      @input="handleInput"
    />
    <button
      @click="postData"
      class="px-4 py-2 mt-6 text-white rounded-md bg-primary-blue hover:opacity-80"
    >
      Submit
    </button>
  </div>
</template>
