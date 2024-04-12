import Axios from '@/services/axios/instance'

export default async function ($url) {
  console.log('url: ' + $url)
  if ($url) {
    return await Axios.get('/api' + $url)
  }
  return await Axios.get('/api/quizes')
}
