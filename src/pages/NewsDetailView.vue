<script setup lang="ts">
import NewsDetailSlider from '@/components/NewsDetailSlider.vue'
import { getNewsById } from '@/composables/useNews'
import { ref, onMounted } from 'vue'
import { Article } from '@/types'
import { useRoute } from 'vue-router'
import { formatUzbekDate } from '@/utils/parseDateToYMD'

const route = useRoute()
const article = ref<Article | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    article.value = await getNewsById(route.params.id as string)
    loading.value = false
  } catch (err) {
    console.log(err, 'custom error')
  }
})
</script>

<template>
  <section v-if="loading" class="bg-primary-gray animate-pulse">
    <div class="container flex flex-col py-10 gap-14">
      <!-- Header Skeleton -->
      <div
        class="flex flex-col gap-10 p-4 bg-primary-blue sm:p-7 md:p-10 md:flex-row"
      >
        <div>
          <div class="w-20 h-4 mb-2 bg-gray-400 rounded"></div>
          <div class="flex items-center gap-2">
            <span class="w-10 h-10 bg-gray-400 rounded"></span>
            <span class="w-16 h-6 bg-gray-400 rounded"></span>
          </div>
        </div>
        <div class="w-full h-10 bg-gray-400 rounded sm:h-14 lg:h-16"></div>
      </div>

      <!-- Content Skeleton -->
      <div class="flex flex-col gap-6 p-4 bg-white sm:p-7 md:p-10">
        <!-- Date Skeleton -->
        <div class="flex items-center gap-2">
          <div class="w-5 h-5 bg-gray-400 rounded"></div>
          <p class="h-4 bg-gray-400 rounded w-36"></p>
        </div>
        <!-- Title Skeleton -->
        <div class="w-2/3 h-6 bg-gray-400 rounded"></div>
        <!-- Paragraph Skeletons -->
        <div class="flex flex-col gap-3">
          <div class="w-full h-4 bg-gray-400 rounded"></div>
          <div class="w-5/6 h-4 bg-gray-400 rounded"></div>
          <div class="w-4/5 h-4 bg-gray-400 rounded"></div>
        </div>
        <!-- Image Skeleton -->
        <div class="h-[50vh] w-full bg-gray-400 rounded"></div>
        <!-- Additional Paragraph Skeletons -->
        <div class="flex flex-col gap-3">
          <div class="w-full h-4 bg-gray-400 rounded"></div>
          <div class="w-5/6 h-4 bg-gray-400 rounded"></div>
          <div class="w-4/5 h-4 bg-gray-400 rounded"></div>
        </div>
        <!-- Slider Skeleton -->
        <div class="w-full h-32 bg-gray-400 rounded"></div>
      </div>
    </div>
  </section>
  <section v-else-if="article && !loading" class="bg-primary-gray">
    <div class="container flex flex-col py-10 gap-14">
      <div
        class="flex flex-col gap-10 p-4 text-white bg-primary-blue sm:p-7 md:p-10 md:flex-row"
      >
        <div>
          <div class="">Dushanba</div>
          <div class="flex items-center gap-2">
            <span class="text-4xl font-bold">18</span>
            <span class="text-xs font-bold uppercase">Noyabr</span>
          </div>
        </div>
        <div
          class="text-3xl leading-[40px] sm:leading-[50px] sm:text-4xl lg:text-5xl lg:leading-[60px] font-bold"
        >
          {{ article.title }}
        </div>
      </div>
      <div class="flex flex-col gap-6 p-4 bg-white sm:p-7 md:p-10">
        <div class="flex items-start gap-1 fill-primary-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
            ></path>
          </svg>
          <p>{{ formatUzbekDate(article.date) }}</p>
        </div>
        <h4 class="font-bold">
          {{ article.title }}
        </h4>
        <!-- editor -->
        <div class="editor" v-html="article.content"></div>
        <div>
          <NewsDetailSlider :gallery="article.gallery || []" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.editor img {
  @apply w-full max-h-[90vh] object-cover object-center;
}

.editor li {
  position: relative;
  padding-left: 3.2rem;
  line-height: 2rem;
}

.editor li:not(:last-child) {
  margin-bottom: 2.4rem;
}

.editor li::before {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  top: 0.7rem;
  left: 0;
  background-color: #0072bc;
  content: '';
}

.editor blockquote {
  padding-left: 1.6rem;
  border-left: 4px solid #0072bc;
}

.editor blockquote:not(:last-child) {
  margin-bottom: 3.2rem;
  margin-top: 3.2rem;
}

.animate-pulse {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}
</style>
