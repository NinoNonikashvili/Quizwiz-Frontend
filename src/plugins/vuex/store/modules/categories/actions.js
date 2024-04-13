import getCategories from '@/services/axios/getCategories'

export default {
  handleGetCategories(context) {
    getCategories()
      .then((res) => {
        context.commit('setCategories', res.data)
      })
      .catch((err) => console.log(err))
  }
}
