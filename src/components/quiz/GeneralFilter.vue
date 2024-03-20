<script>
import CrossIcon from '../icons/CrossIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import CheckIcon from '../icons/CheckIcon.vue'

export default {
  data() {
    return {
      filterActive: false,
      activeTab: 'filter',
      levels: [
        {
          title: 'Starter',
          color: 'text-[#026AA2]',
          bg: 'bg-[#F0F9FF]',
          bg_dark: 'bg-[#026AA2]'
        },
        {
          title: 'Beginner',
          color: 'text-[#175CD3]',
          bg: 'bg-[#EFF8FF]',
          bg_dark: 'bg-[#175CD3]'
        },
        {
          title: 'Middle',
          color: 'text-[#6941C6]',
          bg: 'bg-[#F9F5FF]',
          bg_dark: 'bg-[#6941C6]'
        },
        {
          title: 'High',
          color: 'text-[#B54708]',
          bg: 'bg-[#FFFAEB]',
          bg_dark: 'bg-[#B54708]'
        },
        {
          title: 'Very High',
          color: 'text-[#C11574]',
          bg: 'bg-[#FDF2FA]',
          bg_dark: 'bg-[#C11574]'
        },
        {
          title: 'Dangerously High',
          color: 'text-[#C01048]',
          bg: 'bg-[#FFF1F3]',
          bg_dark: 'bg-[#C01048]'
        }
      ],
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
      selectedOptions: {
        quizes: [],
        levels: [],
        categories: [],
        sort_alphabet: null,
        sort_popular: false,
        sort_date: null
      },
      searchKeyword: '',
      debounceReturn: this.debounce((key) => {
        this.searchKeyword = key
        console.log(key)
      }, 500)
    }
  },
  methods: {
    openFilter() {
      this.filterActive = true
    },
    closeFilter() {
      this.filterActive = false
    },
    setActiveTab(tab) {
      this.activeTab = tab
    },
    setLevel(level) {
      if (!this.selectedOptions.levels.includes(level)) {
        this.selectedOptions.levels.push(level)
      } else {
        this.selectedOptions.levels.splice(this.selectedOptions.levels.indexOf(level), 1)
      }
      console.log(this.selectedOptions)
    },
    setCategory(cat) {
      if (!this.selectedOptions.categories.includes(cat)) {
        this.selectedOptions.categories.push(cat)
      } else {
        this.selectedOptions.categories.splice(this.selectedOptions.categories.indexOf(cat), 1)
      }
    },

    reset(callback) {
      this.selectedOptions.quizes.length = 0
      this.selectedOptions.categories.length = 0
      this.selectedOptions.levels.length = 0
      this.selectedOptions.sort_alphabet = null
      this.selectedOptions.sort_popular = false
      this.selectedOptions.sort_date = null
      console.log(callback)
      if (callback !== null) {
        callback()
      }
    },
    searchFilter(searchKey) {
      this.debounceReturn(searchKey.target.value)
    },
    debounce(cb, time) {
      let timeoutId
      return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          cb(...args)
        }, time)
      }
    }
  },
  computed: {
    isOptionsEmpty() {
      return (
        this.selectedOptions.quizes.length === 0 &&
        this.selectedOptions.categories.length === 0 &&
        this.selectedOptions.levels.length === 0 &&
        this.selectedOptions.sort_alphabet === null &&
        this.selectedOptions.sort_popular === false &&
        this.selectedOptions.sort_date === null
      )
    }
  },
  components: {
    CrossIcon,
    SearchIcon,
    CheckIcon
  }
}
</script>

