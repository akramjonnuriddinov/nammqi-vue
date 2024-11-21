<template>
  <!-- Right Sidebar Start -->
  <div
    class="order-3 col-span-12 mt-0 xl:col-span-3 md:col-span-4 xl:order-2 md:mt-12"
  >
    <div class="pl-0 lg:pl-5">
      <h4 class="mb-0 text-lg font-semibold">Other experts</h4>
      <ul class="list-none">
        <!-- Single List -->
        <li v-for="i in 5" class="border-b">
          <a class="flex justify-between py-9" href="#">
            <div class="mr-7">
              <img
                class="rounded w-18 h-18"
                src="https://finestwp.co/demos/html/jobcamp/image/l3/png/team-member-1.png"
                alt=""
              />
            </div>
            <div class="flex flex-col">
              <h4 class="mb-0 text-base font-semibold whitespace-nowrap">
                David Herison
              </h4>
              <p class="mb-0 text-sm text-gray-700 whitespace-nowrap">
                UX/UI Designer
              </p>
              <span
                class="flex items-center text-sm text-gray-400 whitespace-nowrap"
              >
                <img
                  class="mr-2"
                  src="https://finestwp.co/demos/html/jobcamp/image/svg/icon-loaction-pin-black.svg"
                  alt=""
                />
                New York, USA
              </span>
            </div>
          </a>
        </li>
        <!-- Single List End -->
      </ul>
    </div>
  </div>
  <!-- Right Sidebar End -->
</template>
