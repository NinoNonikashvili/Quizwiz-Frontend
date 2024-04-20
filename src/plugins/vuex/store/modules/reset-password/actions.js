import sendResetRequest from '@/services/axios/reset-password/sendResetRequest'
import sendNewPassword from '@/services/axios/reset-password/sendNewPassword'

export default {
  handleResetRequestSent(_, data) {
    sendResetRequest(data)
  },
  handleSendNewPassword(_, data) {
    sendNewPassword(data)
  }
}
