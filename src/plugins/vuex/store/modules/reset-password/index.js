import ResetActions from '@/plugins/vuex/store/modules/reset-password/actions'

export default {
  namespaced: true,
  state() {
    return {
      isResetSend: false
    }
  },
  actions: ResetActions
}
