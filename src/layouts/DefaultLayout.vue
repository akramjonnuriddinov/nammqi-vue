<template>
  <div class="relative">
    <TopHeader />
    <MainHeader />
    <RouterView />
    <TheFooter />
    <ScrollTop />
  </div>
</template>

<script setup lang="ts">
import TopHeader from '@/components/home/TopHeader.vue'
import MainHeader from '@/components/home/MainHeader.vue'
import TheFooter from '@/components/home/TheFooter.vue'
import ScrollTop from '@/components/home/ScrollTop.vue'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

onMounted(scrollToTop);

watch(route, scrollToTop);
</script>
