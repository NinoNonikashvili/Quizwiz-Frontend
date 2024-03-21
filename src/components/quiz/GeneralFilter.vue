<script>
import CrossIcon from '../icons/CrossIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import CheckIcon from '../icons/CheckIcon.vue'
import AscIcon from '../icons/AscIcon.vue'
import DescIcon from '../icons/DescIcon.vue'
import NewestIcon from '../icons/NewestIcon.vue'
import OldestIcon from '../icons/OldestIcon.vue'
import PopularIcon from '../icons/PopularIcon.vue'
import GreenSelectedIcon from '../icons/GreenSelectedIcon.vue'
import FilterIcon from '../icons/FilterIcon.vue'

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
      categories: ['All Quizzes', 'geography', 'IT', 'history', 'dance', 'sport', 'math'],
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
    },
    filterCounter() {
      const truthyValues = Object.values(this.selectedOptions).filter(
        (value) =>
          value !== null &&
          value !== false &&
          value !== '' &&
          (Array.isArray(value) ? value.length !== 0 : true)
      ).length
      console.log('filter count', truthyValues)
      return truthyValues
    }
  },
  components: {
    CrossIcon,
    SearchIcon,
    CheckIcon,
    AscIcon,
    DescIcon,
    NewestIcon,
    OldestIcon,
    PopularIcon,
    GreenSelectedIcon,
    FilterIcon
  }
}
</script>

