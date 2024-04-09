export default {
  setLoginError(state, code) {
    state.serverErrors.login.code = code
    let message
    switch (code) {
      case 200:
        message = null
        state.serverErrors.login.code = null
        break
      case 401:
        message = '401 needs to be solved'
        break
      case 403:
        message = 'verification link has expired!'
        break
      case 404:
        message = 'user not found!'
        break
      default:
        message = 'unknown error occured'
        break
    }
    state.serverErrors.login.message = message
  }
}
