<script>
import DotDividerIcon from '@/components/icons/DotDividerIcon.vue'

export default {
  props: {
    categories: Array,
    color: { type: String, default: 'text-purple-500' }
  },
  components: {
    DotDividerIcon
  }
}
</script>

<template>
  <div v-if="categories.length !== 0" class="flex gap-3">
    <li v-for="(cat, index) in categories" :key="index" class="flex gap-3 items-center">
      <span class="font-inter font-semibold text-sm leading-5" :class="color">{{ cat.title }}</span>
      <span v-if="index !== categories.length - 1">
        <DotDividerIcon />
      </span>
    </li>
  </div>
</template>
