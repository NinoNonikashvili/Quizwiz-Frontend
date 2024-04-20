import getLevels from '@/services/axios/getLevels'
import router from '@/plugins/vue-router'

export default {
  handleGetLevels(context) {
    getLevels()
      .then((res) => {
        context.commit('setLevels', res.data)
      })
      .catch(() => router.push({ name: 'home' }))
  }
}
