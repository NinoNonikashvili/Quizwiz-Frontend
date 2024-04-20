<script>
import SearchIcon from '@/components/icons/SearchIcon.vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'

export default {
  name: 'SearchInput',
  components: {
    SearchIcon,
    CrossIcon
  },
  data() {
    return {
      isInputActive: false,
      updateSearchQuery: this.debounce((key) => {
        let query = { ...this.$route.query }
        if ('page' in query) {
          delete query.page
        }
        if (key) {
          query.search = key
        }
        if (!key && 'search' in query) {
          this.$store.commit('quizes/setSearchedQuizes', false)
          delete query.search
        }
        this.$router.push({ name: 'quizes', query: { ...query } })
      }, 1000)
    }
  },
  methods: {
    setInputActive() {
      return (this.isInputActive = true)
    },
    unsetInputActive() {
      return (this.isInputActive = false)
    },
    handleSearchInputChange(key) {
      this.updateSearchQuery(key.target.value)
    },
    debounce(cb, delay) {
      let timerId
      return (args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          cb(args)
        }, delay)
      }
    }
  }
}
</script>

<template>
  <div
    :class="
      isInputActive
        ? 'fixed top-0 left-0 z-10 w-screen h-screen bg-white overflow-y-none py-6 xl:static xl:w-fit xl:h-auto xl:my-0'
        : ''
    "
  >
    <div
      class="flex w-fit overflow-hidden mx-auto xl-mx-0"
      :class="isInputActive ? 'bg-gray-50 rounded-xl border border-gray-300' : ''"
    >
      <div class="p-4">
        <SearchIcon />
      </div>
      <input
        @click="setInputActive()"
        type="text"
        class="font-inter text-sm leading-normal font-normal text-gray-500 bg-transparent focus:outline-none"
        :class="isInputActive ? 'w-72 placeholder-gray-300' : 'w-16 placeholder-gray-500'"
        placeholder="Search"
        @input="handleSearchInputChange"
      />
      <div
        class="bg-white border-l border-gray-300 p-3"
        :class="isInputActive ? 'block' : 'hidden'"
        @click="unsetInputActive()"
      >
        <CrossIcon />
      </div>
    </div>

    <!-- SEARCH RESULTS -->
    <div
      v-if="isInputActive && this.$store.getters['quizes/getSearchedQuizes']"
      class="relative z-50 max-w-[24rem] mx-auto xl:fixed"
    >
      <div
        class="absolute top-0 left-0 w-[24rem] h-[28rem] overflow-y-scroll shadow-lg bg-white z-30 p-4"
      >
        <div v-if="this.$store.getters['quizes/getQuizes']">
          <div v-for="(quiz, index) in this.$store.getters['quizes/getQuizes']" :key="index">
            <RouterLink :to="{ path: 'quizes/' + quiz.id }">
              <p class="font-inter font-semibold text-xl text-gray-600 my-2">
                {{ quiz.title }}
              </p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
