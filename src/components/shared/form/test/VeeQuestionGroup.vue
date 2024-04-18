<script>
import { Field } from 'vee-validate'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import NotificationIcon from '@/components/icons/quiz-info-details/NotificationIcon.vue'

export default {
  components: {
    CheckIcon,
    NotificationIcon,
    Field
  },
  props: {
    question: { required: true, type: Object },
    questionNumber: { required: true, type: Number },
    values: { required: true }
  }
}
</script>

<template>
  <div class="mb-12">
    <!-- QUESTION NUMBER AND POINTS -->
    <div class="flex items-center">
      <div>
        <span class="font-inter font-semibold text-sm text-purple-500">Question - </span>
        <span class="font-inter font-semibold text-sm text-purple-500">{{ questionNumber }}</span>
      </div>
      <div class="w-[0.0625rem] h-3 border-r border-gray-300 mx-[0.625rem]"></div>
      <div>
        <span class="font-inter font-semibold text-sm text-pink-500">Points - </span>
        <span class="font-inter font-semibold text-sm text-pink-500">{{ question.points }}</span>
      </div>
    </div>

    <!-- QUESTION TEXT -->
    <p class="py-5 font-inter font-bold text-black text-lg">{{ question.question }}</p>

    <!-- CORRECT ANSWER NUMBER NOTIFICATION -->
    <div
      class="flex w-fit bg-green-50 mb-5 rounded-md gap-2 border border-green-500 items-center py-[0.625rem] px-4"
    >
      <NotificationIcon />
      <p class="font-inter font-medium text-[#027A48] text-sm">
        Yu can select {{ question.correct_answers }} options from questions.
      </p>
    </div>
    <!-- ANSWERS -->
    <div v-for="(answer, index) in question.answers" :key="index" class="mb-2">
      <label
        :for="question.id.toString() + index.toString()"
        class="relative flex items-center p-4 w-full group bg-white border border-gray-300 rounded-lg has-[:checked]:bg-[#f5f6ff] has-[:checked]:border-purple-500"
      >
        <span
          class="font-inter font-normal text-sm text-gray-700 leading-4 w-full group-has-[:checked]:text-purple-500"
          >{{ answer.answer }}</span
        >

        <Field
          :name="question.id.toString()"
          :id="question.id.toString() + index.toString()"
          type="checkbox"
          :value="answer.id"
          class="opacity-0 peer w-5 h-5"
          :disabled="
            this.values[this.question.id.toString()] &&
            this.values[this.question.id.toString()].length === question.correct_answers &&
            !this.values[this.question.id.toString()].includes(answer.id)
          "
        />
        <div
          class="absolute top-4 right-4 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-full bg-white peer-checked:bg-purple-500"
        >
          <div class="hidden group-has-[:checked]:inline-block">
            <CheckIcon color="#ffffff" />
          </div>
        </div>
      </label>
    </div>
  </div>
</template>
