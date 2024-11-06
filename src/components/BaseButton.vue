<template>
  <button
    :class="['custom-button', variantClass, className]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'dark' | 'danger'
  onClick?: () => void
  className?: string
}>()

const variantClass = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'bg-black text-white'
    case 'danger':
      return 'bg-red-500 text-white'
    default:
      return 'bg-primary-blue text-white'
  }
})

const handleClick = () => {
  props.onClick?.()
}
</script>

<style scoped>
.custom-button {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  transition: background-color 0.3s;
}
</style>
