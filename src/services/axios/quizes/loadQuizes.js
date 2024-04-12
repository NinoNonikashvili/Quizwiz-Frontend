import Axios from '@/services/axios/instance'

export default async function (payload) {
  console.log(payload)
  if (payload) {
    if (payload.query) {
      return await Axios.get('/api' + payload.query)
    }
    if (payload.page) {
      return await Axios.get('/api/quizes?totalPage=' + payload.page)
    }
  }

  return await Axios.get('/api/quizes')
}
