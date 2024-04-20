import getSanctumTokens from '@/services/axios/sanctum'

export default {
  retrieveToken(context) {
    getSanctumTokens()
      .then(() => context.commit('setCsrfToken', true))
      .catch(() => context.commit('setCsrfToken', false))
  }
}
