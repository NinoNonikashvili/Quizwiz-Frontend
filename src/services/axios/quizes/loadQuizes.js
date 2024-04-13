import Axios from '@/services/axios/instance'

export default async function (params) {
  console.log(params)
  if (params) {
    return await Axios.get('/api/quizes', {
      params: params
    })
  }

  return await Axios.get('/api/quizes')
}
