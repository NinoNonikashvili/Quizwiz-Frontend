export default {
  getLoginErrorCode(state) {
    return state.serverErrors.login.code
  },
  getLoginErrorMessage(state) {
    return state.serverErrors.login.message
  }
}
