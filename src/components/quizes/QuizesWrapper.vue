<script>
import QuizCard from '@/components/shared/QuizCard.vue'
import ButtonLoadMore from '@/components/ui/ButtonLoadMore.vue'

export default {
  components: {
    QuizCard,
    ButtonLoadMore
  },
  data() {
    return {
      page: 1
    }
  },

  methods: {
    fetchQuizes() {
      this.$store.commit('quizes/setIsLoading', true)
      let page = { page: ++this.page }
      this.$router.push({ name: 'quizes', query: { ...this.$route.query, ...page } })
      this.$store.dispatch('quizes/handleLoadQuizes', this.$route.fullPath)
    }
  }
}
</script>

<template>
  <div class="py-10 flex gap-8 flex-wrap" v-if="this.$store.getters['quizes/getQuizes']">
    <div v-for="(quiz, index) in this.$store.getters['quizes/getQuizes']" :key="index">
      <QuizCard :quiz="quiz" />
    </div>
  </div>
  <div class="mb-16 mx-auto w-fit">
    <ButtonLoadMore @click="fetchQuizes" />
  </div>
</template>
