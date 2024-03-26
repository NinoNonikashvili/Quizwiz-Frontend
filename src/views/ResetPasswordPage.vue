<script>
import FormComponent from '@/components/reset-password/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'

export default {
  components: {
    AuthLayout,
    FormComponent
  }
}
</script>

<template>
  <AuthLayout page="reset">
    <FormComponent />
  </AuthLayout>
</template>
