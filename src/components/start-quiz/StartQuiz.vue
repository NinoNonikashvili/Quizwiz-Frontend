<script>
import ButtonLarge from '@/components/ui/ButtonLarge.vue'
import StartQuizInfo from '@/components/start-quiz/StartQuizInfo.vue'
import VeeQuestionGroup from '@/components/shared/form/test/VeeQuestionGroup.vue'
import { Form as VeeForm } from 'vee-validate'

export default {
  components: {
    ButtonLarge,
    StartQuizInfo,
    VeeQuestionGroup,
    VeeForm
  },
  computed: {
    quiz() {
      return this.$store.getters['quizes/getSingleQuiz']
    },

    details() {
      return this.quiz
        ? [
            { icon: 'CategoryIcon', text: '' },
            { icon: 'HashtagIcon', text: this.quiz.questions + ' Questions' },
            { icon: 'PointsIcon', text: this.quiz.points + ' Points' },
            { icon: 'PlayersIcon', text: this.quiz.total_users + ' Players' },
            { icon: 'TimerIcon', text: this.quiz.time + 'm' }
          ]
        : []
    },
    questions() {
      return this.$store.getters['quizes/getQuizQuestions']
    }
  },
  methods: {
    submit(values) {
      console.log(values)
    }
  }
}
</script>

<template>
  <!-- HEADER -->
  <header class="p-5 xl:h-8 shadow-lg">
    <div class="w-full flex items-center justify-between gap-2 xl:hidden">
      <ButtonLarge
        text="submit"
        bg="bg-purple-500"
        class="max-w-[18rem] h-[3.75rem]"
        type="submit"
        :form="quiz.id"
      />
      <div class="px-4 py-2 bg-gray-25 border border-gray-300 rounded-lg flex flex-col">
        <p class="font-raleway font-bold text-xs text-black">Timer</p>
        <p class="text-gray-600 font-inter font-semibold text-xl">4:59</p>
      </div>
    </div>
  </header>

  <section v-if="quiz" class="w-full pt-8 pb-[3.75rem] xl:pt-[3.75rem] xl:pb-[5.75rem]">
    <h1 class="text-center font-raleway font-bold text-[42px] leading-8 text-black">
      {{ quiz.title }}
    </h1>
    <div class="px-[3.75rem] w-full flex justify-center mt-8">
      <StartQuizInfo :details="details" :categories="quiz.categories" />
    </div>
  </section>
  <div v-if="questions" class="px-4 xl:px-24 max-w-[51rem] relative">
    <VeeForm @submit="submit" v-slot="{ values }" :id="quiz.id">
      <VeeQuestionGroup
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
        :questionNumber="index"
        :values="values"
      />
    </VeeForm>

    <div
      class="hidden xl:block px-12 pb-8 pt-12 shadow-xl fixed top-[20rem] right-24 bg-white z-10 rounded-lg"
    >
      <div
        class="border border-gray-300 py-2 px-10 shadow-lg absolute left-0 right-0 mx-auto w-fit rounded-md -top-2"
      >
        <p class="font-inter font-semibold text-base text-gray-500">Timer</p>
      </div>

      <p class="font-inter font-normal text-gray-600 text-[60px]">{{ 4 }} : {{ 49 }}</p>
      <div class="mt-8 border-b border-gray-300"></div>
      <ButtonLarge text="submit" bg="bg-purple-500" type="submit" :form="quiz.id" />
    </div>
  </div>
</template>
