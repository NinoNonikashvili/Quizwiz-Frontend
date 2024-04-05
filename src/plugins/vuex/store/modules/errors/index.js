import ErrorMutations from '@/plugins/vuex/store/modules/errors/mutations'
import ErrorGetters from '@/plugins/vuex/store/modules/errors/getters'
import Erroractions from '@/plugins/vuex/store/modules/errors/actions'

export default {
  namespaced: true,
  state() {
    return {
      serverErrors: {
        login: {
          code: null,
          message: null
        }
      }
    }
  },
  actions: Erroractions,
  getters: ErrorGetters,
  mutations: ErrorMutations
}
