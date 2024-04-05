// import loadFooterData from '@/services/axios/footer'

export default {
  handleFooterRequest(context) {
    const data = {
      email: 'example@email.com',
      phone: '+995 889 990 934',
      socials: {
        Facebook: '#',
        Instagram: '#'
      }
    }
    context.commit('setFooterData', data)
    console.log('footer data set successfully')
    // loadFooterData
    //   .then((res) => {
    //     if (res.statusText === 'OK') {
    //       console.log('footer data loaded successfully')
    //       return res.JSON()
    //     }
    //   })
    //   .then((data) => {
    //     context.commit('setFooterData', data)
    //     console.log('footer data set successfully')
    //   })
    //   .catch((err) => {
    //     console.log('error loading footer data' + err.code)
    //   })
  }
}
