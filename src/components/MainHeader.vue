<template>
  <header class="navbar z-[1000] relative">
    <div class="container relative flex items-center justify-between py-5">
      <RouterLink
        to="/"
        class="mr-10 w-[440px] font-bold text-gray-800 text-xl flex items-center"
      >
        <img
          class="mr-2"
          src="../assets/images/logo-icon.png"
          width="68"
          height="60"
          alt="Logo"
        />
        <span class="whitespace-nowrap"
          >Namangan Muhandislik <br />
          Qurilish Instituti</span
        >
      </RouterLink>
      <ul class="justify-end gap-10 capitalize nav__list">
        <li
          v-for="(category, index) in navCategories"
          :key="index"
          class="nav__item"
        >
          <a class="nav__item-link whitespace-nowrap" href="#">{{
            category.title
          }}</a>
          <div class="nav__inner-list">
            <div class="nav__inner-left">
              <img
                src="https://tsue.uz/_nuxt/img/university.c6bede9.svg"
                alt=""
              />
              <h2>{{ category.title }}</h2>
              <p>{{ category.description }}</p>
            </div>
            <div class="nav__inner-right">
              <ul
                v-for="(col, colIndex) in category.columns"
                :key="colIndex"
                class="nav__inner-right__col"
              >
                <li v-for="link in col.links" :key="link.title">
                  <a class="inner-link" :href="link.href">{{ link.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const navCategories = [
  {
    title: 'Universitet',
    description:
      'XX asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Ustav', href: '#' },
          { title: "Me'yoriy hujjatlar", href: '#' },
          { title: 'Tashkiliy tuzilma', href: '#' },
          { title: 'Reytinglar', href: '#' },
          { title: 'Moliyaviy hisobotlar', href: '#' },
          { title: 'Akkreditatsiya', href: '#' },
          { title: "Ochiq ma'lumotlar", href: '#' },
          { title: 'Fakultetlar', href: '#' },
          { title: 'Kontrakt narxlari', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Universitet missiyasi', href: '#' },
          { title: 'Rahbariyat', href: '#' },
          { title: 'Kengashlar', href: '#' },
          { title: 'Rekvizitlar', href: '#' },
          { title: 'Universitet raqamlarda', href: '#' },
          { title: 'Mashhur bitiruvchilar', href: '#' },
          { title: 'Kafedralar', href: '#' },
          { title: "Markaz, departament va bo'limlar", href: '#' },
          { title: "Kasaba uyushma qo'mitasi", href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Taʼlim',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Kurs katalogi', href: '#' },
          { title: 'Bakalavriat', href: '#' },
          { title: 'Malaka talablari', href: '#' },
          { title: 'O‘quv dasturlari (Sillabuslar)', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Resurslar', href: '#' },
          { title: 'Magistratura', href: '#' },
          { title: 'O‘quv rejalar', href: '#' },
          { title: 'Masofaviy o‘qitish tizimi', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Ilm-fan',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Seminarlar', href: '#' },
          { title: 'Ilmiy jurnallar', href: '#' },
          { title: 'Kutilayotgan konferensiyalar', href: '#' },
          { title: 'Sertifikatlar', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Ilmiy maqolalar', href: '#' },
          { title: 'Konferensiyalar', href: '#' },
          { title: 'Ilmiy kengashlar', href: '#' },
          { title: 'Ilmiy markazlar', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Xalqarolashtirish',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Xalqaro aloqalar departamenti xodimlari', href: '#' },
          { title: 'Xalqaro grantlar', href: '#' },
          { title: 'Xalqaro konferensiyalar', href: '#' },
          {
            title: 'Xorijlik pedagoglar uchun malaka oshirish dasturlari',
            href: '#',
          },
        ],
      },
      {
        links: [
          { title: 'Xalqaro hamkorlik aloqalari', href: '#' },
          { title: 'Xalqaro ilmiy aloqalar', href: '#' },
          { title: 'Xorijda malaka oshirish va taʼlim', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Talabalar hayoti',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Jamoaviy klublar', href: '#' },
          { title: 'Ijtimoiy hayot', href: '#' },
          { title: 'Tanlovlar', href: '#' },
          { title: 'Talabalar turar joyi', href: '#' },
          { title: 'Kafeteriyalar', href: '#' },
          { title: 'Imkoniyati cheklanganlar uchun qulayliklar', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Sog‘liqni saqlashni xizmati', href: '#' },
          { title: 'Ijtimoiy xonalar', href: '#' },
          { title: 'Ijtimoiy muhofaza markazi', href: '#' },
          { title: 'Sport inshootlari', href: '#' },
          { title: 'Kitob do‘koni', href: '#' },
          { title: 'Talaba fikri', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Qabul-2024',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Ikkinchi taʼlim to‘g‘risidagi nizom', href: '#' },
          {
            title:
              '2024/2025 o‘quv yili uchun ikkinchi va undan keyingi oliy maʼlumot olish bo‘yicha qabul shartlari',
            href: '#',
          },
          { title: 'Mahalliy abiturentlarga', href: '#' },
          { title: 'Qabul kvotalari', href: '#' },
          { title: 'O‘qishni ko‘chirish bo‘yicha maʼlumotlar', href: '#' },
          { title: 'Javoblar varaqasi bilan ishlash', href: '#' },
          { title: 'Tez-tez so‘raladigan savollarga javoblar', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Qabul 2024', href: '#' },
          { title: 'Xalqaro abituriyentlarga', href: '#' },
          { title: 'Qabul bo‘yicha bog‘lanish', href: '#' },
          { title: 'Abituriyentlar uchun yo‘riqnoma', href: '#' },
          { title: 'Bakalavriatga qabul uchun ro‘yhatdan o‘tish', href: '#' },
          { title: 'Texnikum bitiruvchilari qabuli-2024', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Axborot xizmati',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: 'Yangiliklar', href: '#' },
          { title: 'Kutilayotgan tadbirlar', href: '#' },
          { title: 'Kontaktlar', href: '#' },
        ],
      },
      {
        links: [
          { title: 'Videogalereya', href: '#' },
          { title: 'Fotogalareya', href: '#' },
        ],
      },
    ],
  },
  {
    title: '',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
    ],
  },
  {
    title: '',
    description:
      'XX1 asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta tijorat bilim yurti savdo-sanoat firmalari va banklar uchun mutaxassislar tayyorlab bergan. Rasman oliy maqomli iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.',
    columns: [
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
      {
        links: [
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
          { title: '', href: '#' },
        ],
      },
    ],
  },
]
</script>

<style scoped>
header {
  @apply bg-primary-white;
}

.navbar {
  padding: 0 15px;
}

.nav__list {
  display: flex;
  list-style: none;
  width: 100%;
}

.nav__item {
  padding: 25px 0;
  border-bottom: 6px solid transparent;
  transition: all 0.3s;
}
.nav__item:hover {
  border-bottom: 6px solid #6db0ff;
  opacity: 1;
}

.nav__item-link {
  text-decoration: none;
  font-size: 18px;
  display: block;
}

.nav__inner-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: -1;
  visibility: hidden;
}

.nav__inner-list a {
  padding-top: 10px;
  padding-bottom: 10px;
}

.nav__item:hover .nav__inner-list {
  opacity: 1;
  transform: translateY(0);
  visibility: visible;
  z-index: 1;
}

.nav__inner-left {
  width: 50%;
  padding-right: 20px;
}

.nav__inner-left .icon {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.nav__inner-left h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.nav__inner-left p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.nav__inner-right {
  display: flex;
  width: 100%;
}

.nav__inner-right__col {
  list-style: none;
  margin-left: 30px;
  width: 100%;
}

.nav__inner-right__col li {
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom: 1px solid rgba(0, 49, 107, 0.1);
  transform: all 0.3s ease;
}

.nav__inner-right__col li a {
  text-decoration: none;
  font-size: 18px;
  display: block;
  color: #86909c;
}

.nav__inner-right__col li:hover {
  background-color: #eff0f2;
  color: #374453;
}

.nav__inner-right__col li a {
  text-decoration: none;
  font-size: 16px;
  transition: color 0.2s;
}

.nav__inner-right__col li:hover .inner-link {
  color: #374453;
}
</style>
