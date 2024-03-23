<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'

export default {
  name: 'AppFooter',
  components: {
    LogoIcon
  }
}
</script>

<template>
  <footer class="py-6">
    <div class="px-10 py-6 flex flex-col xl:flex-row xl:gap-28 items-start">
      <div class="border-b border-gray-300 pb-6 xl:border-b-0 w-full xl:w-fit">
        <LogoIcon />
      </div>
      <ul class="py-6 xl:py-0 flex flex-col gap-10 xl:flex-row xl:gap-24">
        <li>
          <h3 class="mb-4 xl:mb-6 font-inter font-medium text-sm text-gray-900 leading-5">
            Content
          </h3>
          <p class="font-inter font-medium text-xs text-gray-600 leading-5 mb-6">Quizzes</p>
        </li>
        <li>
          <h3 class="mb-4 xl:mb-6 font-inter font-medium text-sm text-gray-900 leading-5">
            Contact us
          </h3>
          <p class="font-inter font-medium text-xs text-gray-600 leading-5 mb-6">
            Email: quizwiz@gmail.com
          </p>
          <p class="font-inter font-medium text-xs text-gray-600 leading-5 mb-6">
            Tel: +995 328989
          </p>
        </li>
        <li>
          <h3 class="mb-4 xl:mb-6 font-inter font-medium text-sm text-gray-900 leading-5">
            Social media
          </h3>
          <a class="font-inter font-medium text-xs text-gray-600 leading-5 mb-6 block" href="#"
            >Facebook</a
          >
          <a class="font-inter font-medium text-xs text-gray-600 leading-5 mb-6 block" href="#"
            >Instagram</a
          >
        </li>
      </ul>
    </div>
    <div
      class="w-full bg-white border-t border-gray-300 py-7 px-10 xl:py-6 xl:px-24 flex justify-start xl:justify-end"
    >
      <p class="font-raleway font-medium text-xs text-gray-500 leading-4">
        © 2024 QW. All rights reserved
      </p>
    </div>
  </footer>
</template>
