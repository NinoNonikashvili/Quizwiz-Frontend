export default {
  setQuizes(state, data) {
    state.quizes = state.quizes.concat(data)
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
  setisMorePage(state, value) {
    state.isMorePage = value
  },
  setCurrentPage(state, value) {
    state.currentPage = value
  },
  incrementCurrentPage(state) {
    return state.currentPage++
  }
}
