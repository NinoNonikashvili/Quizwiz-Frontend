<script>
import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import MainContent from '@/components/home/MainContent.vue'
import ToastSuccess from '@/components/shared/toast/ToastSuccess.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    MainContent,
    ToastSuccess
  }
}
</script>

<template>
  <AppHeader :hasSearch="true" />
  <MainContent />
  <ToastSuccess
    v-if="this.$store.getters['errors/getErrorStatus'] === 'LOGIN_SUCCESS'"
    :text="this.$store.getters['errors/getErrorText']"
    :header="this.$store.getters['errors/getErrorTitle']"
  />
  <AppFooter />
</template>
