<template>
  <li class="nav__item">
    <router-link :to="category.path" class="nav__item-link whitespace-nowrap">
      {{ category.title }}
    </router-link>

    <NavDropdown v-if="category.isInnerLinks" :category="category" />
  </li>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { NavCategory } from '@/types'
import NavDropdown from '@/components/NavDropdown.vue'

defineProps<{ category: NavCategory }>()
</script>

<style scoped>
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
</style>
