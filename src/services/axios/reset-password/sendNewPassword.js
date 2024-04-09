import Axios from '@/services/axios/instance'

export default async function (data) {
  return await Axios.post('/api/reset-password', data)
}
