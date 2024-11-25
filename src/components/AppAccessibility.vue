<script setup>
import { ref } from 'vue'
const buttons = ref([
  {
    name: 'normal',
    className: 'normal',
  },
  {
    name: 'grayscale',
    className: 'bg-[#777]',
  },
  {
    name: 'invert',
    className: 'invert text-white',
  },
  {
    name: 'no_image',
    className: 'no-image text-black',
  },
])

const handleClick = (id) => {
  if (id == 'grayscale') document.body.classList.toggle('grayscale')
  if (id == 'invert') document.body.classList.toggle('invert')
  if (id == 'no_image') document.body.classList.toggle('no_image')
  if (id == 'normal') document.body.className = ''
}

const changeZoom = (factor) => {
  const currentZoom = parseFloat(document.body.style.zoom) || 1
  const newZoom = currentZoom + factor * 0.1
  document.body.style.zoom = newZoom
}

const currentZoom = () => {
  document.body.style.zoom = 1
}
</script>

<template>
  <div
    class="fixed w-full h-full bg-[#0000004d] z-[99999] flex justify-end pt-[80px] pr-4"
  >
    <div @click.stop class="bg-white border w-[267px] h-[190px] p-2">
      <h3 class="text-[#343a40] mb-2 font-medium">Ko'rinish</h3>
      <div class="flex items-start gap-1 mb-4">
        <button
          v-for="button in buttons"
          @click="handleClick(button.name)"
          :ref="button.name"
          :key="button.name"
          :class="button.className"
          class="px-4 py-2 text-white flex border-2 border-[#726e6e] cursor-pointer"
        >
          <icon-image class="w-6 h-6" />
        </button>
      </div>
      <h3 class="text-[#343a40] mb-2 font-medium">Shrift o'lchami</h3>
      <div>
        <button
          @click="changeZoom(-1)"
          class="px-4 py-2 cursor-pointer mx-2 border-2 border-black text-[0.6em] transition-all duration-300 bg-[#F0F0F0] focus:rounded-sm"
        >
          A-
        </button>
        <button
          @click="currentZoom"
          class="px-4 py-2 cursor-pointer mx-2 border-2 border-black text-[0.em] transition-all duration-300 bg-[#F0F0F0] focus:rounded-sm"
        >
          A
        </button>
        <button
          @click="changeZoom(1)"
          class="px-4 py-2 cursor-pointer mx-2 border-2 border-black text-[1.2em] transition-all duration-300 bg-[#F0F0F0] focus:rounded-sm"
        >
          A+
        </button>
      </div>
    </div>
  </div>
</template>

<style>
* {
  transition: all 0.4s ease;
}
body.grayscale {
  filter: grayscale(100%);
}
body.invert {
  filter: invert(100%) grayscale(100%);
}
body.no_image img {
  visibility: hidden;
}
.normal {
  background-image: linear-gradient(to bottom, #ff0000, #00ff00, #0000ff);
}
.invert {
  background-image: linear-gradient(to bottom, #fff, #000000);
}
.no-image {
  position: relative;
  background-color: #f0f0f0;
}
.no-image::before {
  position: absolute;
  top: 4px;
  left: 14px;
  content: '';
  display: block;
  width: 80%;
  height: 5px;
  border-radius: 5px;
  z-index: 1000;
  background: rgba(220, 20, 60, 0.7);
  transform-origin: top left;
  transform: rotate(45deg);
}
.no-image::after {
  position: absolute;
  bottom: 4px;
  left: 14px;
  border-radius: 5px;
  content: '';
  display: block;
  width: 80%;
  height: 5px;
  z-index: 1000;
  background: rgba(220, 20, 60, 0.7);
  transform-origin: bottom left;
  transform: rotate(-45deg);
}
</style>
