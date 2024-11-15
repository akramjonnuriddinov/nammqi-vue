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
            <ul
              class="flex p-3 border-b border-gray-300"
              id="myTab"
              role="tablist"
            >
              <li class="pr-3">
                <a
                  class="py-2 text-sm font-semibold text-gray-700 uppercase border-b-2 border-gray-700"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Overview
                </a>
              </li>
              <li class="pr-3">
                <a
                  class="py-2 text-sm font-semibold text-gray-700 uppercase"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Contact
                </a>
              </li>
            </ul>
            <!-- Tab Content -->
            <div class="tab-content" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <!-- Excerpt Start -->
                <div class="p-5 pt-7">
                  <h4 class="mt-5 text-lg font-semibold text-black mb-7">
                    About
                  </h4>
                  <p class="mb-8 text-sm text-gray-700">
                    A talented professional with an academic background in IT
                    and proven commercial development experience as C++
                    developer since 1999. Has a sound knowledge of the software
                    development life cycle. Was involved in more than 140
                    software development outsourcing projects.
                    <br />
                    <br />
                    Programming Languages: C/C++, .NET C++, Python, Bash, Shell,
                    PERL, Regular expressions, Python, Active-script.
                  </p>
                </div>
                <!-- Skills -->
                <div class="p-5 border-t">
                  <h4 class="mt-5 text-lg font-semibold text-black mb-7">
                    Skills
                  </h4>
                  <ul class="flex flex-wrap">
                    <li>
                      <a
                        class="px-3 py-1 mt-2 mb-2 mr-3 text-xs text-gray-700 bg-gray-100 rounded-md"
                        href="#"
                        >Agile</a
                      >
                    </li>
                    <li>
                      <a
                        class="px-3 py-1 mt-2 mb-2 mr-3 text-xs text-gray-700 bg-gray-100 rounded-md"
                        href="#"
                        >Wireframing</a
                      >
                    </li>
                    <!-- More skills here -->
                  </ul>
                </div>
                <!-- Card Section Start -->
                <div class="p-5 border-t">
                  <h4 class="mt-5 text-lg font-semibold text-black mb-7">
                    Work Experience
                  </h4>
                  <!-- Single Card -->
                  <div class="flex items-center pr-11 mb-9">
                    <div class="w-16 h-16 mr-8">
                      <img
                        src="https://finestwp.co/demos/html/jobcamp/image/l2/png/featured-job-logo-1.png"
                        alt=""
                      />
                    </div>
                    <div class="w-full">
                      <h3 class="mb-0">
                        <a class="text-lg font-semibold text-black" href="#"
                          >Masters in Art Design</a
                        >
                      </h3>
                      <a href="#" class="text-sm text-gray-500"
                        >Harvard University</a
                      >
                      <div
                        class="flex items-center justify-between text-sm text-gray-400"
                      >
                        <a href="#">Jun 2017 - Apr 2020 - 3 years</a>
                        <a href="#">
                          <img
                            src="https://finestwp.co/demos/html/jobcamp/image/svg/icon-loaction-pin-black.svg"
                            alt=""
                            class="inline-block mr-1"
                          />
                          Brylin, USA
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- Single Card End -->
                  <!-- Additional Work Experience Cards -->
                </div>
                <!-- Education Section Start -->
                <div class="p-5 border-t">
                  <h4 class="mt-5 text-lg font-semibold text-black mb-7">
                    Education
                  </h4>
                  <!-- Single Education Card -->
                  <div class="flex items-center pr-11 mb-9">
                    <div class="w-16 h-16 mr-8">
                      <img
                        src="https://finestwp.co/demos/html/jobcamp/image/svg/harvard.svg"
                        alt=""
                      />
                    </div>
                    <div class="w-full">
                      <h3 class="mb-0">
                        <a class="text-lg font-semibold text-black" href="#"
                          >Masters in Art Design</a
                        >
                      </h3>
                      <a href="#" class="text-sm text-gray-500"
                        >Harvard University</a
                      >
                      <div
                        class="flex items-center justify-between text-sm text-gray-400"
                      >
                        <a href="#">Jun 2017 - Apr 2020 - 3 years</a>
                        <a href="#">
                          <img
                            src="https://finestwp.co/demos/html/jobcamp/image/svg/icon-loaction-pin-black.svg"
                            alt=""
                            class="inline-block mr-1"
                          />
                          Brylin, USA
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- Additional Education Cards -->
                </div>
                <!-- Card Section End -->
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <!-- Excerpt Start -->
                <div class="p-5">
                  <form action="/">
                    <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                      <div class="mb-5">
                        <label
                          for="name3"
                          class="text-sm font-semibold text-black"
                          >Your Name</label
                        >
                        <input
                          id="name3"
                          type="text"
                          class="w-full p-2 border rounded-md"
                          placeholder="John Doe"
                        />
                      </div>
                      <div class="mb-5">
                        <label
                          for="email3"
                          class="text-sm font-semibold text-black"
                          >E-mail</label
                        >
                        <input
                          id="email3"
                          type="email"
                          class="w-full p-2 border rounded-md"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <!-- Additional form fields here -->
                    </div>
                  </form>
                </div>
              </div>
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
</script>
