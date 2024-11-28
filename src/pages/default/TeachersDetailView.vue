<script setup lang="ts">
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

const rectorData = {
  name: "Ergashev Sharibboy To'lanovich",
  position: 'Rektor',
  biography:
    "1968-yilda tug'ilgan, Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha birinchi prorektor, Professor, texnika fanlari doktori.",
  roles: [
    "Toshkent to'qimachilik va yengil sanoat instituti Namangan filiali assistenti 1985-1989 yy.",
    "Toshkent to'qimachilik va yengil sanoat instituti paxtani dastlabki ishlash kafedrasi aspiranti (1982-1985 yy.)",
    "Namangan muhandislik-iqtisodiyot instituti to'qimachilik mashinalari kafedrasi katta o'qituvchisi, dekan muovini, dotsent (1989-1994 yy.)",
    "Namangan muhandislik-iqtisodiyot instituti ma'naviy-ma'rifiy ishlari bo'yicha birinchi prorektori (1994-1997 yy.)",
    "Pop tumani hokimligining ijtimoiy masalalari bo'yicha o'rinbosar (1997-1998 yy.)",
    "Namangan viloyati o'rta maxsus kasb-hunar ta'limi boshqarmasi boshlig'i (1998-2000 yy.)",
    "O'rta maxsus kasb-hunar ta'limi rivojlantirish instituti dekani (2000-2001 yy.)",
    "O'quvchilarni kasb-hunarga yo'naltirish va psixologik-pedagogik Respublika tashxis markazi direktorining birinchi o'rinbosari (2001-2004 yy.)",
    'Namangan muhandislik-qurilish instituti rektori (2020 y. - h.v.)',
  ],
  contact: {
    phone: '(69)234-15-23',
    email: 'nammqi_info@edu.uz',
  },
}
</script>

<template>
  <div class="container py-10">
    <h1 class="text-4xl font-semibold mb-10">Rektorat</h1>
    <div class="flex gap-10 pb-8">
      <!-- Image Section -->
      <div class="max-w-[470px] flex flex-col">
        <img
          class="aspect-[5/3] object-cover sticky top-10 object-top"
          src="https://my.nammqi.uz/storage/news/sar.jpg"
          alt=""
        />
      </div>
      <!-- Information Section -->
      <div class="flex flex-col gap-10">
        <!-- Name and Position -->
        <div class="bg-white border p-16 px-12">
          <h1 class="text-4xl font-bold text-gray-800">
            {{ rectorData.name }}
          </h1>
          <p class="text-primary-blue mt-6">{{ rectorData.position }}</p>
        </div>
        <!-- Biography -->
        <div>
          <div class="bg-white border p-16 flex flex-col gap-6">
            <h3
              class="text-xl m-auto font-bold border-b-2 border-primary-blue pb-1 w-max"
            >
              Biografiya
            </h3>
            <p class="indent-5">{{ rectorData.biography }}</p>
            <!-- Roles -->
            <ul
              class="list-[square] flex flex-col gap-5 ps-5 marker:text-primary-blue indent-3"
            >
              <li v-for="(role, index) in rectorData.roles" :key="index">
                {{ role }}
              </li>
            </ul>
            <!-- Contact Info -->
            <div class="grid grid-cols-2 mt-5 justify-between">
              <div class="text-xl">
                <span class="text-primary-blue">F.I.O:</span>
                <span class="ms-2">{{ rectorData.name }}</span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Darajasi:</span>
                <span class="ms-2">
                  Yoshlar masalalari va ma'naviy-ma'rifiy ishlar bo'yicha
                  birinchi prorektor, Professor, texnika fanlari doktori
                </span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Telefon:</span>
                <span class="ms-2">{{ rectorData.contact.phone }}</span>
              </div>
              <div class="text-xl">
                <span class="text-primary-blue">Email:</span>
                <span class="ms-2">{{ rectorData.contact.email }}</span>
              </div>
            </div>
          </div>
          <!-- Button Section -->
          <div
            class="bg-primary-blue flex justify-between p-6 border-x border-b group hover:bg-white transition-all duration-300 hover:text-black text-white"
          >
            <h1 class="font-semibold">Rektorga murojat</h1>
            <ChevronRightIcon
              class="w-5 group-hover:translate-x-3 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
