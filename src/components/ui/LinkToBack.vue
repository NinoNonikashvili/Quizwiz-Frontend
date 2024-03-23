<script>
import LeftIcon from '@/components/icons/LeftIcon.vue'

export default {
  components: {
    LeftIcon
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<template>
  <button @click="goBack" class="flex items-center gap2">
    <LeftIcon />
    <p class="font-inter font-medium text-sm text-gray-500">Back</p>
  </button>
</template>
