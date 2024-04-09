export default {
  setLoggedInState(state, isLogedIn) {
    state.isLoggedIn = isLogedIn
  },
  setUser(state, data) {
    state.user = data
  }
}
