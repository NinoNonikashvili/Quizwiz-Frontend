import Axios from '@/services/axios/instance'

export default async function (data) {
  // to be changed to real endpoint
  console.log(data)
  return await Axios.post('/api/forgot-password', data)
}
