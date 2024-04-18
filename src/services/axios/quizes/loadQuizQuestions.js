import Axios from '@/services/axios/instance'

export default async function (id) {
  console.log(id)
  return await Axios.get('/api/test/' + id)
}
