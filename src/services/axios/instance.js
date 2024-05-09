import axios from 'axios'
import router from '@/plugins/vue-router'
import store from '@/plugins/vuex/store/index'
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 3000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json'
  }
})
instance.interceptors.response.use(
  function (response) {
    if (response.data.status) {
      store.commit('errors/setError', response.data)
    }

    return response
  },
  function (error) {
    if (error.code === 'ECONNABORTED' || error.response.status === 500) {
      console.log(error)
      router.push({ name: 'internalError' })
    }
    if (error.response && error.response.data && error.response.data.status) {
      store.commit('errors/setError', error.response.data)
    }

    return
  }
)

export default instance
