<template>
  <div data-aos="zoom-in" class="interactive-card">
    <a :href="link" class="card-link">
      <div class="icon-wrapper">
        <img :src="icon" alt="" class="icon not-hover" />
        <img :src="hoverIcon" alt="" class="icon hover-icon" />
      </div>
      <div class="card-content">
        <h6 class="card-title">{{ title }}</h6>
        <div class="divider"></div>
        <p class="card-description">{{ description }}</p>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  link: string
  icon: string
  hoverIcon: string
  title: string
  description: string
}>()
</script>

<style scoped>
.interactive-card {
  background: #cceeff80;
  border-radius: 4px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  position: relative;
}

.card-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  position: relative;
  z-index: 1;
}

.icon-wrapper {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
}

.icon {
  transition: opacity 0.3s ease;
  width: 100%;
  height: auto;
}

.hover-icon {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.interactive-card:hover {
  transform: translateY(-6px);
}

.interactive-card:hover .hover-icon {
  opacity: 1;
}

.interactive-card:hover .not-hover {
  opacity: 0;
}

.card-content {
  text-align: center;
  z-index: 1;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  @apply text-gray-800;
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.divider {
  width: 50px;
  height: 4px;
  background-color: #0072bc;
  margin: 8px auto;
  border-radius: 2px;
}

.card-description {
  font-size: 0.95rem;
  color: #838383; /* Neutral gray */
  margin-top: 4px;
  transition: color 0.3s ease;
}

.interactive-card:hover {
  animation: pulse 0.5s ease-in-out infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.02);
  }
}
</style>
