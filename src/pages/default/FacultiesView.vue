<script lang="ts" setup>
import { computed, ref } from 'vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import LocationIcon from '@/components/icons/LocationIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import LinkIcon from '@/components/icons/LinkIcon.vue'
import EmailIcon from '@/components/icons/EmailIcon.vue'

interface Faculty {
  name: string
  image: string
  phone: string
  email: string
  link: string
  location: string
}

const searchQuery = ref('')
const faculties: Faculty[] = [
  {
    name: 'Iqtisodiyot va Boshqaruv fakulteti',
    image: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Energetika va Mehnat muhozasi fakulteti',
    image: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-58.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Mashinasozlik fakulteti',
    image: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-37.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Transport fakulteti',
    image: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-52.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Muhandislik kommunikatsiyalari fakulteti',
    image: 'https://my.nammqi.uz/storage/general/2023-03-29-165018.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Sanoatni Axborotlashtirish fakulteti',
    image: 'https://my.nammqi.uz/storage/img-20231226-151252-748.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
  {
    name: 'Qurilish fakulteti',
    image: 'https://my.nammqi.uz/storage/photo-2022-09-22-17-14-48.jpg',
    phone: '+998 71-000-00-00',
    email: 'nammqi@gmail.com',
    link: 'rektorat@nammqi.uz',
    location: 'Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy',
  },
]

const filteredFaculties = computed(() => {
  const query = searchQuery.value.toLowerCase()
  return faculties.filter((faculty) =>
    faculty.name.toLowerCase().includes(query)
  )
})
</script>

<template>
  <section class="min-h-screen py-10 bg-[#f6f6f6]">
    <div class="container p-6 mx-auto">
      <h1 class="mb-6 text-3xl font-bold">Fakultetlar</h1>
      <div class="relative mb-6">
        <input
          v-model="searchQuery"
          class="w-full px-20 py-4 border border-[#b4b4b4]"
          placeholder="Fakultetni qidirish"
          type="text"
        />
        <SearchIcon
          class="absolute w-4 -translate-y-1/2 text-primary-blue left-4 top-1/2"
        />
      </div>
      <ul class="flex flex-col">
        <li
          v-for="faculty in filteredFaculties"
          :key="faculty.name"
          class="flex items-center gap-10 px-10 pt-8 pb-6 mb-5 bg-white"
        >
          <div>
            <img :src="faculty.image" alt="" class="w-[70px]" />
          </div>
          <RouterLink
            to="/"
            class="w-full text-xl font-semibold text-black max-w-80"
            >{{ faculty.name }}</RouterLink
          >
          <div class="flex flex-col gap-5 ml-auto">
            <a
              href="#"
              class="flex items-center gap-2 text-sm text-primary-blue"
            >
              <PhoneIcon class="w-4 mr-5 text-primary-blue" />
              <span class="text-sm">{{ faculty.phone }}</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 text-sm text-primary-blue"
            >
              <LinkIcon class="w-4 mr-5 text-primary-blue" />
              <span class="text-sm">{{ faculty.link }}</span>
            </a>
            <a
              href="#"
              class="flex items-center gap-2 text-sm text-primary-blue"
            >
              <EmailIcon class="w-4 mr-5 text-primary-blue" />
              <span class="text-sm">{{ faculty.email }}</span>
            </a>
          </div>
          <div class="flex items-start gap-4 ml-auto">
            <LocationIcon class="flex w-4 text-primary-blue" />
            <span class="w-full text-sm max-w-60">{{ faculty.location }}</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
