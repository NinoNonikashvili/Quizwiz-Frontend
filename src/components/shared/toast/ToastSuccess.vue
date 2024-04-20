<script>
import IconSuccess from '@/components/icons/IconSuccess.vue'
import toast from '@/mixins/toast'

export default {
  components: {
    IconSuccess
  },
  props: {
    text: { required: true, type: String },
    header: { required: true, type: String }
  },
  mixins: [toast],
  mounted() {
    this.resetErrorState()
  }
}
</script>

<template>
  <div
    class="radial bg-black w-[21.5rem] rounded-lg border-b-2 border-success-500 flex absolute top-16 right-5 xl:right-12"
  >
    <div class="flex w-[20%] items-center justify-center">
      <IconSuccess />
    </div>
    <div class="w-[80%] py-3">
      <h3 class="font-raleway font-bold text-lg text-white">{{ header }}</h3>
      <p class="font-inter font-normal text-sm text-gray-150">{{ text }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.radial {
  background: black;
  background-image: radial-gradient(circle at 11%, rgba(1, 225, 123, 0.3) 0%, rgba(0, 0, 0, 1) 20%);
}
</style>
