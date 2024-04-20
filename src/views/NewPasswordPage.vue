<script>
import FormComponent from '@/components/new-password/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'
import ToastSuccess from '@/components/shared/toast/ToastSuccess.vue'
import ToastWarning from '@/components/shared/toast/ToastWarning.vue'

export default {
  components: {
    AuthLayout,
    FormComponent,
    ToastWarning,
    ToastSuccess
  }
}
</script>

<template>
  <AuthLayout page="reset">
    <FormComponent />
  </AuthLayout>
  <ToastWarning
    v-if="this.$store.getters['errors/getErrorStatus'] === 'RESET_LINK_EXPIRED'"
    :text="this.$store.getters['errors/getErrorText']"
    :header="this.$store.getters['errors/getErrorTitle']"
  >
    <RouterLink
      :to="{ name: 'resetPass' }"
      class="text-white border border-whiter rounded-xl px-2 py-1 mt-2"
    >
      send again
    </RouterLink>
  </ToastWarning>

  <ToastSuccess
    v-if="this.$store.getters['errors/getErrorStatus'] === 'RESET_SUCCESS'"
    :text="this.$store.getters['errors/getErrorText']"
    :header="this.$store.getters['errors/getErrorTitle']"
  />
</template>
