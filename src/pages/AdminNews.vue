<script setup lang="ts">
import AppEditor from '@/components/AppEditor.vue'
import { ref } from 'vue'

const content = ref()

const handleShortDescriptionFromChild = (shortDescription: string) => {
  content.value = shortDescription
}

const submitNews = () => {
  console.log(content.value)
}
</script>

<template>
  <h2 class="font-medium text-2xl">Yangiliklar</h2>
  <div class="flex flex-col mx-3 mt-6 lg:flex-row">
    <div class="w-full m-1">
      <form @click.prevent="submitNews" class="w-full bg-white p-6">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="category_name"
              >Title</label
            >
            <input
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-md py-3 px-3 leading-tight focus:outline-none focus:border-primary-blue"
              type="text"
              name="name"
              placeholder="Title"
              required
            />
          </div>
          <div class="w-full px-3 mb-6">
            <label
              class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="category_name"
              >Short Description</label
            >
            <textarea
              rows="4"
              class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-md py-3 px-3 leading-tight focus:outline-none focus:border-primary-blue"
              type="text"
              name="description"
              required
            >
            </textarea>
          </div>
          <AppEditor
            @input="handleShortDescriptionFromChild"
            :content="content"
            :edit-editor="content"
          />
          <div class="w-full px-3 mb-8">
            <label
              class="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center"
              htmlFor="dropzone-file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-green-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>

              <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                Category image
              </h2>

              <p class="mt-2 text-gray-500 tracking-wide">
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
          <div class="w-full md:w-full px-3 mb-6">
            <button
              class="appearance-none block w-full bg-primary-blue text-gray-100 font-bold border border-gray-200 rounded-md py-3 px-3 leading-tight hover:bg-primary-black focus:outline-none focus:bg-white focus:border-gray-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
