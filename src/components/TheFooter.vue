<template>
  <footer
    class="py-10 text-white bg-center bg-cover"
    style="background-image: url('https://tstu.uz/assets/mobilBg-B-mnYgqw.png')"
  >
    <div class="container grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
      <!-- Left Section: University Info -->
      <div>
        <div class="flex items-center mb-2 space-x-4">
          <RouterLink
            to="/"
            class="mr-10 w-[440px] font-bold text-white text-xl flex items-center"
          >
            <img
              class="mr-2 rounded-full"
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
        </div>
        <p class="text-sm">
          Talaba - bizning asosiy kuchimiz. Shu bois universitetimizda biror
          yangilik qilmoqchi bo'lsak, albatta, ular bilan fikrlashamiz kerak.
        </p>
      </div>

      <!-- Center Section: Contact Info -->
      <div>
        <ul>
          <li class="flex items-center mb-2">
            <i class="mr-2 fas fa-phone-alt"></i>
            <span>+998 71-000-00-00</span>
          </li>
          <li class="flex items-center mb-2">
            <i class="mr-2 fas fa-envelope"></i>
            <span>rektorat@nammqi.uz</span>
          </li>
          <li class="flex items-center mb-2">
            <i class="mr-2 fas fa-map-marker-alt"></i>
            <span>Namangan Viloyat Temiryo‘lchilar ko‘chasi 1-uy</span>
          </li>
          <li class="flex items-center mt-4">
            <button
              class="px-4 py-2 text-white transition-opacity duration-300 bg-transparent border hover:opacity-80"
            >
              <i class="mr-2 fas fa-map-marker-alt"></i>Manzilni olish
            </button>
          </li>
        </ul>
      </div>

      <!-- Right Section: Links -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="mb-2 font-semibold">Biz haqimizda</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Bosh sahifa</a></li>
            <li><a href="#" class="hover:underline">Biz haqimizda</a></li>
            <li><a href="#" class="hover:underline">Ta'lim</a></li>
            <li><a href="#" class="hover:underline">Bitiruvchi</a></li>
            <li><a href="#" class="hover:underline">Manaviyat</a></li>
            <li><a href="#" class="hover:underline">Qabul komissiyasi</a></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-2 font-semibold">Havolalar</h3>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:underline">Hemis Xodim</a></li>
            <li><a href="#" class="hover:underline">Hemis talaba</a></li>
            <li><a href="#" class="hover:underline">Kutubxona</a></li>
            <li><a href="#" class="hover:underline">Moodle</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Import any necessary icons (you might use FontAwesome or any other icon set)
</script>

<style scoped>
/* Optional: Add any additional styles if needed */
</style>
