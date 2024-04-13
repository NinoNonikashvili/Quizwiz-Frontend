<script>
import QuizCard from '@/components/shared/QuizCard.vue'
import ButtonLoadMore from '@/components/ui/ButtonLoadMore.vue'

export default {
  components: {
    QuizCard,
    ButtonLoadMore
  },

  mounted() {
    if (this.$route.query.page && this.$route.query.page !== this.page) {
      this.page = this.$route.query.page
    }
  },

  methods: {
    async updatePageQueryParam() {
      await this.$store.commit('quizes/incrementCurrentPage')
      let pageQuery = { page: this.$store.getters['quizes/getCurrentPage'] }
      this.$router.push({ name: 'quizes', query: { ...this.$route.query, ...pageQuery } })
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
    <ButtonLoadMore @click="updatePageQueryParam" />
  </div>
</template>
