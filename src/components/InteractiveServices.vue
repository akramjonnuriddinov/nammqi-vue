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
    link: 'http://moodle.tsue.uz/login/index.php',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X.png',
    title: 'Kunduzgi taʼlim platformasi',
    description: 'TDIU masofaviy taʼlim tizimi',
  },
  {
    link: 'https://unilibrary.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_dqn1Ego.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_CEr45z9.png',
    title: 'Elektron Kutubxona',
    description: 'Yagona elektron kutubxona axborot tizimi',
  },
  {
    link: 'http://edu.tsue.uz/login/index.php',
    icon: 'https://tsue.uz/media/icon/Frame_197556_NwQI4Vl_JaaOcdJ.png',
    hoverIcon: 'https://tsue.uz/media/icon/hovered_NMw9C2X_L7kpGm8.png',
    title: 'Sirtqi taʼlim platformasi',
    description: 'TDIU masofaviy taʼlim tizimi',
  },
  {
    link: 'https://tsue.edupage.org/',
    icon: 'https://tsue.uz/media/icon/Frame_197559_mLDYfIM.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197552_cLFs5Ov.png',
    title: 'Dars jadvali',
    description: 'TDIU dars jadvali',
  },
  {
    link: 'https://mail.tsue.uz/SOGo/',
    icon: 'https://tsue.uz/media/icon/Frame_1975514.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_197551_67eivVm.png',
    title: 'Korporativ elektron pochta',
    description: 'Korporativ elektron pochta',
  },
  {
    link: 'https://my.tsue.uz/',
    icon: 'https://tsue.uz/media/icon/Frame_19856.png',
    hoverIcon: 'https://tsue.uz/media/icon/Frame_1975515.png',
    title: 'Yagona portal',
    description: 'TDIU interaktiv xizmatlar portali',
  },
]
</script>
