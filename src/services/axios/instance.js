import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000,
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: 'application/json'
  }
})
