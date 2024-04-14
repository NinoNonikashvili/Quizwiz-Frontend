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
      isInputActive: false
    }
  },
  methods: {
    setInputActive() {
      return (this.isInputActive = true)
    },
    unsetInputActive() {
      return (this.isInputActive = false)
    }
  }
}
</script>

<template>
  <div
    :class="
      isInputActive
        ? 'absolute top-0 left-0 z-10 w-screen h-screen bg-white py-6 xl:static xl:w-fit xl:h-auto xl:my-0'
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
      />
      <div
        class="bg-white border-l border-gray-300 p-3"
        :class="isInputActive ? 'block' : 'hidden'"
        @click="unsetInputActive()"
      >
        <CrossIcon />
      </div>
    </div>
  </div>
</template>
