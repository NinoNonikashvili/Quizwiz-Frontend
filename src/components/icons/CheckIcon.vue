<script>
export default {
  props: {
    color: String
  }
}
</script>
<template>
  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.6668 1.5L4.25016 7.91667L1.3335 5"
      :stroke="color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
