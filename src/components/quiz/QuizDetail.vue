<script>
export default {
  props: {
    completed: Boolean,
    title: String,
    text: String
  }
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <h4 class="font-inter font-semibold text-sm text-gray-900">{{ title }}</h4>
    <p class="font-inter font-normal text-sm text-gray-600" :class="{ 'opacity-30 ': !completed }">
      {{ text }}
    </p>
  </div>
</template>
