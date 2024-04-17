export default {
  updateQuizes(state, data) {
    state.quizes = state.quizes.concat(data)
  },
  setQuizes(state, data) {
    state.quizes = data
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
  setisMorePage(state, value) {
    state.isMorePage = value
  },
  resetCurrentPage(state) {
    state.currentPage = 1
  },
  incrementCurrentPage(state) {
    state.currentPage++
  },
  setSingleQuiz(state, data) {
    state.singleQuiz = data
  },
  setSimilarQuizes(state, data) {
    state.similarQuizes = data
  },
  setQuizQuestions(state, data) {
    state.quizQuestions = data
  }
}
