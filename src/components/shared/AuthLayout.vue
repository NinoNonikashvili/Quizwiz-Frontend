<script>
import LogoIcon from '@/components/icons/LogoIcon.vue'
import LinkToBack from '@/components/ui/LinkToBack.vue'

export default {
  props: {
    page: { type: String, required: true }
  },
  components: {
    LogoIcon,
    LinkToBack
  }
}
</script>

<template>
  <main class="w-full xl:w-screen xl:h-screen flex xl:overflow-hidden">
    <div class="hidden xl:block w-[46%] relative p-10">
      <img
        v-if="page === 'register'"
        src="@/assets/images/register-bg.png"
        alt="woman scanning some documents"
        class="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />
      <img
        v-if="page === 'login'"
        src="@/assets/images/login-bg.png"
        alt="woman scanning some documents"
        class="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />
      <img
        v-if="page === 'reset'"
        src="@/assets/images/forget-pass-bg.png"
        alt="woman scanning some documents"
        class="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />

      <RouterLink :to="{ name: 'home' }"><LogoIcon /></RouterLink>
    </div>

    <div class="w-full xl:w-[56%] py-8 px-5 xl:py-[2.75rem] xl:px-[3.375rem]">
      <div class="xl:mb-[3.125rem] mb-[2rem]">
        <LinkToBack />
      </div>
      <div class="pb-10 xl:pb-0 xl:py-[0.375rem] xl:px-[1.75rem]">
        <slot></slot>
      </div>
    </div>
  </main>
</template>
