<script>
import { Form as VeeForm } from 'vee-validate'
import '@/plugins/vee-validate/rules'
import VeePassword from '@/components/shared/form/VeePassword.vue'
import VeeEmail from '@/components/shared/form/VeeEmail.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'
import VeeCheckbox from '@/components/shared/form/VeeCheckbox.vue'

export default {
  components: {
    VeeForm,
    VeePassword,
    VeeEmail,
    VeeSubmitBtn,
    VeeCheckbox
  },

  data: () => ({
    schema: {
      email: 'required:Email|email',
      password: 'required:Password|minLength:3'
    },
    showPassword: false
  }),
  methods: {
    submit(values) {
      console.log(values)
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full xl:w-[26.625rem] mt-3">
    <h1
      class="text-center xl:text-start font-raleway font-extrabold leading-10 text-black text-3xl"
    >
      Hi, Welcome! &#128075;
    </h1>
    <span
      class="xl:order-3 text-center xl:text-start font-inter font-normal text-base text-gray-700 mt-6 xl:mt-9"
      >Don't have an account?
      <RouterLink
        :to="{ name: 'register' }"
        class="font-inter font-semibold text-base text-purple-500"
        >Sign up</RouterLink
      ></span
    >
    <VeeForm
      class="xl:order-2 w-full flex flex-col gap-6 mt-10"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <!-- EMAIL -->

      <VeeEmail name="email" id="loginEmail" label="Email" :errors="errors" />

      <!-- PASSWORD -->

      <VeePassword name="password" id="loginPassword" label="Password" :errors="errors" />

      <div class="flex w-full justify-between">
        <!-- REMEMBER PASSWORD -->
        <VeeCheckbox
          name="rememberPass"
          id="rememberPass"
          label="Remember for 30 days"
          :errors="errors"
          width="w-fit"
        />
        <!-- FORGOT PASSWORD -->
        <RouterLink
          :to="{ name: 'resetPass' }"
          class="bg-transparent font-inter font-normal text-sm leading-4 text-gray-700"
        >
          Forgot password?
        </RouterLink>
      </div>

      <!-- Submit -->
      <VeeSubmitBtn text="Log in" :errors="errors" />
    </VeeForm>
  </div>
</template>
