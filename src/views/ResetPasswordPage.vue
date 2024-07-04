<script>
import FormComponent from '@/components/reset-password/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'
import ToastSuccess from '@/components/shared/toast/ToastSuccess.vue'
import clearServerErrors from '@/mixins/clearServerErrors'


export default {
  components: {
    AuthLayout,
    FormComponent,
    ToastSuccess
  },
  mixins: [clearServerErrors],
  beforeRouteLeave() {
    this.clearServerError()
    return true
  }
}
</script>

<template>
  <AuthLayout page="reset">
    <FormComponent />
  </AuthLayout>
  <ToastSuccess
    v-if="this.$store.getters['errors/getErrorStatus'] === 'RESET_LINK_SENT'"
    :text="this.$store.getters['errors/getErrorText']"
    :header="this.$store.getters['errors/getErrorTitle']"
  />
</template>
