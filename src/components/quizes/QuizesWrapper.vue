<script>
import QuizCard from '@/components/shared/QuizCard.vue'

export default {
  components: {
    QuizCard
  }
}
</script>

<template>
  <div class="py-10 flex gap-8 flex-wrap" v-if="this.$store.getters['quizes/getQuizes']">
    <div v-for="(quiz, index) in this.$store.getters['quizes/getQuizes']" :key="index">
      <QuizCard :quiz="quiz" />
    </div>
  </div>
  <div class="mb-16">
    <button>Load More</button>
  </div>
</template>
