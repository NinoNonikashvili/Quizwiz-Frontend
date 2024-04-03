import EmailGetters from '@/plugins/vuex/store/modules/verify-email/getters'
import EmailMutations from '@/plugins/vuex/store/modules/verify-email/mutations'
import EmailActions from '@/plugins/vuex/store/modules/verify-email/actions'

export default {
  namespaced: true,
  state() {
    return {
      isEmailVerified: false
    }
  },
  actions: EmailActions,
  getters: EmailGetters,
  mutations: EmailMutations
}
