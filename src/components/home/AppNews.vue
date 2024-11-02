<template>
  <section class="py-10 bg-blue-50">
    <div class="container">
      <!-- Header -->
      <header class="flex items-center justify-between mb-8">
        <h2 class="mb-4 text-4xl font-semibold text-gray-800">Yangiliklar</h2>
        <a
          href="#"
          class="font-bold duration-500 text-primary-blue hover:opacity-80"
          >Barchasini ko'rish</a
        >
      </header>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Large Article -->
        <div
          data-aos="fade-right"
          class="relative overflow-hidden bg-white shadow-lg lg:col-span-2"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Main article image"
            class="object-cover w-full h-64 lg:h-80"
          />
          <div class="h-full p-6 text-white bg-primary-blue">
            <span
              class="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase bg-primary-blue"
              >ВАЖНО</span
            >
            <p class="text-xs opacity-75">29.10.2024</p>
            <h2 class="mt-1 text-2xl font-bold">
              Учёные открыли семейство бактерий, способных дышать кислородом под
              землей
            </h2>
            <p class="mt-2 text-sm opacity-75">
              «Поймать» ранее неизвестные бактерии удалось с помощью
              метагеномного анализа.
            </p>
            <a
              href="#"
              class="inline-block mt-4 font-semibold underline text-primary-gray"
              >Подробнее</a
            >
          </div>
        </div>

        <!-- Small Articles -->
        <div class="flex flex-col gap-4 judstify-between">
          <div
            v-for="article in articles"
            :key="article.id"
            class="overflow-hidden transform bg-white shadow-lg small-card h-[271px]"
            data-aos="fade-left"
          >
            <img
              :src="article.image"
              alt="Article image"
              class="object-cover w-full h-32 transition-transform duration-500 hover:scale-105 small-card__img"
            />
            <div class="block p-4 small-card__content">
              <div class="flex items-center justify-between mb-2">
                <p class="text-xs text-gray-500">{{ article.date }}</p>
                <span
                  class="px-2 py-1 text-xs font-semibold text-white"
                  :class="getCategoryColor(article.category)"
                >
                  {{ article.category }}
                </span>
              </div>
              <a
                href="#"
                class="mb-1 text-lg font-bold leading-snug text-primary-blue line-clamp-2"
              >
                {{ article.title }}
              </a>
              <p
                class="h-0 transition-all duration-500 opacity-0 text-neutral-gray small-card__text shrink-0 line-clamp-4"
              >
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. То своих однажды путь семантика залетают
                власти жизни буквенных. Буквенных эта пустился обеспечивает
                использовало наш речью, бросил курсивных власти злых?
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Sections Below -->
      <div
        data-aos="fade-up"
        class="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2"
      >
        <!-- Rector's Message -->
        <div
          class="flex items-center p-6 transition-transform duration-300 transform bg-white shadow-lg hover:scale-105"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Rector"
            class="object-cover w-24 h-24 mr-4"
          />
          <div>
            <a href="#" class="block text-xl font-bold text-primary-blue"
              >Слово — ректору</a
            >
            <p class="mt-2 text-sm leading-snug text-gray-600 line-clamp-2">
              Реформа высшего образования: чего ждут работодатели и к чему они
              Реформа высшего образования: чего ждут работодатели и к чему они
              Реформа высшего образования: чего ждут работодатели и к чему они
              готовы?
            </p>
            <p class="mt-1 text-xs text-gray-500">30.09.2024</p>
          </div>
        </div>

        <!-- Special Project Section -->
        <div
          class="relative p-6 transition-transform duration-300 transform bg-white shadow-lg hover:scale-105"
        >
          <img
            src="https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg"
            alt="Special project"
            class="object-cover w-full h-40"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-white bg-opacity-75 bg-primary-blue"
          >
            <a href="#" class="text-center">
              <h2 class="text-xl font-bold">Спецпроект</h2>
              <p class="mt-1 text-sm">
                О проекте на тему развития сельского хозяйства
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const articles = ref([
  {
    id: 1,
    image: 'https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg',
    date: '30.10.2024',
    category: 'Международное',
    title:
      'ТГУ представил вузам КНР форматы сотрудничества в сфере медиаобразования ТГУ представил вузам КНР форматы сотрудничества в сфере медиаобразования',
  },
  {
    id: 2,
    image: 'https://tsue.uz/media/news/photo_2024-10-24_19-11-34.jpg',
    date: '29.10.2024',
    category: 'Образование',
    title:
      'В ТГУ утвердили политику использования ИИ в образовательном процессе',
  },
])

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
