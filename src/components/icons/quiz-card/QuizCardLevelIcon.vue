<script>
export default {
  props: {
    color: { type: String, required: true }
  }
}
</script>

<template>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8333 1.66669L2.5 11.6667H10L9.16667 18.3334L17.5 8.33335H10L10.8333 1.66669Z"
      :stroke="color"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
