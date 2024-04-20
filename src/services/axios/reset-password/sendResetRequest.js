import Axios from '@/services/axios/instance'

export default async function (data) {
  return await Axios.post('/api/forgot-password', data)
}
