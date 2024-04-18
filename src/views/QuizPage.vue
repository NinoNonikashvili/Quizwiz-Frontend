<script>
import LinkToBack from '@/components/ui/LinkToBack.vue'
import QuizInfo from '@/components/quiz/QuizInfo.vue'
import QuizSlider from '@/components/quiz/QuizSlider.vue'

export default {
  components: {
    LinkToBack,
    QuizInfo,
    QuizSlider
  },
  mounted() {
    let id = this.$route.params.id
    this.$store.dispatch('quizes/handleLoadSingleQuiz', id)
    this.$store.dispatch('quizes/handleLoadSimilarQuizes', id)
  },
  beforeRouteUpdate() {
    let id = this.$route.params.id
    this.$store.dispatch('quizes/handleLoadSingleQuiz', id)
    this.$store.dispatch('quizes/handleLoadSimilarQuizes', id)
  }
}
</script>

<template>
  <main class="px-[1.125rem] pb-16 xl:px-24 xl:pb-20">
    <div class="py-6">
      <LinkToBack />
    </div>
    <div class="flex flex-col xl:flex-row xl:justify-between">
      <div>
        <QuizInfo />
      </div>

      <div
        v-if="
          this.$store.getters['quizes/getSimilarQuizes'] &&
          this.$store.getters['quizes/getSimilarQuizes'].length !== 0
        "
        class="mt-24 xl:mt-0"
      >
        <h3
          class="font-inter font-semibold text-base leading-5 text-gray-500 mb-[1.125rem] md:hidden"
        >
          Similar Quizes
        </h3>
        <QuizSlider />
      </div>
    </div>
  </main>
</template>
