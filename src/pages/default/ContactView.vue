<script setup lang="ts"></script>

<template>
  <section>
    <div
      class="container px-5 mx-auto pt-[60px] py-[30px] desktop:pt-[120px] pb-[30px] desktop:pb-[60px]"
    >
      <h1 class="text-[52px] leading-[64px] font-semibold mb-[60px]">
        Biz bilan bog'laning
      </h1>
      <div class="flex flex-wrap gap-4">
        <a
          href="tel:+998692341430"
          class="w-[280px] flex p-[8px_32px_8px_8px] items-center gap-[16px] label-md bg-gray-100 animate__fadeInUp animate__animated animate__animated--end"
          data-aos="animate__fadeInUp"
        >
          <img
            data-src="https://smultron.software/content/uploads/2024/02/jakub-kozak-1-56x56.png"
            width="56"
            height="56"
            alt=""
            class="size-[56px] bg-white"
            src="https://smultron.software/content/uploads/2024/02/jakub-kozak-1-56x56.png"
            style="
              --smush-placeholder-width: 56px;
              --smush-placeholder-aspect-ratio: 56/56;
            "
          /><noscript
            ><img
              src="https://smultron.software/content/uploads/2024/02/jakub-kozak-1-56x56.png"
              width="56"
              height="56"
              alt=""
              class="size-[56px] bg-white"
          /></noscript>
          <span>+998 (69) 234-14-30</span>
        </a>
        <a
          href="mailto:nammqi_info@edu.uz"
          class="w-[280px] bg-gray-100 flex p-[8px_32px_8px_8px] items-center gap-[16px] label-md animate__fadeInUp animate__animated animate__animated--end"
          data-aos="animate__fadeInUp"
          data-aos-delay="100"
        >
          <span class="overflow-hidden bg-white">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_3454_75564"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="16"
                y="16"
                width="24"
                height="24"
              >
                <rect
                  x="16"
                  y="16"
                  width="24"
                  height="24"
                  fill="#D9D9D9"
                ></rect>
              </mask>
              <g mask="url(#mask0_3454_75564)">
                <path
                  d="M24 27C24.2833 27 24.5208 26.9042 24.7125 26.7125C24.9042 26.5208 25 26.2833 25 26C25 25.7167 24.9042 25.4792 24.7125 25.2875C24.5208 25.0958 24.2833 25 24 25C23.7167 25 23.4792 25.0958 23.2875 25.2875C23.0958 25.4792 23 25.7167 23 26C23 26.2833 23.0958 26.5208 23.2875 26.7125C23.4792 26.9042 23.7167 27 24 27ZM28 27C28.2833 27 28.5208 26.9042 28.7125 26.7125C28.9042 26.5208 29 26.2833 29 26C29 25.7167 28.9042 25.4792 28.7125 25.2875C28.5208 25.0958 28.2833 25 28 25C27.7167 25 27.4792 25.0958 27.2875 25.2875C27.0958 25.4792 27 25.7167 27 26C27 26.2833 27.0958 26.5208 27.2875 26.7125C27.4792 26.9042 27.7167 27 28 27ZM32 27C32.2833 27 32.5208 26.9042 32.7125 26.7125C32.9042 26.5208 33 26.2833 33 26C33 25.7167 32.9042 25.4792 32.7125 25.2875C32.5208 25.0958 32.2833 25 32 25C31.7167 25 31.4792 25.0958 31.2875 25.2875C31.0958 25.4792 31 25.7167 31 26C31 26.2833 31.0958 26.5208 31.2875 26.7125C31.4792 26.9042 31.7167 27 32 27ZM18 38V20C18 19.45 18.1958 18.9792 18.5875 18.5875C18.9792 18.1958 19.45 18 20 18H36C36.55 18 37.0208 18.1958 37.4125 18.5875C37.8042 18.9792 38 19.45 38 20V32C38 32.55 37.8042 33.0208 37.4125 33.4125C37.0208 33.8042 36.55 34 36 34H22L18 38ZM21.15 32H36V20H20V33.125L21.15 32Z"
                  fill="#F24B88"
                ></path>
              </g>
            </svg>
          </span>
          <span> nammqi_info@edu.uz </span>
        </a>
      </div>
    </div>
    <div class="container mx-auto px-5 py-[120px] xl:py-[80px] md:py-[60px]">
      <div class="px-[12px] xl:max-w-full">
        <div
          class="flex grid-cols-2 md:grid-cols-1 gap-[60px] xl:gap-[40px] items-center"
        >
          <div>
            <h2
              class="text-[40px] md:text-[35px] sm:text-[30px] xxs:text-[28px] font-medium text-etBlack mb-[7px]"
            >
              Qandaydir savolingiz bormi?
            </h2>
            <p class="text-etGray font-light text-[16px] mb-[38px]">
              Har qanday qiziqtirgan savolingiz bo'lsa so'rang! Albatta javob
              beramiz!
            </p>

            <form
              @submit.prevent
              class="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]"
            >
              <div>
                <label
                  for="et-contact-name"
                  class="font-lato font-semibold text-etBlack block mb-[12px]"
                  >Ism-familiyangiz*</label
                >
                <input
                  type="text"
                  name="name"
                  id="et-contact-name"
                  placeholder="Ism-familiya"
                  class="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                />
              </div>
              <div>
                <label
                  for="et-contact-email"
                  class="font-lato font-semibold text-etBlack block mb-[12px]"
                  >Email*</label
                >
                <input
                  type="email"
                  name="email"
                  id="et-contact-email"
                  placeholder="Email"
                  class="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none"
                />
              </div>
              <div class="col-span-2 xxs:col-span-1">
                <label
                  for="et-contact-message"
                  class="font-lato font-semibold text-etBlack block mb-[12px]"
                  >Xabaringiz*</label
                >
                <textarea
                  name="message"
                  id="et-contact-message"
                  placeholder="Xabar..."
                  class="border border-[#ECECEC] h-[145px] p-[20px] rounded-[4px] w-full focus:outline-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="bg-primary-blue h-[55px] px-[24px] cursor-pointer text-[16px] font-medium text-white hover:opacity-80"
                >
                  Jo'natish
                  <span class="icon pl-[10px]"
                    ><i class="fa-solid fa-arrow-right-long"></i
                  ></span>
                </button>
              </div>
            </form>
          </div>

          <!-- left side contact form -->
          <div></div>
        </div>
      </div>
    </div>
  </section>
</template>
