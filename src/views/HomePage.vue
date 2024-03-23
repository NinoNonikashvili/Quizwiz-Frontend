<script>
import AppHeader from '@/components/shared/AppHeader.vue'
import AppFooter from '@/components/shared/AppFooter.vue'
import MainContent from '@/components/home/MainContent.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    MainContent
  }
}
</script>

<template>
  <AppHeader :isHome="true" />
  <MainContent />
  <AppFooter />
</template>
