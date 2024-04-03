import Axios from '@/services/axios/instance'

export default async function login(data) {
  return await Axios.post('/api/login', data)
}
