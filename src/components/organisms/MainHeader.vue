<template>
  <header class="navbar z-[1000] relative">
    <div class="container relative flex items-center justify-between py-5">
      <BaseLogo />
      <ul class="justify-end gap-10 capitalize nav__list">
        <NavLink
          v-for="(category, index) in navCategories"
          :key="index"
          :category="category"
        />
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseLogo from '@/components/atoms/BaseLogo.vue'
import NavLink from '@/components/molecules/NavLink.vue'
import { navCategories } from '@/constants'
</script>

<style>
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
</style>
