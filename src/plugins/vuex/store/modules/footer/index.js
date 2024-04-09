import FooterGetters from '@/plugins/vuex/store/modules/footer/getters'
import FooterActions from '@/plugins/vuex/store/modules/footer/actions'
import FooterMutations from '@/plugins/vuex/store/modules/footer/mutations'

export default {
  namespaced: true,
  state() {
    return {
      footerData: null
    }
  },
  actions: FooterActions,
  getters: FooterGetters,
  mutations: FooterMutations
}
