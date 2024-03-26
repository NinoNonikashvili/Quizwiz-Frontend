<script>
import FormComponent from '@/components/register/FormComponent.vue'
import AuthLayout from '@/components/shared/AuthLayout.vue'

export default {
  components: {
    FormComponent,
    AuthLayout
  }
}
</script>

<template>
  <AuthLayout page="register">
    <FormComponent />
  </AuthLayout>
</template>
