import { createStore } from 'vuex'
import AuthActions from '@/plugins/vuex/store/actions'
import AuthGetters from '@/plugins/vuex/store/getters'
import AuthMutations from '@/plugins/vuex/store/mutations'
import Signup from '@/plugins/vuex/store/modules/signup/index'
import Sanctum from '@/plugins/vuex/store/modules/sanctum/index'
import verifyEmail from '@/plugins/vuex/store/modules/verify-email/index'
import Errors from '@/plugins/vuex/store/modules/errors/index'
import FooterData from '@/plugins/vuex/store/modules/footer/index'
import ResetPassword from '@/plugins/vuex/store/modules/reset-password/index'
import Quizes from '@/plugins/vuex/store/modules/quizes/index'
import Categories from '@/plugins/vuex/store/modules/categories/index'
import Levels from '@/plugins/vuex/store/modules/levels/index'

const store = createStore({
  modules: {
    sanctum: Sanctum,
    signup: Signup,
    verifyEmail: verifyEmail,
    errors: Errors,
    footer: FooterData,
    resetPassword: ResetPassword,
    quizes: Quizes,
    categories: Categories,
    levels: Levels
  },
  state() {
    return {
      isLoggedIn: false,
      user: null
    }
  },
  actions: AuthActions,
  getters: AuthGetters,
  mutations: AuthMutations
})
export default store
