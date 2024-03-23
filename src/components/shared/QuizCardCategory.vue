<script>
import DotDividerIcon from '@/components/icons/DotDividerIcon.vue'

export default {
  props: {
    categories: Array
  },
  components: {
    DotDividerIcon
  }
}
</script>

<template>
  <div v-if="categories.length !== 0" class="flex gap-3">
    <li v-for="(cat, index) in categories" :key="index" class="flex gap-3 items-center">
      <span class="font-inter font-semibold text-purple-500 text-sm leading-5">{{ cat }}</span>
      <span v-if="index !== categories.length - 1">
        <DotDividerIcon />
      </span>
    </li>
  </div>
</template>
