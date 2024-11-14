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
                <p class="text-xs text-gray-500">{{ article.date }}</p>
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
                Далеко-далеко за словесными горами в стране гласных и согласных
                живут рыбные тексты. То своих однажды путь семантика залетают
                власти жизни буквенных. Буквенных эта пустился обеспечивает
                использовало наш речью, бросил курсивных власти злых?
              </p>
            </div>
          </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    article?: object
  }>(),
)
</script>

<style scoped>

</style>