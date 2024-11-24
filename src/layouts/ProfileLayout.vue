<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import ProfileLeftSidebar from '@/components/ProfileLeftSidebar.vue'
import MainHeader from '@/components/organisms/MainHeader.vue'
import UpdateProfile from '@/components/UpdateProfile.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileRightSidebar from '@/components/ProfileRightSidebar.vue'
import { Teacher } from '@/types'
import { getTeacher } from '@/composables/useNews'

const teacher = ref<Teacher | null>(null)
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

onMounted(async () => {
  try {
    teacher.value = await getTeacher()
  } catch (err) {
    console.error('Error: ', err)
  }
})
</script>

<template>
  <MainHeader />
  <div class="bg-[#f4f5f8] min-h-screen py-10">
    <div class="container">
      <div class="flex gap-4 -mx-4">
        <ProfileLeftSidebar v-if="teacher" :teacher="teacher" />
        <div class="order-2 w-full xl:w-2/3 lg:w-3/4 md:w-2/3 xl:order-1">
          <div class="bg-white border rounded-lg">
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
                  <span
                    class="absolute bottom-0 left-0 w-full h-1 transition-opacity duration-300 rounded-t-lg bg-primary-blue"
                    :class="
                      activeTab === tab.name ? 'opacity-100' : 'opacity-0'
                    "
                  ></span>
                </button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <component :is="activeTabComponent" :teacher="teacher" />
            </div>
          </div>
        </div>
        <ProfileRightSidebar />
      </div>
    </div>
  </div>
</template>
