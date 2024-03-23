<script>
import QuizCardCategory from '@/components/shared/QuizCardCategory.vue'
import ButtonLarge from '../ui/ButtonLarge.vue'
import QuizInfoDetails from './QuizInfoDetails.vue'

export default {
  data() {
    return {
      categories: ['data', 'it', 'web'],
      details: [
        { icon: 'HashtagIcon', text: '10 Questions' },
        { icon: 'PointsIcon', text: '15 Points' },
        { icon: 'PlayersIcon', text: '15 Players' },
        { icon: 'TimerIcon', text: '5m' }
      ]
    }
  },
  components: {
    QuizCardCategory,
    ButtonLarge,
    QuizInfoDetails
  }
}
</script>

<template>
  <div class="grid max-w-[815px] md:gap-x-8 md:grid-cols-[12] pb-12">
    <div class="flex flex-col gap-4 pb-4 md:pb-0 md:col-span-4">
      <div class="md:order-2">
        <QuizCardCategory :categories="categories" />
      </div>
      <h1
        class="md:order-1 font-raleway font-bold text-[2.5rem] leading-[3rem] inline-block max-w-[28.375rem]"
      >
        Timeline of Discoveries
      </h1>
      <p
        class="md:order-3 font-inter font-semibold text-sm leading-6 text-gray-500 inline-block max-w-[28.375rem]"
      >
        Can you put the discoveries in order, from the oldest to the newest one? 🧠
      </p>
    </div>
    <div class="md:row-span-2 md:col-start-5">
      <img
        src="@/assets/images/cardImg.png"
        alt="astrounaut holding red light"
        class="w-full object-cover rounded-[1.25rem]"
      />
    </div>
    <div class="pt-8 md:col-span-4">
      <QuizInfoDetails :details="details" />
      <div class="w-full md:w-[20.875rem]">
        <ButtonLarge text="Start Quiz" bg="bg-purple-500" />
      </div>
    </div>
  </div>
  <div class="max-w-[815px] border-t border-gray-300 pt-8">
    <h3 class="font-inter font-bold text-lg text-black mb-3">Instructions</h3>
    <p class="font-inter font-normal text-base text-black">
      Lorem ipsum dolor sit amet consectetur. Sed elementum nec id at placerat turpis. Etiam nisl
      nisi sed mus id maecenas mauris mattis.
    </p>
  </div>
</template>
