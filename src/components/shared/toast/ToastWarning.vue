<script>
import IconWarning from '@/components/icons/IconWarning.vue'
import toast from '@/mixins/toast'

export default {
  components: {
    IconWarning
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
    class="radial w-[21.5rem] rounded-lg border-b-4 shadow-2xl border-warning-500 flex absolute top-16 right-5 xl:right-12"
  >
    <div class="flex w-[20%] items-center justify-center">
      <IconWarning />
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
  background-image: radial-gradient(
    circle at 11%,
    rgba(255, 212, 38, 0.2) 0%,
    rgba(0, 0, 0, 1) 20%
  );
}
</style>
