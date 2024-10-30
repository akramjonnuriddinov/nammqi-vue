<template>
  <div class="bg-primary-blue text-white py-4">
    <div class="container flex items-center justify-between">
      <button class="flex items-center font-extrabold text-sm">
        <Squares2X2Icon class="w-6 mr-2" />
        <span>NamMQI linklar</span>
      </button>
      <div>
        <button>
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

<script setup lang="ts">
import {
  Squares2X2Icon,
  MagnifyingGlassIcon,
  LanguageIcon,
} from '@heroicons/vue/24/outline'
import { EyeSlashIcon } from '@heroicons/vue/20/solid'
</script>
