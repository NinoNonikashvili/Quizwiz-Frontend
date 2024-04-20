<script>
import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import ErrorLayout from '@/components/shared/ErrorLayout.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    ErrorLayout
  }
}
</script>

<template>
  <AppHeader :hasSearch="true" />
  <ErrorLayout title="Oops!" subTitle="Error 400" image="front" />
  <AppFooter />
</template>
