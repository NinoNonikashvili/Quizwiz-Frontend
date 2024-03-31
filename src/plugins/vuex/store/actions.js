import axios from 'axios'

export default {
  login(context, data) {
    console.log('log in request')
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/login',
      method: 'post',
      headers: {
        Accept: 'application/json'
      }
    })
    instance.defaults.withCredentials = true
    instance.defaults.withXSRFToken = true

    instance({
      data: data
    }).then((response) => console.log(response.status))

    //if success
    context.commit('setLoggedInState', true)
    //else
    // context.commit('setCsrfToken', false)
  }
}