<template>
  <button
    @click="openFilter"
    class="flex items-center py-3 px-[0.875rem] border rounded-xl gap-2 relative"
    :class="filterCounter === 0 ? 'border-gray-300' : 'border-black'"
  >
    <FilterIcon :color="filterCounter === 0 ? '#667085' : '#000000'" />
    <span
      class="font-inter font-normal text-sm leading-6"
      :class="filterCounter === 0 ? 'text-gray-500' : 'text-black'"
      >Filter</span
    >
    <div
      class="p-[0.25rem] bg-white absolute -top-2 -right-2"
      :class="filterCounter === 0 ? 'hidden' : 'block'"
    >
      <div class="w-5 h-5 bg-black rounded-full flex items-center justify-center">
        <span class="font-inter font-bold text-white text-[10px]">{{ filterCounter }}</span>
      </div>
    </div>
  </button>
  <!-- MOBILE RESOLUTION FILTER -->
  <div
    :class="filterActive ? 'flex xl:hidden' : 'hidden xl:hidden'"
    class="w-full h-screen bg-white fixed top-0 left-0 flex-col z-10"
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
    <div class="px-18 pt-6 pb-0 flex flex-col" :class="{ hidden: activeTab === 'sorting' }">
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
                <CheckIcon color="#7F56D9" />
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
                <CheckIcon color="#7F56D9" />
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
      <div class="pt-5 pb-[7rem] h-[12rem] overflow-auto">
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
    <div
      :class="{ hidden: activeTab === 'filter' }"
      class="px-18 pt-6 pb-0 h-auto flex flex-col gap-4"
    >
      <!-- ASC/DESC -->
      <div class="w-[22.5rem] group relative">
        <div
          class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
        >
          <AscIcon />
          <label class="font-inter font-semibold text-sm leading-6 text-gray-600">A-Z</label>
          <div class="ml-auto hidden group-has-[:checked]:inline-block">
            <GreenSelectedIcon />
          </div>
        </div>
        <input
          type="radio"
          name="sort_alphabet"
          value="asc"
          class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
          v-model="this.selectedOptions.sort_alphabet"
        />
      </div>
      <div class="w-[22.5rem] group relative">
        <div
          class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
        >
          <DescIcon />
          <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Z-A</label>
          <div class="ml-auto hidden group-has-[:checked]:inline-block">
            <GreenSelectedIcon />
          </div>
        </div>
        <input
          type="radio"
          name="sort_alphabet"
          value="desc"
          class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
          v-model="this.selectedOptions.sort_alphabet"
        />
      </div>
      <!-- MOST POPULAR -->
      <div class="w-[22.5rem] group relative">
        <div
          class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
        >
          <PopularIcon />
          <label class="font-inter font-semibold text-sm leading-6 text-gray-600"
            >Most popular</label
          >
          <div class="ml-auto hidden group-has-[:checked]:inline-block">
            <GreenSelectedIcon />
          </div>
        </div>
        <input
          type="checkbox"
          name="sort_alphabet"
          class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
          v-model="this.selectedOptions.sort_popular"
        />
      </div>
      <!-- DATE-->
      <div class="w-[22.5rem] group relative">
        <div
          class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
        >
          <NewestIcon />
          <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Newest</label>
          <div class="ml-auto hidden group-has-[:checked]:inline-block">
            <GreenSelectedIcon />
          </div>
        </div>
        <input
          type="radio"
          name="sort_date"
          value="newest"
          class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
          v-model="this.selectedOptions.sort_date"
        />
      </div>
      <div class="w-[22.5rem] group relative">
        <div
          class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
        >
          <OldestIcon />
          <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Oldest</label>
          <div class="ml-auto hidden group-has-[:checked]:inline-block">
            <GreenSelectedIcon />
          </div>
        </div>
        <input
          type="radio"
          name="sort_date"
          value="oldest"
          class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
          v-model="this.selectedOptions.sort_date"
        />
      </div>
    </div>
    <!-- CONFIRM/CANCEL -->
    <div
      class="w-full py-22 px-18 flex gap-[0.625rem] bg-white shadow-inner absolute bottom-0 left-0"
      :class="isOptionsEmpty ? 'hidden' : 'block'"
    >
      <button
        class="font-inter font-semibold text-lg leading-6 rounded-[10px] text-white bg-purple-500 py-18 px-[2.125rem] w-[15.875rem]"
      >
        Confirm
      </button>
      <button
        class="font-inter font-semibold text-lg leading-6 rounded-[10px] text-gray-700 border border-gray-300 bg-white py-18 px-[2.125rem]"
        @click="reset(closeFilter)"
      >
        Cancel
      </button>
    </div>
  </div>
  <!-- DESKTOP RESOLUTION FILTER  -->
  <div
    class="w-[66.625rem] border border-black rounded-xl p-4 flex-col"
    :class="filterActive ? 'hidden xl:flex ' : 'hidden xl:hidden'"
  >
    <header class="bg-gray-75 rounded-xl p-4 flex gap-4 items-center w-full">
      <button class="flex items-center py-3 px-[0.875rem] bg-black rounded-xl gap-2">
        <FilterIcon color="#ffffff" />
        <span class="font-inter font-normal text-sm leading-6 text-white">Filter</span>
      </button>
      <!-- SEARCH -->
      <div class="flex flex-1 items-center bg-white px-6 py-3 border border-gray-300 rounded-full">
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
      <!-- CONFIRM/CANCEL -->
      <div class="w-fit flex items-center gap-4" :class="isOptionsEmpty ? 'hidden' : 'block'">
        <button
          class="font-inter font-semibold text-sm leading-6 rounded-[10px] text-white bg-purple-500 py-[0.625rem] px-8 w-fit"
        >
          Confirm
        </button>
        <button
          class="font-inter font-normal text-sm leading-6 text-gray-500 px-4 border-l border-gray-300"
          @click="reset(null)"
        >
          Reset all filters
        </button>
      </div>
      <div @click="closeFilter">
        <CrossIcon />
      </div>
    </header>
    <div class="flex gap-[0.625rem]">
      <!-- FILTER -->
      <div class="w-[61%] border border-gray-300 rounded-xl p-4">
        <h3 class="font-inter font-semibold text-sm text-purple-500 mb-4">Filter by</h3>
        <!-- QUIZES CHECKBOXES -->
        <div class="flex flex-col gap-4 pb-5 border-b border-gray-300">
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
                class="absolute top-0 left-0 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-md bg-white peer-checked:border-[#000000] peer-checked:bg-[#000000]"
              >
                <div class="hidden group-has-[:checked]:inline-block">
                  <CheckIcon color="#ffffff" />
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
                class="absolute top-0 left-0 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-md bg-white peer-checked:border-[#000000] peer-checked:bg-[#000000]"
              >
                <div class="hidden group-has-[:checked]:inline-block">
                  <CheckIcon color="#ffffff" />
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
        <div class="pt-5 pb-[7rem] h-[12rem] overflow-auto">
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
      <!-- SORTING -->
      <div class="w-[39%] border border-gray-300 rounded-xl p-4">
        <h3 class="font-inter font-semibold text-sm text-purple-500 mb-4">Sort by</h3>
        <!-- ASC/DESC -->
        <div class="w-[22.5rem] group relative">
          <div
            class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
          >
            <AscIcon />
            <label class="font-inter font-semibold text-sm leading-6 text-gray-600">A-Z</label>
            <div class="ml-auto hidden group-has-[:checked]:inline-block">
              <GreenSelectedIcon />
            </div>
          </div>
          <input
            type="radio"
            name="sort_alphabet"
            value="asc"
            class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
            v-model="this.selectedOptions.sort_alphabet"
          />
        </div>
        <div class="w-[22.5rem] group relative">
          <div
            class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
          >
            <DescIcon />
            <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Z-A</label>
            <div class="ml-auto hidden group-has-[:checked]:inline-block">
              <GreenSelectedIcon />
            </div>
          </div>
          <input
            type="radio"
            name="sort_alphabet"
            value="desc"
            class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
            v-model="this.selectedOptions.sort_alphabet"
          />
        </div>
        <!-- MOST POPULAR -->
        <div class="w-[22.5rem] group relative">
          <div
            class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
          >
            <PopularIcon />
            <label class="font-inter font-semibold text-sm leading-6 text-gray-600"
              >Most popular</label
            >
            <div class="ml-auto hidden group-has-[:checked]:inline-block">
              <GreenSelectedIcon />
            </div>
          </div>
          <input
            type="checkbox"
            name="sort_alphabet"
            class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
            v-model="this.selectedOptions.sort_popular"
          />
        </div>
        <!-- DATE-->
        <div class="w-[22.5rem] group relative">
          <div
            class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
          >
            <NewestIcon />
            <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Newest</label>
            <div class="ml-auto hidden group-has-[:checked]:inline-block">
              <GreenSelectedIcon />
            </div>
          </div>
          <input
            type="radio"
            name="sort_date"
            value="newest"
            class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
            v-model="this.selectedOptions.sort_date"
          />
        </div>
        <div class="w-[22.5rem] group relative">
          <div
            class="flex w-full p-3 rounded-lg gap-4 items-center bg-white group-has-[:checked]:bg-gray-200 pointer-events-none"
          >
            <OldestIcon />
            <label class="font-inter font-semibold text-sm leading-6 text-gray-600">Oldest</label>
            <div class="ml-auto hidden group-has-[:checked]:inline-block">
              <GreenSelectedIcon />
            </div>
          </div>
          <input
            type="radio"
            name="sort_date"
            value="oldest"
            class="opacity-0 absolute top-0 left-0 w-full h-full p-3"
            v-model="this.selectedOptions.sort_date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
