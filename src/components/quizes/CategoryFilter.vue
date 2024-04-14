<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation],

      selected: []
    }
  },
  mounted() {
    this.$store.dispatch('categories/handleGetCategories')
  },

  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    }
  },
  watch: {
    selected(val) {
      let queryWithoutPage = { ...this.$route.query }
      this.$store.commit('categories/setSelectedCategories', val)
      delete queryWithoutPage.page
      this.$store.commit('quizes/resetCurrentPage')
      this.$router.push({
        name: 'quizes',
        query: {
          ...queryWithoutPage,
          cat: val
        }
      })
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
        :class="
          this.$store.getters['categories/getSelectedCategories'].includes(cat.id)
            ? 'border-black'
            : 'border-transparent'
        "
        v-for="(cat, index) in categories"
        :key="index"
      >
        <label
          class="font-inter text-sm font-semibold w-fit relative"
          :class="
            this.$store.getters['categories/getSelectedCategories'].includes(cat.id)
              ? 'text-black'
              : 'text-gray-500'
          "
        >
          {{ cat.title }}
          <input
            v-model="selected"
            class="absolute top-0 left-0 opacity-0"
            type="checkbox"
            :value="cat.id"
          />
        </label>
      </swiper-slide>
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
