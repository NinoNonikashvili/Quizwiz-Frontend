<script>
import TopRightArrowBlack from '@/components/icons/TopRightArrowBlack.vue'
import QuizCardDetail from '@/components/ui/QuizCardDetail.vue'
import QuizCardCategory from '@/components/shared/QuizCardCategory.vue'

export default {
  data() {
    return {
      categories: ['Game', 'History', 'Development']
    }
  },
  components: {
    TopRightArrowBlack,
    QuizCardDetail,
    QuizCardCategory
  }
}
</script>

<template>
  <div
    class="group p-6 bg-white w-394 flex flex-col gap-8 shadow-lg border border-transparent hover:border hover:border-black hover:rounded-lg"
  >
    <!-- CARD IMAGE -->
    <img src="@/assets/images/card2.png" alt="" class="w-full object-cover" />
    <div>
      <!-- CARD CATEGORIES -->

      <QuizCardCategory :categories="categories" />
      <!-- CARD TITLE  -->
      <div class="flex items-center justify-between">
        <h3 class="pt-3 pb-5 font-inter font-semibold text-gray-900 text-2xl">
          British Overseas Flags
        </h3>
        <div class="hidden group-hover:block">
          <TopRightArrowBlack />
        </div>
      </div>
      <!-- CARD DETAILS -->
      <div class="flex flex-wrap gap-5">
        <div class="flex gap-3 items-center">
          <div class="w-10 h-10 rounded-full bg-green-100 flex justify-center items-center">
            <TopRightArrowBlack />
          </div>
          <QuizCardDetail :completed="false" title="Completed" text="20 Jan, 2022" />
        </div>
        <div class="flex gap-3 items-center">
          <QuizCardDetail :completed="false" title="Total time" text="12Minute" />
        </div>
        <div class="flex gap-3 items-center">
          <QuizCardDetail :completed="true" title="Total users" text="54" />
        </div>
        <div class="flex gap-3 items-center">
          <div class="w-10 h-10 rounded-full bg-green-100 flex justify-center items-center">
            <TopRightArrowBlack />
          </div>
          <QuizCardDetail :completed="true" title="Difficulty level" text="beginner" />
        </div>
        <div class="flex gap-3 items-center">
          <div class="w-10 h-10 rounded-full bg-green-100 flex justify-center items-center">
            <TopRightArrowBlack />
          </div>
          <QuizCardDetail :completed="true" title="POINTS" text="10/10" />
        </div>
      </div>
    </div>
  </div>
</template>
