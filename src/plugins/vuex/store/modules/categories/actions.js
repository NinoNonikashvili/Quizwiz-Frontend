import getCategories from '@/services/axios/getCategories'
import router from '@/plugins/vue-router'

export default {
  handleGetCategories(context) {
    getCategories()
      .then((res) => {
        context.commit('setCategories', res.data)
      })
      .catch(() => router.push({ name: 'home' }))
  }
}
