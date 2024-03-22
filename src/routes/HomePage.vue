<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LogoTittleMob from '@/components/icons/LogoTittleMob.vue'
import LogoTittleDesk from '@/components/icons/LogoTittleDesk.vue'
import TopRightArrowIcon from '@/components/icons/TopRightArrowIcon.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    LogoTittleMob,
    LogoTittleDesk,
    TopRightArrowIcon
  }
}
</script>

<template>
  <AppHeader :isHome="true" />
  <main class="xl:relative">
    <div class="pl-12 py-12 xl:pl-24 xl:py-16">
      <div class="xl:hidden">
        <LogoTittleMob />
      </div>
      <div class="hidden xl:block">
        <LogoTittleDesk />
      </div>

      <p class="font-raleway font-semibold text-lg xl:text-3xl text-gray-850 leading-13">
        Play with us, Explore with us
      </p>
    </div>
    <div class="xl:absolute top-20 right-0 h-464 xl:h-936 overflow-hidden">
      <div class="xl:hidden relative">
        <img src="../assets/images/banner.png" alt="woman reading a book" />
        <p class="font-raleway font-bold text-5xl text-white leading-13 absolute left-12 top-220">
          Our mission <br />
          is to <br />
          entertain <br />
          & educate
        </p>
      </div>
      <div class="hidden xl:block">
        <img src="../assets/images/bannerDesk.png" alt="" />
      </div>
    </div>
    <div class="pl-12 py-74 xl:pl-24 xl:py-16 bg-orange-500">
      <p class="font-raleway font-black text-8xl text-white leading-13">200+</p>
      <div class="group flex items-center gap-2">
        <p class="font-raleway font-black text-5xl text-white leading-13 hover:underline">
          Quiz games
        </p>
        <span class="opacity-0 group-[:hover]:opacity-100"><TopRightArrowIcon /></span>
      </div>
    </div>
    <div class="pl-12 py-11 xl:pl-24 xl:py-8 bg-purple-500">
      <p class="font-raleway font-black text-8xl text-white leading-13">25+</p>
      <div class="group flex items-center gap-2">
        <p class="font-raleway font-black text-5xl text-white leading-13 hover:underline">
          Different Genres
        </p>
        <span class="opacity-0 group-[:hover]:opacity-100"><TopRightArrowIcon /> </span>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
