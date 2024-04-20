import sendAgain from '@/services/axios/email/sendAgain'
import verifyEmail from '@/services/axios/email/verifyEmail'

export default {
  verify(context, url) {
    verifyEmail(url).then(() => {
      context.commit('setIsEmailVerified', true)
    })
  },
  sendEmailAgain(context, url) {
    sendAgain(url).then(() => {
      context.commit('setIsEmailVerified', true)
    })
  }
}
