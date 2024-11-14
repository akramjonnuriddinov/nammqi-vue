<template>
  <div class="p-6 mt-16 bg-white rounded-lg shadow-md">
    <h2 class="mb-4 text-xl font-semibold">Profile Info</h2>
    <form class="grid grid-cols-2 gap-4">
      <div>
        <label class="block text-gray-700">Full Name</label>
        <input
          type="text"
          placeholder="First Name"
          class="w-full p-2 mt-1 border rounded-md"
        />
      </div>
      <div>
        <label class="block text-gray-700">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          class="w-full p-2 mt-1 border rounded-md"
        />
      </div>
      <div>
        <label class="block text-gray-700">Date of Birth</label>
        <input type="date" class="w-full p-2 mt-1 border rounded-md" />
      </div>
      <!-- Add other fields as needed -->
    </form>
  </div>
</template>

<script lang="ts" setup>
// Add any required logic here
</script>

<style scoped>
/* Optional custom styles */
</style>
