<script>
import BurgerIcon from '@/components/icons/BurgerIcon.vue'
import LogoIcon from '@/components/icons/LogoIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import SearchInput from '@/components/ui/SearchInput.vue'
import LogoutIcon from '../icons/LogoutIcon.vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'

export default {
  props: ['hasSearch'],
  name: 'AppHeader',
  data() {
    return {
      showMenuOffcanvas: false,
      showLogoutOffcanvas: false
    }
  },
  components: {
    BurgerIcon,
    LogoIcon,
    UserIcon,
    SearchInput,
    LogoutIcon,
    CrossIcon
  },
  computed: {
    auth() {
      return this.$store.getters['isUserLoggedIn']
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
    toggleShowMenuOffcanvas() {
      this.showMenuOffcanvas = !this.showMenuOffcanvas
    },
    handleLogoutOffcanvasOutClick(e) {
      if (!this.$el.contains(e.target)) {
        this.showLogoutOffcanvas = false
        window.removeEventListener('click', this.handleLogoutOffcanvasOutClick)
      }
    },
    setShowLogoutOffcanvas() {
      window.addEventListener('click', this.handleLogoutOffcanvasOutClick)
      this.showLogoutOffcanvas = true
    }
  }
}
</script>

<template>
  <header
    class="bg-white px-4 py-4 xl:py-6 xl:px-24 flex justify-between items-center border-b border-gray-300"
  >
    <div class="flex items-center gap-11">
      <!-- Logo home page -->
      <RouterLink :to="{ name: 'home' }">
        <LogoIcon />
      </RouterLink>
      <!-- Qizes  Quiz page  -->
      <RouterLink
        :to="{ name: 'quizes' }"
        class="hidden xl:flex font-inter font-semibold text-sm leading-normal text-gray-600"
        >Quizzes</RouterLink
      >
    </div>
    <div class="w-fit flex gap-5 xl:gap-8 items-center">
      <!-- search -->
      <div :class="{ hidden: hasSearch }">
        <SearchInput />
      </div>
      <!-- burger menu -->
      <div class="xl:hidden" @click="toggleShowMenuOffcanvas">
        <BurgerIcon />
      </div>
      <div class="hidden xl:flex items-center">
        <!-- either login/signup -->
        <div v-if="!auth">
          <RouterLink :to="{ name: 'register' }">
            <button
              class="py-4 px-6 font-raleway text-sm leading-4 font-bold text-white bg-black rounded-md"
            >
              Sign up
            </button>
          </RouterLink>
          <RouterLink :to="{ name: 'login' }">
            <button
              class="py-4 px-6 font-raleway text-sm leading-4 font-bold text-purple-500 bg-white"
            >
              Log in
            </button>
          </RouterLink>
        </div>
        <!-- or user icon -->
        <div @click="setShowLogoutOffcanvas" v-if="auth">
          <!-- show default avatar or user avatar -->
          <div>
            <UserIcon />
          </div>
          <!-- user avatar -->
          <div></div>
        </div>
      </div>
    </div>

    <!-- menu offcanvas -->
    <div class="absolute top-0 left-0 w-80 p-6 bg-white z-10" v-if="showMenuOffcanvas">
      <div class="border-b border-gray-300 flex items-center justify-between w-full pb-5">
        <RouterLink :to="{ name: 'home' }">
          <LogoIcon />
        </RouterLink>
        <div @click="toggleShowMenuOffcanvas">
          <CrossIcon />
        </div>
      </div>
      <div class="border-b border-gray-300 w-full py-5">
        <RouterLink
          :to="{ name: 'quizes' }"
          class="flex font-inter font-semibold text-lg leading-8 text-gray-900"
          >Quizzes</RouterLink
        >
      </div>
      <!--either login/signup   -->
      <div v-if="!auth" class="w-full py-5 flex flex-col gap-6">
        <RouterLink :to="{ name: 'register' }">
          <button
            class="py-4 w-full px-auto font-raleway text-sm leading-4 font-bold text-white bg-black rounded-md"
          >
            Sign up
          </button>
        </RouterLink>
        <RouterLink :to="{ name: 'login' }">
          <button
            class="py-4 w-full px-auto font-raleway text-sm leading-4 font-bold text-purple-500 bg-gray-75"
          >
            Log in
          </button>
        </RouterLink>
      </div>
      <!-- or user data -->
      <div v-if="auth" class="border-b border-gray-300 w-full py-5 flex items-center gap-3">
        <img
          src="../../assets/images/Avatar.png"
          alt=""
          class="w-10 h-10 object-cover rounded-full"
        />
        <div class="w-full flex justify-between">
          <div>
            <h4 class="font-inter font-semibold text-md leading-5 text-gray-900">
              {{ this.$store.getters['getUser'] ? this.$store.getters['getUser'].username : '' }}
            </h4>
            <p class="font-inter font-normal text-sm leading-5 text-gray-600">
              {{ this.$store.getters['getUser'] ? this.$store.getters['getUser'].email : '' }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="auth" class="w-full py-5">
        <button
          @click="logout"
          class="py-4 w-full px-auto font-raleway text-sm leading-4 font-bold text-purple-500 bg-gray-75"
        >
          Log out
        </button>
      </div>
    </div>
    <!-- logout offcanvas -->
    <div
      v-if="showLogoutOffcanvas"
      class="absolute z-10 top-5 right-24 w-80 h-40 px-4 py-8 flex flex-col justify-between bg-white border border-gray-300 rounded-lg"
    >
      <img
        src="../../assets/images/Avatar.png"
        alt=""
        class="w-10 h-10 object-cover rounded-full"
      />
      <div class="w-full flex justify-between">
        <div>
          <h4 class="font-inter font-semibold text-sm leading-5 text-gray-900">
            {{ this.$store.getters['getUser'] ? this.$store.getters['getUser'].username : '' }}
          </h4>
          <p class="font-inter font-normal text-sm leading-5 text-gray-600">
            {{ this.$store.getters['getUser'] ? this.$store.getters['getUser'].email : '' }}
          </p>
        </div>
        <button @click="logout" class="mt-auto">
          <LogoutIcon />
        </button>
      </div>
    </div>
  </header>
</template>
