<script>
import QuizCardDetail from '@/components/ui/QuizCardDetail.vue'
import QuizCardCategory from '@/components/shared/QuizCardCategory.vue'
import QuizCardDetailIcon from '@/components/ui/QuizCardDetailIcon.vue'
import TopRightArrowBlack from '@/components/icons/TopRightArrowBlack.vue'

export default {
  props: {
    quiz: { type: Object, required: true }
  },
  data() {
    return {
      categories: ['Game', 'History', 'Development']
    }
  },
  components: {
    QuizCardDetail,
    QuizCardCategory,
    QuizCardDetailIcon,
    TopRightArrowBlack
  }
}
</script>

<template>
  <div
    class="group p-6 bg-white w-394 flex flex-col gap-8 shadow-lg border border-transparent hover:border hover:border-black hover:rounded-lg"
  >
    <!-- CARD IMAGE -->
    <img :src="quiz.image" alt="quiz image" class="w-full object-cover" />
    <div>
      <!-- CARD CATEGORIES -->

      <QuizCardCategory :categories="quiz.categories" />
      <!-- CARD TITLE  -->
      <div class="flex items-center justify-between">
        <h3 class="pt-3 pb-5 font-inter font-semibold text-gray-900 text-2xl">
          {{ quiz.title }}
        </h3>
        <div class="hidden group-hover:block">
          <TopRightArrowBlack />
        </div>
      </div>
      <!-- CARD DETAILS -->
      <div class="flex flex-wrap gap-5">
        <!-- COMPLETED -->
        <div class="flex gap-3 items-center">
          <QuizCardDetailIcon
            :bg="quiz.completed ? 'bg-[#D1FADF]' : 'bg-[#F6F6F7]'"
            :icon="quiz.completed ? 'QuizCardCompletedTrueIcon' : 'QuizCardCompletedFalseIcon'"
            :color="quiz.completed ? '#12B76A' : '#374957'"
          />
          <QuizCardDetail
            :completed="quiz.completed"
            title="Completed"
            :text="quiz.date ?? 'Date, time'"
            :fontBold="quiz.completed"
          />
        </div>
        <!-- TOTAL TIME -->
        <div class="flex gap-3 items-center">
          <QuizCardDetail
            :completed="quiz.completed"
            title="Total time"
            :text="quiz.total_time ?? 'N/A'"
            :fontBold="quiz.completed"
          />
        </div>
        <!-- TOTAL USERS -->
        <div class="flex gap-3 items-center">
          <QuizCardDetail
            :completed="quiz.completed"
            title="Total users"
            :text="quiz.total_users"
            :fontBold="true"
          />
        </div>
        <!-- DIFFICULTY LEVEL -->
        <div class="flex gap-3 items-center">
          <QuizCardDetailIcon
            :bg="'bg-[' + quiz.level.bg_active + ']'"
            icon="QuizCardLevelIcon"
            :color="quiz.level.color_active"
          />
          <QuizCardDetail
            :completed="quiz.completed"
            title="Difficulty level"
            :text="quiz.level.title"
            :fontBold="true"
          />
        </div>
        <!-- POINTS -->
        <div class="flex gap-3 items-center" v-if="quiz.points">
          <QuizCardDetailIcon bg="bg-[#FCE7F6]" icon="QuizCardPointsIcon" color="#DD2590" />
          <QuizCardDetail
            :completed="quiz.completed"
            title="POINTS"
            text="quiz.points"
            :fontBold="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