<template>
  <button @click="openFilter">Filter</button>
  <!-- MOBILE RESOLUTION FILTER -->
  <div
    :class="filterActive ? 'flex xl:hidden' : 'hidden xl:hidden'"
    class="w-full fixed top-0 left-0 flex-col z-10"
  >
    <!-- HEADRE -->
    <header
      class="bg-gray-80 px-18 py-26 flex justify-between items-center w-full border-b border-gray-300"
    >
      <button class="font-inter font-semibold text-sm text-gray-500" @click="reset(null)">
        Reset
      </button>
      <h5 class="font-inter font-semibold text-sm text-gray-500 uppercase">Filters</h5>
      <div @click="closeFilter">
        <CrossIcon />
      </div>
    </header>
    <!-- SEARCH -->
    <div class="flex w-full bg-white px-18 py-26 border-b border-gray-300">
      <div class="pr-4">
        <SearchIcon />
      </div>
      <input
        type="text"
        class="w-full placeholder-gray-500 font-inter text-sm leading-normal font-normal text-gray-500 bg-transparent focus:outline-none"
        placeholder="Search"
        @input="searchFilter"
      />
    </div>
    <!-- FILTER AND SORT TABS -->
    <div class="bg-white px-18 py-5 w-full">
      <div class="w-fit bg-gray-90 rounded-full">
        <button
          class="py-14 w-49 rounded-full font-inter font-semibold text-sm"
          :class="
            activeTab === 'filter'
              ? 'bg-white border border-gray-300 text-purple-500'
              : 'border-0 text-gray-500-50 bg-transparent '
          "
          @click="setActiveTab('filter')"
        >
          Filter
        </button>
        <button
          class="py-14 w-49 rounded-full font-inter font-semibold text-sm"
          :class="
            activeTab === 'sorting'
              ? 'bg-white border border-gray-300 text-purple-500'
              : 'border-0 text-gray-500-50 bg-transparent  '
          "
          @click="setActiveTab('sorting')"
        >
          Sorting
        </button>
      </div>
    </div>
    <!-- FILTER OPTIONS -->
    <div class="px-18 pt-6 pb-0" :class="{ hidden: activeTab === 'sorting' }">
      <!-- QUIZES CHECKBOXES -->
      <div class="flex flex-col gap-10 pb-5 border-b border-gray-300">
        <div class="flex gap-2 items-center">
          <label class="font-inter font-semibold text-sm text-gray-900">My Quizes</label>
          <div class="relative group">
            <input
              type="checkbox"
              name="myQuizes"
              class="opacity-0 peer w-5 h-5"
              value="my_quizes"
              v-model="selectedOptions.quizes"
            />
            <div
              class="absolute top-0 left-0 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-md bg-white peer-checked:border-[#7F56D9] peer-checked:bg-[#F9F5FF]"
            >
              <div class="hidden group-has-[:checked]:inline-block">
                <CheckIcon />
              </div>
            </div>
          </div>
        </div>

        <div class="flex gap-2 items-center">
          <label class="font-inter font-semibold text-sm text-gray-900">Not Completed</label>
          <div class="relative group">
            <input
              type="checkbox"
              name="notCompleted"
              class="opacity-0 peer w-5 h-5"
              value="not_completed"
              v-model="selectedOptions.quizes"
            />
            <div
              class="absolute top-0 left-0 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-md bg-white peer-checked:border-[#7F56D9] peer-checked:bg-[#F9F5FF]"
            >
              <div class="hidden group-has-[:checked]:inline-block">
                <CheckIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- LEVELS -->
      <div class="py-5 border-b border-gray-300">
        <h6 class="font-inter font-semibold text-sm text-gray-900 mb-4">Levels</h6>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(level, index) in levels"
            :key="index"
            class="rounded-full font-inter font-medium text-sm py-[0.625rem] px-5"
            :class="[
              this.searchKeyword.length !== 0 &&
              !level.title.toLowerCase().includes(searchKeyword.toLowerCase())
                ? 'hidden '
                : ' ',
              this.selectedOptions.levels.includes(level.title)
                ? 'text-white ' + level.bg_dark
                : level.color + ' ' + level.bg
            ]"
            @click="setLevel(level.title)"
          >
            {{ level.title }}
          </button>
        </div>
      </div>
      <!-- CATEGORIES -->
      <div class="pt-5 mb-4">
        <h6 class="font-inter font-semibold text-sm text-gray-900 mb-4">Categories</h6>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(cat, index) in categories"
            :key="index"
            class="font-inter font-semibold text-sm py-2 px-14 rounded-full"
            :class="[
              selectedOptions.categories.includes(cat)
                ? 'bg-black text-white'
                : 'text-gray-600 bg-white',
              this.searchKeyword.length !== 0 &&
              !cat.toLowerCase().includes(searchKeyword.toLowerCase())
                ? 'hidden '
                : ' '
            ]"
            @click="setCategory(cat)"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </div>
    <!-- SORT OPTIONS -->
    <div :class="{ hidden: activeTab === 'filter' }">Sorting</div>
    <!-- CONFIRM/CANCEL -->
    <div
      class="w-full py-22 px-18 flex gap-[0.625rem] bg-white shadow-inner"
      :class="isOptionsEmpty ? 'hidden' : 'block'"
    >
      <button
        class="font-inter font-semibold text-lg leading-6 rounded-md text-white bg-purple-500 py-18 px-[2.125rem] w-[15.875rem]"
      >
        Confirm
      </button>
      <button
        class="font-inter font-semibold text-lg leading-6 rounded-md text-gray-700 border border-gray-300 bg-white py-18 px-[2.125rem]"
        @click="reset(closeFilter)"
      >
        Cancel
      </button>
    </div>
  </div>
  <!-- DESKTOP RESOLUTION FILTER  -->
  <div :class="filterActive ? 'hidden xl:flex ' : 'hidden xl:hidden'">desktop</div>
</template>
