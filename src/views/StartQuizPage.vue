<script>
import StartQuiz from '@/components/start-quiz/StartQuiz.vue'

export default {
  components: {
    StartQuiz
  },
  mounted() {
    let id = this.$route.params.id
    this.$store.dispatch('quizes/handleLoadQuizQuestions', id)
    if (!this.$store.getters['quizes/getSingleQuiz']) {
      this.$store.dispatch('quizes/handleLoadSingleQuiz', id)
    }
  }
}
</script>

<template>
  <StartQuiz />
</template>
