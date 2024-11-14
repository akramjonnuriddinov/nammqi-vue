<template>
  <aside class="w-64 p-6 bg-white rounded-lg shadow-md">
    <ul>
      <li class="mb-4" v-for="item in menuItems" :key="item">
        <button class="text-gray-700 hover:text-blue-500">{{ item }}</button>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
const menuItems = [
  'Profile Info',
  'Email Settings',
  'Security',
  'Preferences',
  'Two-factor Authentication',
  'Device History',
  'Notification Settings',
  'Connected Services',
  'Social Media Links',
  'Account Deactivation',
]
</script>

<style scoped>
/* Optional custom styles */
</style>
