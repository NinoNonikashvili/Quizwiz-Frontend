export default {
  getQuizes(state) {
    return state.quizes
  },
  getIsLoading(state) {
    return state.isLoading
  },
  getIsMorePage(state) {
    return state.isMorePage
  },
  getCurrentPage(state) {
    return state.currentPage
  },
  getSingleQuiz(state) {
    return state.singleQuiz
  },
  getSimilarQuizes(state) {
    return state.similarQuizes
  },
  getQuizQuestions(state) {
    return state.quizQuestions
  },
  getQuizResult(state) {
    return state.quizResult
  },
  getSearchedQuizes(state) {
    return state.searchedQuizes
  }
}
