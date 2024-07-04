<script>
import QuizCard from '@/components/shared/QuizCard.vue'
import ButtonLoadMore from '@/components/ui/ButtonLoadMore.vue'

export default {
  components: {
    QuizCard,
    ButtonLoadMore
  },

  mounted() {
    let page = this.$store.getters['quizes/getCurrentPage']
    console.log(page)
    if (page && page !== 1) {
      let pageQuery = { page: page }
      this.$router.push({ name: 'quizes', query: { ...this.$route.query, ...pageQuery } })
    }
    console.log(page)
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
      <RouterLink :to="{ path: 'quizes/' + quiz.id }">
        <QuizCard :quiz="quiz" />
      </RouterLink>
    </div>
  </div>
  <div class="mb-16 mx-auto w-fit" v-if="this.$store.getters['quizes/getIsMorePage']">
    <ButtonLoadMore @click="updatePageQueryParam" />
  </div>
</template>
