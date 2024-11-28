<script setup lang="ts">
import AdminSidebar from '@/components/layouts/AdminSidebar.vue'
</script>

<template>
  <div>
    <AdminSidebar />

    <div class="p-4 sm:ml-64">
      <RouterView />
    </div>
  </div>
</template>
