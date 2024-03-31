import axios from 'axios'

export default {
  retrieveToken(context) {
    console.log('csrf up request')
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/sanctum/csrf-cookie',
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })
    instance.defaults.withCredentials = true
    instance.defaults.withXSRFToken = true

    instance().then((response) => console.log(response.status))

    //if success
    context.commit('setCsrfToken', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
