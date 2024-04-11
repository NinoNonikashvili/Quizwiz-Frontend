import loadQuizes from '@/services/axios/quizes/loadCategories'

export default {
  handleLoadQuizes(context) {
    loadQuizes()
      .then((res) => {
        if (res.statusText === 'OK') {
          context.commit('setQuizes', res.data.data)
          return res.data
        } else {
          console.log(res.statusText)
        }
      })
      .catch((err) => console.log(err.code))
  }
}
