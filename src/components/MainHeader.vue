<template>
  <header class="navbar z-[1000] relative">
    <div class="container relative flex py-5 items-center justify-between">
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
        <span
          >Namangan Muhandislik <br />
          Qurilish Instituti</span
        >
      </RouterLink>
      <ul class="nav__list gap-10 capitalize justify-end">
        <li v-for="i in 5" class="nav__item">
          <a class="nav__item-link" href="#">Universitet {{ i }}</a>
          <div class="nav__inner-list">
            <div class="nav__inner-left">
              <BuildingLibraryIcon class="icon text-gray-500" />
              <h2>UNIVERSITET {{ i }}</h2>
              <p>
                XX asr boshlarida Markaziy Osiyo hududida - O‘zbekistonda uchta
                tijorat bilim yurti savdo-sanoat firmalari va banklar uchun
                mutaxassislar tayyorlab bergan. Rasman oliy maqomli
                iqtisodchilarni tayyorlash 1918-yil 12-may boshlangan.
              </p>
            </div>
            <div class="nav__inner-right">
              <ul class="nav__inner-right__col">
                <li><a class="inner-link" href="#">Ustav</a></li>
                <li><a class="inner-link" href="#">Me'yoriy hujjatlar</a></li>
                <li><a class="inner-link" href="#">Tashkiliy tuzilma</a></li>
                <li><a class="inner-link" href="#">Reytinglar</a></li>
                <li>
                  <a class="inner-link" href="#">Moliyaviy hisobotlar</a>
                </li>
                <li><a class="inner-link" href="#">Akkreditatsiya</a></li>
                <li><a class="inner-link" href="#">Ochiq ma'lumotlar</a></li>
                <li><a class="inner-link" href="#">Fakultetlar</a></li>
                <li><a class="inner-link" href="#">Kontrakt narxlari</a></li>
              </ul>
              <ul class="nav__inner-right__col">
                <li>
                  <a class="inner-link" href="#">Universitet missiyasi</a>
                </li>
                <li><a class="inner-link" href="#">Rahbariyat</a></li>
                <li><a class="inner-link" href="#">Kengashlar</a></li>
                <li><a class="inner-link" href="#">Rekvizitlar</a></li>
                <li>
                  <a class="inner-link" href="#">Universitet raqamlarda</a>
                </li>
                <li>
                  <a class="inner-link" href="#">Mashhur bitiruvchilar</a>
                </li>
                <li><a class="inner-link" href="#">Kafedralar</a></li>
                <li>
                  <a class="inner-link" href="#"
                    >Markaz, departament va bo'limlar</a
                  >
                </li>
                <li>
                  <a class="inner-link" href="#">Kasaba uyushma qo'mitasi</a>
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
import { BuildingLibraryIcon } from '@heroicons/vue/24/outline'
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
  display: inline-block;
}

.nav__inner-list {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
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
  color: #004080;
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
  display: inline-block;
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
