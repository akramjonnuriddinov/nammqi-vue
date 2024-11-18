<template>
  <div data-aos="fade-right" class="relative overflow-hidden bg-white shadow-lg lg:col-span-2">
    <div class="w-full h-64 lg:h-80 relative">
      <img src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg" alt="Main article image"
        class="object-cover w-full h-full" />
      <div class="absolute px-4 py-2 mb-3  font-bold top-10 left-0 uppercase bg-primary-blue text-white">ВАЖНО</div>
    </div>
    <div class="h-full p-6 text-white bg-primary-blue">
      <div class="text-xs opacity-75 flex gap-1 items-start fill-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
          <path
            d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z">
          </path>
        </svg>
        <p class="mb-0">29.10.2024</p>
      </div>
      <RouterLink to="news/news-detail" class="mt-1 text-2xl font-bold">
        Учёные открыли семейство бактерий, способных дышать кислородом под
        землей
      </RouterLink>
      <p class="mt-2 text-sm opacity-75">
        «Поймать» ранее неизвестные бактерии удалось с помощью
        метагеномного анализа.
      </p>
      <a href="#" class="inline-block mt-4 font-semibold underline text-primary-gray">Подробнее</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
