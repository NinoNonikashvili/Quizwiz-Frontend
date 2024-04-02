import getSanctumTokens from '@/services/axios/sanctum'

export default {
  retrieveToken(context) {
    console.log('csrf up request')
    getSanctumTokens().then((response) => console.log(response.status))

    //if success
    context.commit('setCsrfToken', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
