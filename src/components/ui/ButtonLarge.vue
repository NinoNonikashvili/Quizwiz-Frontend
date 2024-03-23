<script>
export default {
  props: {
    text: String,
    bg: String
  }
}
</script>
<template>
  <button
    class="w-full rounded-xl flex justify-center items-center py-[0.875rem] text-white font-inter font-semibold text-base"
    :class="bg"
  >
    {{ text }}
  </button>
</template>
