<template>
  <div
    class="overflow-hidden transform bg-white shadow-lg small-card h-[271px]"
    data-aos="fade-left"
  >
    <img
      :src="article.image"
      alt="Article image"
      class="object-cover w-full h-32 transition-transform duration-500 small-card__img"
    />
    <div class="block p-4 small-card__content">
      <div class="flex items-center justify-between mb-2">
        <div class="text-xs text-gray-500 fill-gray-500 flex items-start gap-1">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
          ></path>
        </svg>
          <p> {{ article.date }}</p>
          </div>
        <span
          class="px-2 py-1 text-xs font-semibold text-white"
          :class="getCategoryColor(article.category)"
        >
          {{ article.category }}
        </span>
      </div>
      <RouterLink
        to="/news"
        class="mb-1 text-lg font-bold leading-snug text-primary-blue line-clamp-2"
      >
        {{ article.title }}
      </RouterLink>
      <p
        class="h-0 transition-all duration-500 opacity-0 text-neutral-gray small-card__text shrink-0 line-clamp-4"
      >
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. То своих однажды путь семантика залетают власти жизни
        буквенных. Буквенных эта пустился обеспечивает использовало наш речью,
        бросил курсивных власти злых?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['article'])
const getCategoryColor = (category: any) => {
  switch (category) {
    case 'Международное':
      return 'bg-primary-blue'
    case 'Образование':
      return 'bg-green-600'
    default:
      return 'bg-gray-600'
  }
}
</script>

<style scoped>
.small-card__img {
  transition: height 0.5s ease;
}
.small-card:hover .small-card__img {
  flex-shrink: 0;
  will-change: height;
  height: 0;
}
.small-card:hover .small-card__content {
  flex-shrink: 1;
  will-change: height;
}

.small-card:hover .small-card__text {
  flex-shrink: 1;
  height: auto;
  opacity: 1;
  will-change: height;
}
</style>
