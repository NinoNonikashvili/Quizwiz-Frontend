import Axios from '@/services/axios/instance'

export default async function getSanctumTokens() {
  return await Axios.get('/sanctum/csrf-cookie')
}
