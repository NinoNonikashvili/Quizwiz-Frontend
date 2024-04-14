import CategoryActions from '@/plugins/vuex/store/modules/categories/actions'
import CategoryGetters from '@/plugins/vuex/store/modules/categories/getters'
import CategoryMutations from '@/plugins/vuex/store/modules/categories/mutations'

export default {
  namespaced: true,
  state() {
    return {
      categories: [],
      selectedCategories: []
    }
  },
  actions: CategoryActions,
  mutations: CategoryMutations,
  getters: CategoryGetters
}
