<script>
import BackRoundArrowIcon from '@/components/icons/BackRoundArrowIcon.vue'

export default {
  props: {
    image: { required: true },
    title: { required: true, type: String },
    subTitle: { required: true, type: String }
  },
  components: {
    BackRoundArrowIcon
  }
}
</script>

<template>
  <section class="flex flex-col items-center py-[3.75rem] xl:py-10 px-12">
    <h1 class="font-raleway font-black text-[2.5rem] text-black mb-4">{{ title }}</h1>
    <h2 class="font-inter font-bold text-lg text-black mb-8">{{ subTitle }}</h2>
    <img
      v-if="image === 'front'"
      src="/public/images/404.png"
      alt=""
      class="max-w-[26.875rem] object-cover mb-8"
    />
    <img
      v-if="image === 'server'"
      src="/public/images/500.png"
      alt=""
      class="max-w-[26.875rem] object-cover mb-8"
    />
    <RouterLink class="flex gap-2 items-center" :to="{ name: 'home' }">
      <BackRoundArrowIcon />
      <span class="font-inter font-normal text-lg text-purple-500">Go Home</span>
    </RouterLink>
  </section>
</template>
