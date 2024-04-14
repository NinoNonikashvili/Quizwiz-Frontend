import Axios from '@/services/axios/instance'

export default async function (params) {
  console.log('query')
  console.log(params)
  return await Axios.get('/api/quizes', {
    params: params
  })
}
