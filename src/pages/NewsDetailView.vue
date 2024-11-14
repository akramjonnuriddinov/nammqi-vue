<template>
  <section>
    <div class="container grid grid-cols-4 py-10 bg-white p-4">
      <div class="col-span-3 ">
          <NewsTopCardVue/>
      </div>
      <div class="col-span-1">
        <div class="telegramBg text-sm p-3 rounded-md">
            <h3 class="font-semibold text-white mb-3">
              Universitetning Telegram dagi rasmiy kanalini kuzatib boring
            </h3>
            <a href="https://t.me/NamMQI_rasmiy" class="bg-white rounded-md p-1 px-3 text-[#4fa4de] font-medium hover:text-white hover:bg-white/30 transition-all">A'zo bo'lish</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import NewsTopCardVue from '@/components/NewsTopCard.vue'
</script>

<style>
.telegramBg{
  background: url('../assets/images/telegramBg.svg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
