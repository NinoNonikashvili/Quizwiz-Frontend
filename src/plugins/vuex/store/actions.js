import login from '@/services/axios/login'
import logout from '@/services/axios/logout'
import router from '@/plugins/vue-router/index'

export default {
  login(context, data) {
    console.log('log in request')
    login(data)
      .then((res) => {
        if (res.statusText === 'OK') {
          context.commit('setLoggedInState', true)
          context.commit('errors/setLoginError', res.status)
          console.log('logged in')
          router.push({ name: 'home' })
        } else {
          console.log('response not ok' + res.status, res)
          context.commit('errors/setLoginError', res.status)
          context.commit('setLoggedInState', false)
        }
      })
      .catch((err) => {
        console.log('some other error', err.code)
        context.commit('errors/setLoginError', err.code)
        context.commit('setLoggedInState', false)
      })
  },

  logout(context) {
    logout()
      .then((res) => {
        if (res.statusText === 'OK') {
          context.commit('setLoggedInState', false)
          router.push({ name: 'home' })
          console.log('logged out')
        } else {
          console.log(res.status, res.statusText)
        }
      })
      .catch((err) => {
        console.log(err.code)
        context.commit('setLoggedInState', false)
      })
  }
}
