import signUp from '@/services/axios/signup'

export default {
  signup(context, data) {
    signUp(data).then(() => context.commit('setUserCreatedState', true))
  }
}
