<script>
export default {
  beforeMount() {
    // sanctum token
    if (!this.$store.getters['sanctum/getToken']) {
      this.$store.dispatch('sanctum/retrieveToken')
    }

    //check if remembered user
    this.$store.dispatch('handleCheckAuth')
  }
}
</script>

<template>
  <routerView />
</template>
