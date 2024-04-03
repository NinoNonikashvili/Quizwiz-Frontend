<script>
import FormComponent from '@/components/login/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'

export default {
  components: {
    FormComponent,
    AuthLayout
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
  <AuthLayout page="login">
    <FormComponent @set-email="onSetEmail" />
  </AuthLayout>
  <div>{{ $route.params }}</div>
  <div>{{ new Date($route.query.expires * 1000) }}</div>
  <div @click="send">send again</div>
</template>
