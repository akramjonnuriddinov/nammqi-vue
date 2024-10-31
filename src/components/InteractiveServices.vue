<template>
  <section>
    <div class="container py-10">
      <h2 class="mb-4 text-3xl font-semibold text-gray-800">Xizmatlar</h2>
      <div
        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <ServiceCard
          v-for="(card, index) in cards"
          :key="index"
          :link="card.link"
          :icon="card.hoverIcon"
          :hoverIcon="card.hoverIcon"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from './ServiceCard.vue'

const cards = [
  {
    link: 'https://student.nammqi.uz/dashboard/login',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X.png',
    title: 'Hemis (talaba)',
    description: 'Nammqi hemis tizimi',
  },
  {
    link: 'https://hemis.nammqi.uz/dashboard/login',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_dqn1Ego.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_CEr45z9.png',
    title: "Hemis (o'qituvchi)",
    description: 'Nammqi hemis tizimi',
  },
  {
    link: 'https://nammqi-schedule.netlify.app/',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_JaaOcdJ.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_L7kpGm8.png',
    title: 'Dars jadvali',
    description: 'Nammqi dars jadvali',
  },
  {
    link: 'https://elektronkutubxona.nammqi.uz/uz',
    icon: 'https://tsue.uz/media/icon/Frame_197559_mLDYfIM.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197552_cLFs5Ov.png',
    title: 'Elektron kutubxona',
    description: 'Nammqi dars jadvali',
  },
  {
    link: 'http://video.nammqi.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: 'Video darslar',
    description: 'Nammqi videodarslar',
  },
  {
    link: 'http://mtt.nammqi.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: 'Moodle',
    description: 'Nammqi moodle tizimi',
  },
  {
    link: 'https://t.me/NamMQI_rectori',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: '@NamMQI_rectori',
    description: "Rektor bilan bog'lanish",
  },
  {
    link: 'https://my.gov.uz/oz/service/870',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: '"TTJ"ga onlayn ariza',
    description: 'My.gov orqali ariza berish',
  },
  // {
  //   link: '',
  //   icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
  //   hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
  //   title: '',
  //   description: '',
  // },
]
</script>
