import Axios from '@/services/axios/instance'

export default async function (id) {
  return await Axios.get('/api/similar-quizes/' + id)
}
