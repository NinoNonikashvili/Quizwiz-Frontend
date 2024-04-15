<script>
import AppHeader from '@/components/shared/AppHeader.vue'
import CategoryFilter from '@/components/quizes/CategoryFilter.vue'
import GeneralFilter from '@/components/quizes/GeneralFilter.vue'
import QuizesWrapper from '@/components/quizes/QuizesWrapper.vue'

export default {
  components: {
    AppHeader,
    CategoryFilter,
    GeneralFilter,
    QuizesWrapper
  },
  watch: {
    '$route.query': {
      handler(newQuery) {
        this.$store.dispatch('quizes/handleLoadQuizes', newQuery)
      },
      deep: true
    }
  }
}
</script>

<template>
  <AppHeader />
  <main class="px-4 xl:px-24">
    <div class="w-full xl:w-[92%] block xl:inline-block">
      <CategoryFilter />
    </div>
    <GeneralFilter />
    <QuizesWrapper />
  </main>
</template>
