<script>
import IconError from '@/components/icons/IconError.vue'

export default {
  components: {
    IconError
  },
  props: {
    text: { required: true, type: String },
    header: { required: true, type: String }
  }
}
</script>

<template>
  <div
    class="radial bg-black w-[21.5rem] rounded-lg border-b-2 border-error-500 flex absolute top-16 right-5 xl:right-12"
  >
    <div class="flex w-[20%] items-center justify-center">
      <IconError />
    </div>
    <div class="w-[80%] py-3">
      <h3 class="font-raleway font-bold text-lg text-white">{{ header }}</h3>
      <p class="font-inter font-normal text-sm text-gray-150">{{ text }}</p>
    </div>
  </div>
</template>

<style scoped>
.radial {
  background: black;
  background-image: radial-gradient(circle at 11%, rgba(240, 67, 73, 0.3) 0%, rgba(0, 0, 0, 1) 20%);
}
</style>
