import loadFooterData from '@/services/axios/footer'

export default {
  handleFooterRequest(context) {
    loadFooterData().then((res) => {
      context.commit('setFooterData', res.data.data)
    })
  }
}
