<script>
import StartQuiz from '@/components/start-quiz/StartQuiz.vue'
import store from '@/plugins/vuex/store/index'

export default {
  components: {
    StartQuiz
  },
  mounted() {
    let id = this.$route.params.id
    this.$store.dispatch('quizes/handleLoadQuizQuestions', id)
    store.dispatch('quizes/handleLoadSingleQuiz', id)
  },
  beforeRouteEnter(to) {
    let id = to.params.id
    if (!store.getters['quizes/getSingleQuiz']) {
      store.dispatch('quizes/handleLoadQuizQuestions', id)
      store.dispatch('quizes/handleLoadSingleQuiz', id)
    }
  }
}
</script>

<template>
  <StartQuiz />
</template>
