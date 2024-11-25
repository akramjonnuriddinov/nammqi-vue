<script setup lang="ts">
import { ref } from 'vue'
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  LanguageIcon,
} from '@heroicons/vue/24/outline'
import { EyeSlashIcon } from '@heroicons/vue/20/solid'
import AppAccessibility from '@/components/AppAccessibility.vue'

const accessibility = ref(false)
</script>

<template>
  <AppAccessibility @click="accessibility = false" v-if="accessibility" />
  <div class="py-4 text-white bg-primary-blue">
    <div class="container flex items-center justify-between">
      <button class="flex items-center text-sm font-extrabold">
        <Squares2X2Icon class="w-6 mr-2" />
        <span>NamMQI linklar</span>
      </button>
      <div class="flex items-center">
        <RouterLink class="mr-6" to="/admin">Admin</RouterLink>
        <button @click="accessibility = true">
          <EyeSlashIcon class="w-6 mr-6" />
        </button>
        <button>
          <MagnifyingGlassIcon class="w-6 mr-6" />
        </button>
        <button>
          <LanguageIcon class="w-6" />
        </button>
      </div>
    </div>
  </div>
</template>
