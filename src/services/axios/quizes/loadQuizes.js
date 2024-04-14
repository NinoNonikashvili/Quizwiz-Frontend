import Axios from '@/services/axios/instance'

export default async function (params) {
  return await Axios.get('/api/quizes', {
    params: params
  })
}
