import loadQuizes from '@/services/axios/quizes/loadQuizes'

export default {
  handleLoadQuizes(context, $url = null) {
    loadQuizes($url)
      .then((res) => {
        context.commit('setIsLoading', false)
        if (res.statusText === 'OK') {
          if (res.data.links.next === null) {
            context.commit('setisMorePage', false)
          }
          context.commit('setQuizes', res.data.data)
        } else {
          console.log(res.statusText)
        }
      })
      .catch((err) => {
        context.commit('setIsLoading', false)
        console.log(err)
      })
  }
}
