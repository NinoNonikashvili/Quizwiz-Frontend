import LevelActions from '@/plugins/vuex/store/modules/levels/actions'
import LevelGetters from '@/plugins/vuex/store/modules/levels/getters'
import LevelMutations from '@/plugins/vuex/store/modules/levels/mutations'

export default {
  namespaced: true,
  state() {
    return {
      levels: []
    }
  },
  actions: LevelActions,
  mutations: LevelMutations,
  getters: LevelGetters
}
