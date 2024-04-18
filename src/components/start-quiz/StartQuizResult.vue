<script>
export default {
  props: {
    title: { required: true, type: String },
    text: { required: true },
    border: { required: true, type: Boolean },
    color: String
  }
}
</script>

<template>
  <div class="mb-3" :class="border ? 'border-b border-gray-300' : ''">
    <h4 class="font-inter font-medium text-base text-gray-700">{{ title }}</h4>
    <p
      class="font-inter font-medium text-base text-gray-700 mt-2 mb-3"
      :class="'text-[' + color + ']'"
    >
      {{ text }}
    </p>
  </div>
</template>
