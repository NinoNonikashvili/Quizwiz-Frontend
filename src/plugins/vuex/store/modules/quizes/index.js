import CategoryActions from '@/plugins/vuex/store/modules/quizes/actions'
import CategoryGetters from '@/plugins/vuex/store/modules/quizes/getters'
import CategoryMutations from '@/plugins/vuex/store/modules/quizes/mutations'

export default {
  namespaced: true,
  state() {
    return {
      quizes: [],
      isLoading: false,
      isMorePage: true
    }
  },
  actions: CategoryActions,
  mutations: CategoryMutations,
  getters: CategoryGetters
}
