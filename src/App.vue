<script>
export default {
  methods: {
    async initialRequests() {
      // sanctum token
      if (!this.$store.getters['sanctum/getToken']) {
        console.log('start request')
        let result = await this.$store.dispatch('sanctum/retrieveToken')
        console.log(result)
      }

      //check if remembered user
      await this.$store.dispatch('handleCheckAuth')
      if (!this.$store.getters['footer/getFooterData']) {
        this.$store.dispatch('footer/handleFooterRequest')
      }
    }
  },
  beforeMount() {
    this.initialRequests()
  }
}
</script>

<template>
  <routerView />
</template>
