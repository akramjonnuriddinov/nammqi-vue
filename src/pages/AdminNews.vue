<script setup lang="ts">
import AppEditor from '@/components/AppEditor.vue'
import { CloudArrowUpIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'
import { Article } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { postNews } from '@/composables/useNews'

const content = ref()
const news = ref<Article>({
  id: uuidv4(),
  image: '',
  date: '',
  title: '',
  short_description: '',
  content: '',
  description: '',
  category: '',
  gallery: [''],
})

const handleShortDescriptionFromChild = (shortDescription: string) => {
  content.value = shortDescription
}

const submitNews = async () => {
  console.log(news.value)
  try {
    console.log('Loading...')
    await postNews(news.value)
  } catch (error) {
    console.log('post error: ', error)
  } finally {
    console.log('done...')
  }
}
</script>

<template>
  <h2 class="text-2xl font-medium">Yangiliklar</h2>
  <div class="flex flex-col mx-3 mt-6 lg:flex-row">
    <div class="w-full m-1">
      <form @click.prevent class="w-full p-6 bg-white">
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-full">
            <label
              class="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="category_name"
              >Title</label
            >
            <input
              v-model="news.title"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:border-primary-blue"
              type="text"
              name="name"
              placeholder="Title"
              required
            />
          </div>
          <div class="w-full px-3 mb-6">
            <label
              class="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="category_name"
              >Short Description</label
            >
            <textarea
              v-model="news.short_description"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:border-primary-blue"
              name="description"
              rows="4"
              id=""
            ></textarea>
          </div>
          <div class="w-full px-3 mb-6">
            <label
              class="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase"
              htmlFor="category_name"
              >Description</label
            >
            <textarea
              v-model="news.description"
              class="block w-full px-3 py-3 font-medium leading-tight text-gray-900 bg-white border border-gray-400 rounded-md appearance-none focus:outline-none focus:border-primary-blue"
              name="description"
              rows="4"
              id=""
            ></textarea>
          </div>
          <AppEditor
            @input="handleShortDescriptionFromChild"
            :content="content"
            :edit-editor="content"
          />
          <div class="w-full px-3 my-8">
            <label
              class="flex flex-col select-none items-center justify-center w-full max-w-lg p-6 mx-auto text-center bg-white border-2 border-dashed cursor-pointer rounded-xl border-neutral-gray"
              htmlFor="dropzone-file"
            >
              <CloudArrowUpIcon class="w-10 h-10 text-neutral-gray" />
              <h2 class="mt-4 text-xl font-medium tracking-wide text-gray-700">
                Category image
              </h2>
              <p class="mt-2 tracking-wide text-gray-500">
                Upload or drag & drop your file SVG, PNG, JPG or GIF.
              </p>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                name="category_image"
                accept="image/png, image/jpeg, image/webp"
              />
            </label>
          </div>
          <div class="w-full px-3 mb-6 md:w-full">
            <button
              @click="submitNews"
              type="submit"
              class="block w-full px-3 py-3 font-bold leading-tight text-gray-100 transition-opacity duration-300 rounded-md bg-primary-blue hover:opacity-80 focus:outline-none focus:opacity-60"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
