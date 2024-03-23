<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation],

      categories: [
        'All Quizzes',
        'geography',
        'art',
        'music',
        'IT',
        'history',
        'dance',
        'sport',
        'math',
        'geography',
        'art',
        'music',
        'IT',
        'history',
        'dance',
        'sport',
        'math',
        'physics'
      ],
      selected: []
    }
  },
  methods: {
    setSelected(cat) {
      if (!this.selected.includes(cat)) {
        this.selected.push(cat)
      } else {
        this.selected.splice(this.selected.indexOf(cat), 1)
      }
      console.log(this.selected)
    }
  }
}
</script>

<template>
  <div class="w-full relative">
    <swiper
      :scrollbar="{
        hide: false
      }"
      :modules="modules"
      :navigation="{
        nextEl: '.swiper-button-next.category-filter-swiper-btn',
        prevEl: '.swiper-button-prev.category-filter-swiper-btn'
      }"
      :slidesPerView="'auto'"
      :spaceBetween="10"
      class="mySwiper border-b border-gray-300 category-filter-swiper"
    >
      <swiper-slide
        class="border-b-2 category-filter-swiper-slide"
        :class="selected.includes(cat) ? 'border-black' : 'border-transparent'"
        v-for="(cat, index) in categories"
        :key="index"
        @click="setSelected(cat)"
        ><p
          class="font-inter text-sm font-semibold"
          :class="selected.includes(cat) ? 'text-black' : 'text-gray-500'"
        >
          {{ cat }}
        </p></swiper-slide
      >
      <div class="swiper-button-next category-filter-swiper-btn"></div>
      <div class="swiper-button-prev category-filter-swiper-btn"></div>
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

.swiper-slide.category-filter-swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: fit-content;

  padding: 1.25rem 1rem;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-button-next.category-filter-swiper-btn,
.swiper-button-prev.category-filter-swiper-btn {
  border-radius: 100%;
  width: 2.375rem;
  height: 2.375rem;
  background-color: white;
  --swiper-navigation-size: 1.25;
  color: black;
  top: 0.8rem;
  transition: all ease 0.4s;
  display: none;
}
@media (min-width: 1440px) {
  .swiper-button-next.category-filter-swiper-btn,
  .swiper-button-prev.category-filter-swiper-btn {
    display: flex;
  }
  .swiper.category-filter-swiper {
    width: 90%;
    margin-left: 5%;
  }
  .swiper.category-filter-swiper:has(.swiper-button-prev.swiper-button-disabled) {
    width: 95%;
    margin-left: 0;
  }
}
.swiper-button-next.category-filter-swiper-btn:hover,
.swiper-button-prev.category-filter-swiper-btn:hover {
  background-color: #e6e6e6;
  transition: ease 0.4s;
}

.swiper-button-disabled.category-filter-swiper-btn {
  display: none;
  transition: ease 0.4s;
}
</style>
