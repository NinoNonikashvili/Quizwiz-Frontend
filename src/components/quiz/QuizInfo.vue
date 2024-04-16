<script>
import QuizCardCategory from '@/components/shared/QuizCardCategory.vue'
import ButtonLarge from '../ui/ButtonLarge.vue'
import QuizInfoDetails from './QuizInfoDetails.vue'

export default {
  components: {
    QuizCardCategory,
    ButtonLarge,
    QuizInfoDetails
  },
  computed: {
    quiz() {
      return this.$store.getters['quizes/getSingleQuiz']
    },
    details() {
      return this.quiz
        ? [
            { icon: 'HashtagIcon', text: this.quiz.questions + ' Questions' },
            { icon: 'PointsIcon', text: this.quiz.points + ' Points' },
            { icon: 'PlayersIcon', text: this.quiz.total_users + ' Players' },
            { icon: 'TimerIcon', text: this.quiz.time + 'm' }
          ]
        : []
    }
  }
}
</script>

<template>
  <div v-if="quiz" class="grid max-w-[815px] md:gap-x-8 md:grid-cols-[12] pb-12">
    <div class="flex flex-col gap-4 pb-4 md:pb-0 md:col-span-4">
      <div class="md:order-2">
        <QuizCardCategory :categories="quiz.categories" />
      </div>
      <h1
        class="md:order-1 font-raleway font-bold text-[2.5rem] leading-[3rem] inline-block max-w-[28.375rem]"
      >
        {{ quiz.title }}
      </h1>
      <p
        class="md:order-3 font-inter font-semibold text-sm leading-6 text-gray-500 inline-block max-w-[28.375rem]"
      >
        {{ quiz.excerpt }} 🧠
      </p>
    </div>
    <div class="md:row-span-2 md:col-start-5">
      <img
        :src="quiz.image"
        alt="astrounaut holding red light"
        class="w-full object-cover rounded-[1.25rem]"
      />
    </div>
    <div class="pt-8 md:col-span-4">
      <QuizInfoDetails :details="details" />
      <div class="w-full md:w-[20.875rem]">
        <RouterLink :to="{ path: '/start-quiz/' + quiz.id }">
          <ButtonLarge text="Start Quiz" bg="bg-purple-500" />
        </RouterLink>
      </div>
    </div>
  </div>
  <div v-if="quiz" class="max-w-[815px] border-t border-gray-300 pt-8">
    <h3 class="font-inter font-bold text-lg text-black mb-3">Instructions</h3>
    <p class="font-inter font-normal text-base text-black">
      {{ quiz.instructions }}
    </p>
  </div>
</template>
