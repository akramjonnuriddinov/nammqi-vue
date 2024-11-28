<script setup lang="ts">
import AppEditor from '@/components/shared/AppEditor.vue'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { postNews } from '@/composables/useNews'
import { Article, Category, GalleryItem } from '@/types'

const news = ref<Article>({
  id: '',
  title: '',
  description: '',
  image: '',
  date: '',
  category: Category.Tech,
  content: '',
  gallery: [],
  tags: [],
  author: 'Admin',
})

const content = ref<string>('') // Editor content
const gallery = ref<GalleryItem[]>([])

const categories = ref<Category[]>([
  Category.Tech,
  Category.Sports,
  Category.Health,
])

const updateContent = (htmlContent: string) => {
  news.value.content = htmlContent
}

const handleMainImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const imageUrl = URL.createObjectURL(file)
    news.value.image = imageUrl
    console.log('Main image uploaded:', imageUrl)
  }
}

const handleGalleryImageUpload = (event: Event) => {
  const files = (event.target as HTMLInputElement).files
  if (files) {
    for (const file of Array.from(files)) {
      const imageUrl = URL.createObjectURL(file)
      gallery.value.push({ image: imageUrl, caption: '' })
    }
    news.value.gallery = gallery.value
    console.log('Gallery updated:', gallery.value)
  }
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer?.files
  if (files) {
    for (const file of Array.from(files)) {
      const imageUrl = URL.createObjectURL(file) // Replace with your actual upload logic
      gallery.value.push({ image: imageUrl, caption: '' })
    }
    news.value.gallery = gallery.value
    console.log('Gallery updated with drag-and-drop:', gallery.value)
  }
}

const removeImage = (index: number) => {
  gallery.value.splice(index, 1)
  news.value.gallery = gallery.value
  console.log('Image removed:', index)
}

const validateForm = () => {
  const { title, description, content, image } = news.value
  if (!title || !description || !content || !image) {
    alert('Please fill out all required fields and upload a main image.')
    return false
  }
  return true
}

const submitNews = async () => {
  if (!validateForm()) return

  news.value.date = new Date().toISOString()

  try {
    console.log('Submitting news:', news.value)
    news.value.id = uuidv4()
    await postNews(news.value)
    alert('News submitted successfully!')
  } catch (error) {
    console.error('Error posting news:', error)
  }
}
</script>

<template>
  <h2 class="text-2xl font-medium">Create News</h2>
  <form @submit.prevent="submitNews" class="w-full p-6 bg-white">
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Title</label
      >
      <input
        v-model="news.title"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="News Title"
        required
      />
    </div>

    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Category</label
      >
      <select
        v-model="news.category"
        class="block w-full px-3 py-2 border-2 rounded-md border-primary-blue"
        required
      >
        <option disabled value="">Select a category</option>
        <option
          v-for="category in categories"
          :key="category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>

    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Description</label
      >
      <textarea
        v-model="news.description"
        class="block w-full px-3 py-2 border-2 rounded-md outline-primary-blue"
        rows="4"
        placeholder="Short Description"
        required
      ></textarea>
    </div>

    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Content</label
      >
      <AppEditor
        :content="content"
        :edit-editor="content"
        @input="updateContent"
      />
    </div>

    <!-- Main Image Upload -->
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Main Image</label
      >
      <input
        type="file"
        accept="image/*"
        @change="handleMainImageUpload"
        class="block w-full text-sm text-gray-500"
      />
    </div>

    <!-- Gallery Images with Drag-and-Drop -->
    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Gallery Images</label
      >
      <div
        class="p-4 border-2 border-gray-400 border-dashed rounded-md"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <p class="text-center text-gray-500">Drag & Drop your images here</p>
        <input
          type="file"
          multiple
          accept="image/*"
          @change="handleGalleryImageUpload"
          class="block w-full mt-4 text-sm text-gray-500"
        />
      </div>
      <div class="flex flex-wrap gap-4 mt-4">
        <div v-for="(item, index) in gallery" :key="index" class="relative">
          <img
            :src="item.image"
            alt="Gallery"
            class="object-cover w-24 h-24 rounded-md"
          />
          <button
            @click="removeImage(index)"
            type="button"
            class="absolute top-0 right-0 flex items-center justify-center w-6 h-6 p-1 text-xs text-white bg-red-500 rounded-full"
          >
            X
          </button>
          <input
            v-model="item.caption"
            placeholder="Caption"
            class="mt-2 text-sm border-2 rounded-md"
          />
        </div>
      </div>
    </div>

    <div class="mb-6">
      <label class="block mb-2 text-sm font-bold text-primary-black"
        >Tags</label
      >
      <input
        v-model="news.tags"
        class="block w-full px-3 py-2 border-2 rounded-md"
        type="text"
        placeholder="Tags (comma-separated)"
      />
    </div>

    <button
      type="submit"
      class="px-4 py-2 text-white rounded-md bg-primary-blue hover:opacity-80"
    >
      Submit
    </button>
  </form>
</template>
