import sendResetRequest from '@/services/axios/reset-password/sendResetRequest'
import sendNewPassword from '@/services/axios/reset-password/sendNewPassword'

export default {
  handleResetRequestSent(_, data) {
    sendResetRequest(data)
      .then((res) => {
        if (res.statusText === 'OK') {
          console.log('email sent')
        } else {
          console.log('error')
        }
      })
      .catch((err) => {
        console.log('err in catch ' + err.code)
      })
  },
  handleSendNewPassword(_, data) {
    sendNewPassword(data)
      .then((res) => {
        if (res.statusText === 'OK') {
          console.log('PASSWORD updated successfully')
        } else {
          console.log(res.statusText)
        }
      })
      .catch((err) => console.log(err.code))
  }
}
