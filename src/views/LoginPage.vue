<script>
import FormComponent from '@/components/login/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'

export default {
  components: {
    FormComponent,
    AuthLayout
  }
}
</script>

<template>
  <AuthLayout page="login">
    <FormComponent />
  </AuthLayout>
</template>
