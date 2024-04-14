<script>
export default {
  props: {
    completed: { required: true, type: Boolean },
    fontBold: { required: true, type: Boolean },
    title: { required: true, type: String },
    text: { required: true }
  }
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <h4 class="font-inter font-semibold text-sm text-gray-900">{{ title }}</h4>
    <p class="font-inter font-normal text-sm text-gray-600" :class="{ 'opacity-30 ': !fontBold }">
      {{ text }}
    </p>
  </div>
</template>
