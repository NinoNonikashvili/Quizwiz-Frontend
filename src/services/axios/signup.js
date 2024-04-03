import Axios from '@/services/axios/instance'

export default async function signup(data) {
  return await Axios.post('/api/register', data)
}
