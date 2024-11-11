<template>
  <button
    :disabled="props.disabled || props.isLoading"
    :class="[
      'px-4 py-2 font-bold transition-opacity duration-300 border whitespace-nowrap hover:opacity-80',
      themeClass,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { EThemes } from '@/types'

const props = withDefaults(
  defineProps<{
    theme?: EThemes
    isLoading?: boolean
    disabled?: boolean
  }>(),
  {
    theme: EThemes.DEFAULT,
    isLoading: false,
    disabled: false,
  }
)

const theme = {
  [EThemes.DEFAULT]: 'text-white bg-primary-blue border-transparent',
  [EThemes.GREEN]: 'text-green-400 border-primary-blue',
  [EThemes.RED]: 'text-red-400 border-primary-blue',
  [EThemes.TRANSPARENT]: 'text-primary-blue bg-transparent border-primary-blue',
}
const themeClass = computed(() => theme[props.theme || EThemes.DEFAULT])
</script>
