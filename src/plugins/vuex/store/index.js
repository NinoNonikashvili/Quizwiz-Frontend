import { createStore } from 'vuex'
import AuthActions from '@/plugins/vuex/store/actions'
import AuthGetters from '@/plugins/vuex/store/getters'
import AuthMutations from '@/plugins/vuex/store/mutations'
import Signup from '@/plugins/vuex/store/modules/signup/index'
import Sanctum from '@/plugins/vuex/store/modules/sanctum/index'

const store = createStore({
  modules: {
    sanctum: Sanctum,
    signup: Signup
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
