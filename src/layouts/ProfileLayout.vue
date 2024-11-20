<template>
  <MainHeader />
  <div class="bg-[#f4f5f8] min-h-screen py-10">
    <div class="container">
      <div class="flex gap-4 -mx-4">
        <!-- Left Sidebar Start -->
        <div class="w-full xl:w-3/12 lg:w-4/12 md:w-5/12 mb-11 lg:mb-0">
          <div class="lg:pl-5">
            <!-- Top Start -->
            <div class="bg-white rounded-lg shadow-md">
              <div class="px-5 text-center border-b border-gray-200 py-11">
                <a class="mb-4" href="#">
                  <img
                    class="mx-auto rounded-full w-14 h-14"
                    src="https://finestwp.co/demos/html/jobcamp/image/l3/png/pro-img.png"
                    alt=""
                  />
                </a>
                <h4 class="mb-0">
                  <a class="text-lg font-semibold text-gray-900" href="#"
                    >David Henricks</a
                  >
                </h4>
                <p class="mb-8">
                  <a class="text-base text-gray-500" href="#"
                    >Product Designer</a
                  >
                </p>
                <div
                  class="flex flex-wrap items-center justify-center space-x-3"
                >
                  <a
                    class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
                    href="#"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <a
                    class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
                    href="#"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a
                    class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
                    href="#"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a
                    class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
                    href="#"
                    ><i class="fab fa-dribbble"></i
                  ></a>
                  <a
                    class="flex items-center justify-center w-8 h-8 text-gray-400 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white"
                    href="#"
                    ><i class="fab fa-behance"></i
                  ></a>
                </div>
              </div>
              <!-- Top End -->
              <!-- Bottom Start -->
              <div class="pb-5 px-9 pt-9">
                <h5 class="mb-8 text-lg text-gray-900">Contact Info</h5>
                <!-- Single List -->
                <div class="mb-7">
                  <p class="mb-0 text-base">Location</p>
                  <h5
                    class="mb-0 text-base font-semibold text-gray-900 break-words"
                  >
                    New York, USA
                  </h5>
                </div>
                <!-- Single List -->
                <div class="mb-7">
                  <p class="mb-0 text-base">E-mail</p>
                  <h5 class="mb-0 text-base font-semibold">
                    <a
                      class="text-gray-900 break-words"
                      href="mailto:name_ac@gmail.com"
                      >name_ac@gmail.com</a
                    >
                  </h5>
                </div>
                <!-- Single List -->
                <div class="mb-7">
                  <p class="mb-0 text-base">Phone</p>
                  <h5 class="mb-0 text-base font-semibold">
                    <a class="text-gray-900 break-words" href="tel:+999565562"
                      >+999 565 562</a
                    >
                  </h5>
                </div>
                <!-- Single List -->
                <div class="mb-7">
                  <p class="mb-0 text-base">Website Linked</p>
                  <h5 class="mb-0 text-base font-semibold">
                    <a class="break-words" href="#">www.nameac.com</a>
                  </h5>
                </div>
                <!-- Single List -->
              </div>
              <!-- Bottom End -->
            </div>
          </div>
        </div>
        <!-- Left Sidebar End -->

        <!-- Middle Content -->
        <div class="order-2 w-full xl:w-2/3 lg:w-3/4 md:w-2/3 xl:order-1">
          <div class="bg-white rounded-lg shadow-md">
            <!-- Tab Section Start -->
            <ul class="flex border-b border-gray-300">
              <li
                v-for="tab in tabs"
                :key="tab.name"
                class="flex items-center gap-4 group"
              >
                <button
                  class="relative px-4 py-5 text-gray-600 transition-colors duration-300 hover:text-primary-blue"
                  @click="activeTab = tab.name"
                  :class="{
                    'text-primary-blue font-semibold': activeTab === tab.name,
                  }"
                >
                  {{ tab.label }}

                  <!-- Active tab indicator -->
                  <span
                    class="absolute bottom-0 left-0 w-full h-1 transition-opacity duration-300 rounded-t-lg bg-primary-blue"
                    :class="
                      activeTab === tab.name ? 'opacity-100' : 'opacity-0'
                    "
                  ></span>
                </button>
              </li>
            </ul>

            <!-- Tab Content -->
            <div class="tab-content" id="myTabContent">
              <component :is="activeTabComponent" />
            </div>
          </div>
        </div>

        <!-- Right Sidebar Start -->
        <div
          class="order-3 col-span-12 mt-0 xl:col-span-3 md:col-span-4 xl:order-2 md:mt-12"
        >
          <div class="pl-0 lg:pl-5">
            <h4 class="mb-0 text-lg font-semibold">Other experts</h4>
            <ul class="list-none">
              <!-- Single List -->
              <li class="border-b">
                <a class="flex flex-wrap items-center py-9" href="#">
                  <div class="mr-7">
                    <img
                      class="rounded w-18 h-18"
                      src="./image/l3/png/team-member-1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 class="mb-0 text-base font-semibold">David Herison</h4>
                    <p class="mb-0 text-sm text-gray-700">UX/UI Designer</p>
                    <span class="flex items-center text-sm text-gray-400">
                      <img
                        class="mr-2"
                        src="./image/svg/icon-loaction-pin-black.svg"
                        alt=""
                      />
                      New York, USA
                    </span>
                  </div>
                </a>
              </li>
              <!-- Single List End -->

              <!-- Repeat structure for other list items -->

              <!-- Single List -->
              <li class="border-b">
                <a class="flex flex-wrap items-center py-9" href="#">
                  <div class="mr-7">
                    <img
                      class="rounded w-18 h-18"
                      src="./image/l3/png/team-member-2.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h4 class="mb-0 text-base font-semibold">Mark Zanitos</h4>
                    <p class="mb-0 text-sm text-gray-700">
                      Lead Product Designer
                    </p>
                    <span class="flex items-center text-sm text-gray-400">
                      <img
                        class="mr-2"
                        src="./image/svg/icon-loaction-pin-black.svg"
                        alt=""
                      />
                      New York, USA
                    </span>
                  </div>
                </a>
              </li>
              <!-- Single List End -->

              <!-- Additional team members would follow the same structure -->
            </ul>
          </div>
        </div>
        <!-- Right Sidebar End -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileSidebar from '@/components/ProfileSidebar.vue'
import MainHeader from '@/components/organisms/MainHeader.vue'
import UpdateProfile from '@/components/UpdateProfile.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import { computed, ref } from 'vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const tabs = [
  {
    name: 'ProfileInfo',
    label: 'Men haqimda',
    component: ProfileInfo,
  },
  {
    name: 'UpdateProfile',
    label: 'Tahrirlash',
    component: UpdateProfile,
  },
]

const activeTab = ref('ProfileInfo')

const activeTabComponent = computed(() => {
  return (
    tabs.find((tab) => tab.name == activeTab.value)?.component || 'ProfileInfo'
  )
})
</script>
