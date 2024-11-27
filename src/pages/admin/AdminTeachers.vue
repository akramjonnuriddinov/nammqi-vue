<script setup lang="ts">
import { ref } from 'vue'
import AppEditor from '@/components/shared/AppEditor.vue'
import ImageUpload from '@/components/shared/ImageUpload.vue'
import { ITeacher } from '@/types'
import { postTeacher } from '@/composables/useNews'

const editorContent = ref<string>('<p>Initial value</p>')
const uploadedImage = ref<File | null>(null)
const teacher = ref<ITeacher>({
  id: 0,
  fullname: '',
  content: '',
  image: null,
})

const handleInput = (content: string) => {
  editorContent.value = content
  teacher.value.content = content
}

const handleUpload = (newImageUrl: string) => {
  teacher.value.image = newImageUrl
}

const handleRemove = (file: File) => {
  uploadedImage.value = null
}

const postData = async () => {
  try {
    console.log('TEACHER: ', teacher.value)
    teacher.value.id++
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
