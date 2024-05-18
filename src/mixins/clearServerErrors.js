import store from '@/plugins/vuex/store'

export default {
  methods: {
    clearServerError() {
      if (store.getters['errors/getErrorStatus']) {
        this.$store.commit('errors/setError', { status: null })
      }
    }
  }
}
