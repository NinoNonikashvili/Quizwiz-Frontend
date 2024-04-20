export default {
  setError(state, payload) {
    state.status = payload.status
    switch (payload.status) {
      case 'VERIFICATION_LINK_SENT':
        state.title = 'Verify Email'
        state.text = 'check email to verify account'
        break
      case 'REGISTRATION_WRONG_INPUT':
        state.text = payload.text
        break
      case 'VERIFICATION_LINK_EXPIRED':
        state.title = 'Link Expired'
        state.text = 'verification link expired'
        break

      case 'LOGIN_WRONG_INPUT':
        state.text = payload.text
        break
      case 'LOGIN_SUCCESS':
        state.title = 'Success!'
        state.text = 'you have logged in successfully'
        break
      case 'RESET_LINK_SENT':
        state.title = 'Check Email'
        state.text = 'reset link was sent'
        break
      case 'RESET_LINK_EXPIRED':
        state.title = 'Link Expired'
        state.text = 'password reset link expired'
        break
      case 'RESET_SUCCESS':
        state.title = 'Success!'
        state.text = 'password changed successfully'
        break
      case 'LOGOUT_SUCCESS':
        state.title = 'Success!'
        state.text = 'logged out successfully'
        break
      case 'NOT_VERIFIED':
        state.title = 'Email not verified!'
        state.title = 'check email to verify.'
        break
      default:
        state.title = null
        state.title = null
    }
  }
}
