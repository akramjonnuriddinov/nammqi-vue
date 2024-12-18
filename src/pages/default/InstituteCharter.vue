<script setup lang="ts">
import DownloadIcon from '@/components/icons/DownloadIcon.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import { EyeIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

interface Charter {
  id: number
  title: string
  pdfUrl: string
}

const charters = ref<Charter[]>([
  {
    id: 1,
    title: 'Charter 2023',
    pdfUrl: 'https://example.com/charter2023.pdf',
  },
  {
    id: 2,
    title: 'Charter 2022',
    pdfUrl: 'https://example.com/charter2022.pdf',
  },
  {
    id: 3,
    title: 'Charter 2021',
    pdfUrl: 'https://example.com/charter2021.pdf',
  },
  {
    id: 1,
    title: 'Charter 2023',
    pdfUrl: 'https://example.com/charter2023.pdf',
  },
  {
    id: 2,
    title: 'Charter 2022',
    pdfUrl: 'https://example.com/charter2022.pdf',
  },
  {
    id: 3,
    title: 'Charter 2021 Charter 2021 Charter 2021 Charter 2021 Charter 2021  ',
    pdfUrl: 'https://example.com/charter2021.pdf',
  },
  {
    id: 1,
    title: 'Charter 2023',
    pdfUrl: 'https://example.com/charter2023.pdf',
  },
  {
    id: 2,
    title: 'Charter 2022',
    pdfUrl: 'https://example.com/charter2022.pdf',
  },
  {
    id: 3,
    title: 'Charter 2021',
    pdfUrl: 'https://example.com/charter2021.pdf',
  },
])

const viewPDF = (url: string) => {
  window.open(url, '_blank')
}

const downloadPDF = (url: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = url.split('/').pop() || 'charter.pdf'
  link.click()
}
</script>

<template>
  <section class="min-h-screen py-10 bg-[#f6f6f6]">
    <div class="container flex flex-col p-6">
      <span class="flex w-full mb-2 text-sm text-primary-blue"
        >Namangan Muhandislik Qurilish Instituti</span
      >
      <h2 class="mb-6 text-4xl font-bold">Institut Ustavi</h2>
      <div class="relative mb-6">
        <input
          class="w-full px-20 py-4 border border-[#b4b4b4]"
          placeholder="Hujjatni qidirish"
          type="text"
        />
        <SearchIcon
          class="absolute w-4 -translate-y-1/2 text-primary-blue left-4 top-1/2"
        />
      </div>
      <!-- Table -->
      <div class="overflow-hidden border">
        <table class="w-full text-left border-collapse">
          <!-- Table Head -->
          <thead class="text-black bg-primary-gray">
            <tr class="">
              <th class="p-4 text-sm font-semibold">#</th>
              <th class="p-4 text-sm font-semibold">Title</th>
              <th class="p-4 text-sm font-semibold"></th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody class="bg-white divide-y divide-gray-200">
            <tr
              v-for="charter in charters"
              :key="charter.id"
              class="hover:bg-primary-gray"
            >
              <td class="p-4 text-sm text-gray-800">{{ charter.id }}</td>
              <td class="p-4 text-sm font-medium text-gray-900">
                {{ charter.title }}
              </td>
              <td class="flex justify-end p-4 space-x-3">
                <button
                  @click="viewPDF(charter.pdfUrl)"
                  class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-green-500 hover:bg-green-500"
                >
                  <EyeIcon class="w-5" />
                  Ko'rish
                </button>
                <button
                  @click="downloadPDF(charter.pdfUrl)"
                  class="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition bg-primary-blue hover:opacity-80"
                >
                  <DownloadIcon class="w-5" />
                  Yuklab olish
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
