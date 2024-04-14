<script>
import QuizCardPointsIcon from '@/components/icons/quiz-card/QuizCardPointsIcon.vue'
import QuizCardLevelIcon from '@/components/icons/quiz-card/QuizCardLevelIcon.vue'
import QuizCardCompletedFalseIcon from '@/components/icons/quiz-card/QuizCardCompletedFalseIcon.vue'
import QuizCardCompletedTrueIcon from '@/components/icons/quiz-card/QuizCardCompletedTrueIcon.vue'

export default {
  props: {
    bg: { type: String, required: true },
    icon: { type: String, required: true },
    color: { required: true }
  },
  components: {
    QuizCardPointsIcon,
    QuizCardLevelIcon,
    QuizCardCompletedFalseIcon,
    QuizCardCompletedTrueIcon
  }
}
</script>

<template>
  <div class="w-10 h-10 rounded-full flex justify-center items-center" :class="bg">
    <component :is="icon" :color="color"></component>
  </div>
</template>
