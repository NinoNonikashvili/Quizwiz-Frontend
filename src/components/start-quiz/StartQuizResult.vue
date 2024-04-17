<script>
export default {
  props: {
    results: { required: true, type: Array },
    color: String
  }
}
</script>

<template>
  <div
    v-for="(result, index) in results"
    :key="index"
    class="mb-3"
    :class="results.length !== index + 1 ? 'border-b border-gray-300' : ''"
  >
    <h4 class="font-inter font-medium text-base text-gray-700">{{ result.title }}</h4>
    <p
      class="font-inter font-medium text-base text-gray-700 mt-2 mb-3"
      :class="'text-[' + result.color + ']'"
    >
      {{ result.text }}
    </p>
  </div>
</template>
