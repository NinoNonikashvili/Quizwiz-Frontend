import { createStore } from 'vuex'
import AuthActions from '@/plugins/vuex/store/actions'
import AuthGetters from '@/plugins/vuex/store/getters'
import AuthMutations from '@/plugins/vuex/store/mutations'
import Signup from '@/plugins/vuex/store/modules/signup/index'
import Sanctum from '@/plugins/vuex/store/modules/sanctum/index'
import verifyEmail from '@/plugins/vuex/store/modules/verify-email/index'
import Errors from '@/plugins/vuex/store/modules/errors/index'
import FooterData from '@/plugins/vuex/store/modules/footer/index'

const store = createStore({
  modules: {
    sanctum: Sanctum,
    signup: Signup,
    verifyEmail: verifyEmail,
    errors: Errors,
    footer: FooterData
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  actions: AuthActions,
  getters: AuthGetters,
  mutations: AuthMutations
})
export default store
