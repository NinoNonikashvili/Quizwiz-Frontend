import Axios from '@/services/axios/instance'

export default async function loadFooterData() {
  return await Axios.get('/footer')
}
