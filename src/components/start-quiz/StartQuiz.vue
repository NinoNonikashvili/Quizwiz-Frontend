<script>
import ButtonLarge from '@/components/ui/ButtonLarge.vue'
import StartQuizInfo from '@/components/start-quiz/StartQuizInfo.vue'
import VeeQuestionGroup from '@/components/shared/form/test/VeeQuestionGroup.vue'
import { Form as VeeForm } from 'vee-validate'
import CrossIcon from '@/components/icons/CrossIcon.vue'
import ResultModalIcon from '@/components/icons/ResultModalIcon.vue'
import StartQuizResult from '@/components/start-quiz/StartQuizResult.vue'

export default {
  components: {
    ButtonLarge,
    StartQuizInfo,
    VeeQuestionGroup,
    VeeForm,
    CrossIcon,
    ResultModalIcon,
    StartQuizResult
  },
  data() {
    return {
      isFinished: false,
      time: null
    }
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
    },
    results() {
      return this.$store.getters['quizes/getQuizResult']
    }
  },
  methods: {
    submit(values) {
      this.isFinished = true
      let totalTime = (this.quiz.time - this.time.minutes) * 60 - this.time.seconds

      let data = { time: Math.floor(totalTime / 60) + ':' + (totalTime % 60), ...values }
      this.$store.dispatch('quizes/handleSendQuizResult', { id: this.quiz.id, data: data })
    },
    leavePage() {
      this.isFinished = false
      this.$store.commit('quizes/setQuizResult', null)
      this.$router.push({ name: 'quizes' })
    }
  },

  watch: {
    quiz: {
      handler(quiz) {
        if (quiz) {
          this.time = { minutes: quiz.time, seconds: 0 }
        }
      },
      once: true
    },
    time: {
      handler(value) {
        let timer
        if (!this.isFinished && value) {
          if (value.minutes >= 0) {
            if (value.minutes === 0 && value.seconds === 0) {
              clearTimeout(timer)
              this.isFinished = true
              this.submit()
            } else if (value.seconds === 0) {
              value.seconds = 60
              value.minutes--
            } else {
              clearTimeout(timer)
              timer = setTimeout(() => {
                this.time.seconds--
              }, 1000)
            }
          }
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<template>
  <!-- HEADER -->
  <div v-if="quiz && questions && time">
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
          <p class="text-gray-600 font-inter font-semibold text-xl">
            {{ time.minutes }} : {{ time.seconds }}
          </p>
        </div>
      </div>
    </header>

    <section class="w-full pt-8 pb-[3.75rem] xl:pt-[3.75rem] xl:pb-[5.75rem]">
      <h1 class="text-center font-raleway font-bold text-[42px] leading-8 text-black">
        {{ quiz.title }}
      </h1>
      <div class="px-[3.75rem] w-full flex justify-center mt-8">
        <StartQuizInfo :details="details" :categories="quiz.categories" />
      </div>
    </section>
    <div class="px-4 xl:px-24 max-w-[51rem] relative">
      <VeeForm @submit="submit" v-slot="{ values }" :id="quiz.id">
        <VeeQuestionGroup
          v-for="(question, index) in questions"
          :key="index"
          :question="question"
          :questionNumber="index + 1"
          :values="values"
        />
      </VeeForm>
      <!-- TIMER -->
      <div
        class="hidden xl:flex flex-col w-[24.5rem] items-center px-12 pb-8 pt-12 shadow-xl fixed top-[20rem] right-24 bg-white z-10 rounded-lg"
      >
        <div
          class="border border-gray-300 py-2 px-10 shadow-lg absolute left-0 right-0 mx-auto w-fit rounded-md -top-2"
        >
          <p class="font-inter font-semibold text-base text-gray-500">Timer</p>
        </div>

        <p class="font-inter font-normal text-gray-600 text-[60px]">
          {{ time.minutes }} : {{ time.seconds }}
        </p>
        <div class="my-8 border-b h-[0.0625rem] w-full bg-gray-300"></div>
        <ButtonLarge text="submit" bg="bg-purple-500" type="submit" :form="quiz.id" />
      </div>
    </div>
    <!-- RESULTS -->
    <div
      v-if="results"
      class="fixed top-0 left-0 w-screen h-screen z-50 bg-[#000000]/70 backdrop-filter backdrop-blur-sm flex items-center justify-center"
    >
      <div class="w-[25rem] p-6 bg-white z-30 flex flex-col">
        <!-- <RouterLink :to="{ name: 'quizes' }" class="w-fit self-end"> -->
        <CrossIcon @click="leavePage" class="w-fit self-end" />
        <!-- </RouterLink> -->
        <header class="flex flex-col items-center mb-8">
          <ResultModalIcon />
          <h2 class="font-inter font-semibold text-[#101828] text-lg mt-5 mb-2">Quiz finished</h2>
          <h3 class="font-inter font-normal text-gray-600 text-sm">your results</h3>
        </header>

        <!-- RESULTS -->

        <StartQuizResult title="Quiz name" :text="quiz.title" color="#000000" :border="true" />
        <StartQuizResult
          title="Quiz level"
          :text="quiz.level.title"
          :color="quiz.level.color_active"
          :border="true"
        />
        <StartQuizResult title="Time" :text="results.time" color="#000000" :border="true" />
        <StartQuizResult
          title="Mistakes"
          :text="results.correct_answers"
          color="#12B76A"
          :border="true"
        />
        <StartQuizResult
          title="Wrong Answers"
          :text="results.wrong_answers"
          color="#E64646"
          :border="false"
        />

        <ButtonLarge @click="leavePage" text="Back to home" bg="bg-purple-500" />
      </div>
    </div>
  </div>
</template>
