import signUp from '@/services/axios/signup'

export default {
  signup(context, data) {
    console.log('sign up request')

    signUp(data).then((result) => console.log(result))

    //if success
    context.commit('setUserCreatedState', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
