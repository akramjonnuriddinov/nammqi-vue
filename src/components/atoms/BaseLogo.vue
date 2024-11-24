<script setup lang="ts">
defineProps({
  classes: {
    type: String,
    default: 'text-gray-800',
  },
})
</script>

<template>
  <RouterLink
    to="/"
    :class="classes"
    class="mr-10 w-[440px] font-bold text-xl flex items-center"
  >
    <img
      class="mr-2"
      src="@/assets/images/logo-icon.png"
      width="68"
      height="60"
      alt="Logo"
    />
    <span class="whitespace-nowrap"
      >Namangan Muhandislik <br />
      Qurilish Instituti</span
    >
  </RouterLink>
</template>
