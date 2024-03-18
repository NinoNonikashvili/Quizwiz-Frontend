<script>
import AppHeader from '../components/layout/AppHeader.vue'
import QuizCard from '../components/quiz/QuizCard.vue'
import CategoryFilter from '../components/quiz/CategoryFilter.vue'

export default {
  components: {
    AppHeader,
    QuizCard,
    CategoryFilter
  }
}
</script>

<template>
  <AppHeader />
  <CategoryFilter />

  <QuizCard />
</template>
