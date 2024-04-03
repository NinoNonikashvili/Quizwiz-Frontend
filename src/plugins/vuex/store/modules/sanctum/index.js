import SanctumActions from '@/plugins/vuex/store/modules/sanctum/actions'
import SanctumGetters from '@/plugins/vuex/store/modules/sanctum/getters'
import SanctumMutations from '@/plugins/vuex/store/modules/sanctum/mutations'
export default {
  namespaced: true,
  state() {
    return {
      CsrfToken: null
    }
  },
  actions: SanctumActions,
  getters: SanctumGetters,
  mutations: SanctumMutations
}
