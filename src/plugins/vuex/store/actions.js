import login from '@/services/axios/login'

export default {
  login(context, data) {
    console.log('log in request')
    login(data).then((result) => console.log(result))

    //if success
    context.commit('setLoggedInState', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
