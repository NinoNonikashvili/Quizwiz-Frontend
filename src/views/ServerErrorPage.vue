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
  <ErrorLayout title="Internal server error!" subTitle="Error 500" image="server" />
  <AppFooter />
</template>
