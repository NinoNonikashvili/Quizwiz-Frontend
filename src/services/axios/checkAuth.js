import Axios from '@/services/axios/instance'

export default async function () {
  return await Axios.get('/api/check-auth-state')
}
