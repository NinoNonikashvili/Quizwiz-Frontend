import Axios from '@/services/axios/instance'

export default async function sendAgain(url) {
  return await Axios.get(url)
}
