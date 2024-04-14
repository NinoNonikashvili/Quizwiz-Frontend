<script>
import LoadMoreIcon from '@/components/icons/LoadMoreIcon.vue'

export default {
  components: {
    LoadMoreIcon
  }
}
</script>

<template>
  <button
    class="w-[10rem] flex items-center py-3 px-5 rounded-lg bg-[#F1F1F4] gap-2"
    :disabled="!this.$store.getters['quizes/getIsMorePage']"
  >
    <LoadMoreIcon color="#4B69FD" v-if="!this.$store.getters['quizes/getIsLoading']" />
    <div class="spinner" v-if="this.$store.getters['quizes/getIsLoading']"></div>
    <p class="font-inter font-semibold text-base text-purple-500">Load More</p>
  </button>
</template>

<style scoped>
.spinner {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid;
  border-color: #f1f1f4;
  border-right-color: #4b69fd;
  animation: spinner 1.2s infinite linear;
}

@keyframes spinner {
  to {
    transform: rotate(1turn);
  }
}
</style>
