import CategoryActions from '@/plugins/vuex/store/modules/quizes/actions'
import CategoryGetters from '@/plugins/vuex/store/modules/quizes/getters'
import CategoryMutations from '@/plugins/vuex/store/modules/quizes/mutations'

export default {
  namespaced: true,
  state() {
    return {
      quizes: null
    }
  },
  actions: CategoryActions,
  mutations: CategoryMutations,
  getters: CategoryGetters
}
