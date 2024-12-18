<script setup lang="ts">
import { NavCategory } from '@/types'

defineProps<{ category: NavCategory }>()
</script>

<template>
  <div class="nav__inner-list">
    <div class="nav__inner-left">
      <img src="../../assets/images/university.svg" alt="" />
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
</template>

<style scoped>
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
