import store from '@/plugins/vuex/store'

export default {
  methods: {
    resetErrorState() {
      let timerID = setTimeout(() => {
        clearTimeout(timerID)
        store.commit('errors/setError', { status: null })
      }, 3000)
    }
  }
}
