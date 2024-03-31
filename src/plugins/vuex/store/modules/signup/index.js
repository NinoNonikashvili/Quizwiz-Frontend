import SignupActions from '@/plugins/vuex/store/modules/signup/actions'
import SignupGetters from '@/plugins/vuex/store/modules/signup/getters'
import SignupMutations from '@/plugins/vuex/store/modules/signup/mutations'

export default {
  namespaced: true,
  state() {
    return {
      isUserCreated: false
    }
  },
  actions: SignupActions,
  getters: SignupGetters,
  mutations: SignupMutations
}
