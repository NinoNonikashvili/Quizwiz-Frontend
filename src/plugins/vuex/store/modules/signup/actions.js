import axios from 'axios'

export default {
  signup(context, payload) {
    console.log('sign up request')

    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/register',
      method: 'post',
      headers: {
        Accept: 'application/json'
      }
    })
    instance.defaults.withCredentials = true
    instance.defaults.withXSRFToken = true

    instance({
      data: payload
    }).then((response) => console.log(response.status))

    //if success
    context.commit('setUserCreatedState', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
