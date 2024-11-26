<script setup lang="ts">
import NewsTopCardVue from '@/components/NewsTopCard.vue'
import NewsCard from '@/components/NewsCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import { ref, onMounted } from 'vue'
import { Article } from '@/types'
import { getNews } from '@/composables/useNews'

const news = ref<Article[] | null>(null)

onMounted(async () => {
  try {
    news.value = await getNews()
    console.log(news.value)
  } catch (error) {}
})
</script>

<template>
  <section>
    <div class="container mt-10">
      <h1 class="text-4xl font-semibold">Barcha yangiliklar</h1>
      <div class="grid grid-cols-4 gap-6 py-10 bg-white">
        <div class="flex flex-col col-span-3 gap-6">
          <NewsTopCardVue />
          <div class="grid grid-cols-3 gap-6">
            <NewsCard v-for="article in news" :article="article" />
          </div>
        </div>
        <div class="flex flex-col col-span-1 gap-6">
          <div>
            <form class="flex flex-col gap-2">
              <h3 class="text-xl">Yangiliklarni izlash</h3>
              <div class="relative bg-red-500">
                <input
                  type="text"
                  class="w-full py-2 bg-white border-primary-blue/30 ps-10 placeholder:text-primary-blue"
                  placeholder="Izlash..."
                  name=""
                  id=""
                />
                <div
                  class="absolute fill-primary-blue top-[50%] left-3 -translate-y-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
                    ></path>
                  </svg>
                </div>
              </div>
              <BaseButton class="text-sm uppercase w-max ms-auto"
                >Izlash</BaseButton
              >
            </form>
          </div>
          <div class="flex flex-col gap-2">
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/education.png" alt="" />
              <div class="text-primary-blue">Fakultetlar</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/office.png" alt="" />
              <div class="text-primary-blue">Kafedralar</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/menu.png" alt="" />
              <div class="text-primary-blue">Bo'limlar</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/calendar.png" alt="" />
              <div class="text-primary-blue">Dars jadvali</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/book.png" alt="" />
              <div class="text-primary-blue">Elektron kutubxona</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/guru.png" alt="" />
              <div class="text-primary-blue">Iqtidorli talabalar</div>
            </RouterLink>
            <RouterLink
              to="/"
              class="flex items-center gap-5 py-1 border-b border-primary-blue/20"
            >
              <img class="w-10" src="../assets/images/webinar.png" alt="" />
              <div class="text-primary-blue">Video darslar</div>
            </RouterLink>
          </div>
          <div class="bg-[#f0f0f5]">
            <div class="p-4">
              <h3 class="font-semibold">Rektorga murojat</h3>
              <BaseButton class="px-1 mt-3 text-xs font-medium">
                <a target="_blank" href="https://t.me/NamMQI_rectori"
                  >Murojat qilish</a
                >
              </BaseButton>
            </div>
            <img
              class="aspect-[5/3] object-cover object-top"
              src="https://my.nammqi.uz/storage/news/sar.jpg"
              alt=""
            />
            <!--  -->
          </div>
          <div class="p-3 text-sm telegramBg">
            <h3 class="mb-3 font-semibold text-white">
              Universitetning Telegram dagi rasmiy kanalini kuzatib boring
            </h3>
            <a
              target="_blank"
              href="https://t.me/NamMQI_rasmiy"
              class="bg-white text-xs p-1 px-3 text-[#4fa4de] font-medium hover:text-white hover:bg-white/30 transition-all duration-300"
              >A'zo bo'lish</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.telegramBg {
  background: url('../assets/images/telegramBg.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
