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
    async fetchQuizes() {
      this.$store.commit('quizes/setIsLoading', true)
      await this.$store.commit('quizes/incrementCurrentPage')
      let page = { page: this.$store.getters['quizes/getCurrentPage'] }
      await this.$router.push({ name: 'quizes', query: { ...this.$route.query, ...page } })
      this.$store.dispatch('quizes/handleLoadQuizes', { query: this.$route.fullPath })
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
