import Axios from '@/services/axios/instance'

export default async function verifyEmail(url) {
  return await Axios.get(url)
}
