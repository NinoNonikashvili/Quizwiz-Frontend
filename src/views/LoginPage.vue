<script>
import FormComponent from '@/components/login/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'
import ToastSuccess from '@/components/shared/toast/ToastSuccess.vue'
import ToastWarning from '@/components/shared/toast/ToastWarning.vue'

export default {
  components: {
    FormComponent,
    AuthLayout,
    ToastSuccess,
    ToastWarning
  },
  data() {
    return {
      email: null,
      id: null
    }
  },
  mounted() {
    if (JSON.stringify(this.$route.params) === '{}') {
      return
    } else {
      this.id = this.$route.params.id
      const url = this.$route.fullPath.replace('/login/', 'api/')
      this.$store.dispatch('verifyEmail/verify', url)
    }
  },

  methods: {
    send() {
      const user_identificator = this.id ? this.id : this.email
      const url = 'api/email/verification-notification/' + user_identificator
      this.$store.dispatch('verifyEmail/sendEmailAgain', url)
    },
    onSetEmail(email) {
      this.email = email
    }
  }
}
</script>

<template>
  <div class="relative">
    <AuthLayout page="login">
      <FormComponent @set-email="onSetEmail" />
    </AuthLayout>

    <ToastWarning
      v-if="this.$store.getters['errors/getErrorStatus'] === 'VERIFICATION_LINK_EXPIRED'"
      :text="this.$store.getters['errors/getErrorText']"
      :header="this.$store.getters['errors/getErrorTitle']"
    >
      <button class="text-white border border-whiter rounded-xl px-2 py-1 mt-2" @click="send">
        send again
      </button>
    </ToastWarning>
    <ToastWarning
      v-if="this.$store.getters['errors/getErrorStatus'] === 'NOT_VERIFIED'"
      :text="this.$store.getters['errors/getErrorText']"
      :header="this.$store.getters['errors/getErrorTitle']"
    />
    <ToastSuccess
      v-if="this.$store.getters['errors/getErrorStatus'] === 'VERIFICATION_LINK_SENT'"
      :text="this.$store.getters['errors/getErrorText']"
      :header="this.$store.getters['errors/getErrorTitle']"
    />
  </div>
</template>
