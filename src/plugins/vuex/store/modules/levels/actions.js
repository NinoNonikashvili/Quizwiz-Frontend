import getLevels from '@/services/axios/getLevels'

export default {
  handleGetLevels(context) {
    getLevels()
      .then((res) => {
        context.commit('setLevels', res.data)
      })
      .catch((err) => console.log(err))
  }
}
