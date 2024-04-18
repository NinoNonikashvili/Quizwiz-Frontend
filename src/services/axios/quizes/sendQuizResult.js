import Axios from '@/services/axios/instance'

export default async function (payload) {
  return await Axios.post('/api/results/' + payload.id, payload.data)
}
