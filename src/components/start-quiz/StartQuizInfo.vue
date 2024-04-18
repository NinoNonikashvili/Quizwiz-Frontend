<script>
import CategoryIcon from '@/components/icons/quiz-info-details/CategoryIcon.vue'
import HashtagIcon from '@/components/icons/quiz-info-details/HashtagIcon.vue'
import PlayersIcon from '@/components/icons/quiz-info-details/PlayersIcon.vue'
import PointsIcon from '@/components/icons/quiz-info-details/PointsIcon.vue'
import TimerIcon from '@/components/icons/quiz-info-details/TimerIcon.vue'
import QuizCardCategory from '@/components/shared/QuizCardCategory.vue'

export default {
  components: {
    TimerIcon,
    CategoryIcon,
    HashtagIcon,
    PointsIcon,
    PlayersIcon,
    QuizCardCategory
  },
  props: {
    details: { required: true, type: Array },
    categories: { required: true, type: Array }
  }
}
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center w-fit pb-10">
    <div
      v-for="(detail, index) in details"
      :key="index"
      class="flex items-center gap-2 py-0 px-3 border-gray-300 md:border-r md:h-[0.875rem] my-2"
      :class="{ 'border-none': index === details.length - 1 }"
    >
      <component :is="detail.icon"></component>
      <QuizCardCategory v-if="index === 0" :categories="categories" color="text-gray-500" />
      <p v-else class="font-inter font-semibold text-sm text-gray-500">
        {{ detail.text }}
      </p>
    </div>
  </div>
</template>
