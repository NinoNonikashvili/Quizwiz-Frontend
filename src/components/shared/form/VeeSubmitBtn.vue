<script>
export default {
  props: {
    text: { type: String, required: true },
    errors: { type: Object, required: true }
  }
}
</script>

<template>
  <button
    class="mt-9 rounded-[0.625rem] font-inter font-semibold text-base bg-black text-white py-[1.125rem]"
  >
    {{ text }}
  </button>
</template>
