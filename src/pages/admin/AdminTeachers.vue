<script setup lang="ts">
import AppEditor from '@/components/shared/AppEditor.vue'
import { ref } from 'vue'

interface Teacher {
  id: number
  fullname: string
  content: string
}

const editorContent = ref<string>('<p>Initial value</p>')
const teacher = ref<Teacher>({
  id: 0,
  fullname: '',
  content: '',
})

const handleInput = (content: string) => {
  editorContent.value = content
  teacher.value.content = content
}

const postData = () => {
  console.log('TEACHER: ', teacher.value)
  teacher.value.id++
}
</script>

<template>
  <h2>Create Teachers</h2>
  <input v-model="teacher.fullname" type="text" />
  <AppEditor
    :value="editorContent"
    :edit-editor="editorContent"
    @input="handleInput"
  />
  <button @click="postData">Click</button>
</template>
