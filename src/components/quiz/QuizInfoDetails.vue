<script>
import CategoryIcon from '@/components/icons/quiz-info-details/CategoryIcon.vue'
import HashtagIcon from '@/components/icons/quiz-info-details/HashtagIcon.vue'
import PlayersIcon from '@/components/icons/quiz-info-details/PlayersIcon.vue'
import PointsIcon from '@/components/icons/quiz-info-details/PointsIcon.vue'
import TimerIcon from '@/components/icons/quiz-info-details/TimerIcon.vue'

export default {
  components: {
    TimerIcon,
    CategoryIcon,
    HashtagIcon,
    PointsIcon,
    PlayersIcon
  },
  props: {
    details: Array
  }
}
</script>

<template>
  <div class="flex flex-col md:flex-row flex-wrap w-full pb-10">
    <div
      v-for="(detail, index) in details"
      :key="index"
      class="flex items-center gap-2 py-3 md:py-0 px-3 border-gray-300 border-b md:border-b-0 md:border-r md:h-[0.875rem]"
      :class="{ 'border-none': index === details.length - 1 }"
    >
      <component :is="detail.icon"></component>
      <p class="font-inter font-semibold text-sm text-gray-500">
        {{ detail.text }}
      </p>
    </div>
  </div>
</template>
