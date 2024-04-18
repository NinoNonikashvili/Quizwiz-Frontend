import QuizesActions from '@/plugins/vuex/store/modules/quizes/actions'
import QuizesGetters from '@/plugins/vuex/store/modules/quizes/getters'
import QuizesMutations from '@/plugins/vuex/store/modules/quizes/mutations'

export default {
  namespaced: true,
  state() {
    return {
      quizes: [],
      isLoading: false,
      isMorePage: true,
      currentPage: 1,
      singleQuiz: null,
      similarQuizes: null,
      quizQuestions: null,
      quizResult: null,
      searchedQuizes: false
    }
  },
  actions: QuizesActions,
  mutations: QuizesMutations,
  getters: QuizesGetters
}
