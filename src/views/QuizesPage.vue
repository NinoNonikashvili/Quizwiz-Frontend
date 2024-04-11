<script>
import AppHeader from '@/components/shared/AppHeader.vue'
import QuizCard from '../components/shared/QuizCard.vue'
import CategoryFilter from '@/components/quizes/CategoryFilter.vue'
import GeneralFilter from '@/components/quizes/GeneralFilter.vue'

export default {
  components: {
    AppHeader,
    QuizCard,
    CategoryFilter,
    GeneralFilter
  }
}
</script>

<template>
  <AppHeader />
  <CategoryFilter />
  <GeneralFilter />
  <QuizCard />
  <div>{{ this.$store.getters['quizes/getQuizes'] }}</div>
</template>
