import loadQuizes from '@/services/axios/quizes/loadQuizes'

export default {
  handleLoadQuizes(context, payload = null) {
    loadQuizes(payload)
      .then((res) => {
        context.commit('setIsLoading', false)
        if (res.data.links.next === null) {
          context.commit('setisMorePage', false)
        }
        context.commit('setQuizes', res.data.data)
      })
      .catch((err) => {
        context.commit('setIsLoading', false)
        console.log(err)
      })
  }
}
