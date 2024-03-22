<script>
import AppHeader from '@/components/layout/AppHeader.vue'
// import QuizCard from '../components/quiz/QuizCard.vue'
import CategoryFilter from '@/components/quiz/CategoryFilter.vue'
import GeneralFilter from '@/components/quiz/GeneralFilter.vue'

export default {
  components: {
    AppHeader,
    // QuizCard,
    CategoryFilter,
    GeneralFilter
  }
}
</script>

<template>
  <AppHeader />
  <CategoryFilter />
  <GeneralFilter />
  <!-- <QuizCard /> -->
</template>
