import login from '@/services/axios/login'
import logout from '@/services/axios/logout'
import router from '@/plugins/vue-router/index'
import checkAuth from '@/services/axios/checkAuth'

export default {
  login(context, data) {
    login(data)
      .then((res) => {
        context.commit('setLoggedInState', true)
        context.commit('setUser', res.data.data)
        router.push({ name: 'home' })
      })
      .catch(() => {
        context.commit('setLoggedInState', false)
      })
  },

  logout(context) {
    logout()
      .then(() => {
        context.commit('setLoggedInState', false)
        context.commit('setUser', null)
        router.push({ name: 'home' })
      })
      .catch(() => {
        context.commit('setLoggedInState', false)
      })
  },
  handleCheckAuth(context) {
    checkAuth()
      .then((res) => {
        if (res.data.data) {
          context.commit('setLoggedInState', true)
        } else {
          context.commit('setLoggedInState', false)
        }
        context.commit('setUser', res.data.data)
      })
      .catch(() => router.push({ name: 'home' }))
  }
}
