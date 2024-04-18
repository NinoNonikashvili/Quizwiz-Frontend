<script>
import QuizCard from '@/components/shared/QuizCard.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

export default {
  components: {
    QuizCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation, Autoplay],
      direction: this.setDirection()
    }
  },
  methods: {
    setDirection() {
      return window.innerWidth <= 1440 ? 'horizontal' : 'vertical'
    },
    changeDirection() {
      this.direction = window.innerWidth <= 1440 ? 'horizontal' : 'vertical'
    }
  },
  created() {
    window.addEventListener('resize', this.changeDirection)
  },
  unmounted() {
    window.removeEventListener('resize', this.changeDirection)
  },

  computed: {
    quizes() {
      return this.$store.getters['quizes/getSimilarQuizes']
    }
  }
}
</script>

<template>
  <div>
    <swiper
      :scrollbar="{
        hide: false
      }"
      :direction="direction"
      :navigation="{
        nextEl: '.swiper-button-next.quiz-swiper-btn',
        prevEl: '.swiper-button-prev.quiz-swiper-btn'
      }"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: false
      }"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="10"
      class="quiz-swiper md:h-screen"
    >
      <swiper-slide
        v-for="(quiz, index) in quizes"
        :key="index"
        class="border border-gray-300 quiz-swiper-slide"
      >
        <RouterLink :to="{ path: '/quizes/' + quiz.id }">
          <QuizCard :quiz="quiz" />
        </RouterLink>
      </swiper-slide>
      <div class="swiper-button-next quiz-swiper-btn"></div>
      <div class="swiper-button-prev quiz-swiper-btn"></div>
    </swiper>
  </div>
</template>

<style scoped>
.swiper.category-filter-swiper {
  width: 95%;
  margin-left: 0;
  height: 100%;
  position: static;
  transition: ease 0.4s;
}

.swiper-slide.quiz-swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: fit-content;
  height: fit-content;
  border-radius: 8px;
  overflow: hidden;
  padding: 0;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next.quiz-swiper-btn,
.swiper-button-prev.quiz-swiper-btn,
.swiper-button-next.quiz-swiper-btn:hover,
.swiper-button-prev.quiz-swiper-btn:hover,
.swiper-button-disabled.quiz-swiper-btn:hover {
  display: none;
}
</style>
