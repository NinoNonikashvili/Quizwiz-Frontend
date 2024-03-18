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
    setSelected(id) {
      if (!this.selected.includes(id)) {
        this.selected.push(id)
      } else {
        this.selected.splice(this.selected.indexOf(id), 1)
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
      :navigation="true"
      :modules="modules"
      :slidesPerView="'auto'"
      :spaceBetween="10"
      class="mySwiper border-b border-gray-300"
    >
      <swiper-slide
        class="border-b-2 border-transparent"
        :class="{ 'text-black border-b-2 border-black': selected.includes(index) }"
        v-for="(cat, index) in categories"
        :key="index"
        @click="setSelected(index)"
        ><p class="font-inter text-sm font-semibold text-gray-500">{{ cat }}</p></swiper-slide
      >
    </swiper>
  </div>
</template>

<style>
.swiper {
  width: 95%;
  margin-left: 0;
  height: 100%;
  position: static;
  transition: ease 0.4s;
}

.swiper-slide {
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
.swiper-button-next,
.swiper-button-prev {
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
  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
  }
  .swiper {
    width: 90%;
    margin-left: 5%;
  }
  .swiper:has(.swiper-button-prev.swiper-button-disabled) {
    width: 95%;
    margin-left: 0;
  }
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #e6e6e6;
  transition: ease 0.4s;
}

.swiper-button-disabled {
  display: none;
  transition: ease 0.4s;
}
</style>
