<template>
  <div class="flex gap-5 relative p-3">
    <div class="aspect-[6/4] min-w-[350px] max-w-[300px] relative">
      <img
        class="w-full h-full object-cover object-center"
        src="https://my.nammqi.uz/storage/13-11-2024-2/photo-2024-11-13-11-22-17-540x360.jpg"
        alt=""
      />
      <div
        class="text-white bg-primary-blue fill-white w-max flex gap-2 items-center p-1 px-3 absolute bottom-0 right-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"
          ></path>
        </svg>
        <p>12.11.2024</p>
      </div>
    </div>
    <div class="flex flex-col mt-1">
      <h1 class="text-3xl mb-3 font-semibold text-primary-blue">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi neque
        nihil totam iste, architecto a.
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab blanditiis
        iste incidunt quos ipsum laborum, ut accusantium, qui at adipisci eaque
        omnis id repellendus distinctio nostrum exercitationem consequatur
        eligendi maxime.
      </p>
      <BaseButton class="w-max py-1 px-2 ml-auto mt-auto">Batafsil</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/atoms/BaseButton.vue'
</script>
