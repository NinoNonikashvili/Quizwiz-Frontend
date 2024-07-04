<script>
import { Form as VeeForm } from 'vee-validate'
import VeePassword from '@/components/shared/form/VeePassword.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'
import VeeEmail from '@/components/shared/form/VeeEmail.vue'
import VeeCheckbox from '@/components/shared/form/VeeCheckbox.vue'
import VeeText from '@/components/shared/form/VeeText.vue'




export default {
  components: {
    VeeForm,
    VeePassword,
    VeeSubmitBtn,
    VeeEmail,
    VeeCheckbox,
    VeeText
  },

  data: () => ({
    min: 6,
    schema: {
      username: 'required:Username|minLength:3',
      email: 'required:Email|email',
      password: 'required:Password|minLength:3',
      confirm_password: 'required:This field|confirmed:password',
      terms: 'required:checkbox'
    },
    showPassword: false,
    showConfirmedPassword: false
  }),
  methods: {
    submit(values) {
      this.$store.dispatch('signup/signup', values)
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full xl:w-[26.625rem]">
    <h1
      class="text-center xl:text-start font-raleway font-extrabold leading-10 text-black text-3xl"
    >
      Create Account
    </h1>
    <span
      class="xl:order-3 text-center xl:text-start font-inter font-normal text-base text-black opacity-70 mt-6 xl:mt-9"
      >Already have an account?
      <RouterLink :to="{ name: 'login' }" class="font-inter font-semibold text-base text-purple-500"
        >Log in</RouterLink
      ></span
    >
    <VeeForm
      class="xl:order-2 w-full flex flex-col gap-6 mt-10"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <VeeText name="username" id="registerUsername" label="Username" :errors="errors" />

      <VeeEmail name="email" id="registerEmail" label="Email" :errors="errors" />

      <VeePassword name="password" id="registerPassword" label="Create password" :errors="errors" />

      <VeePassword
        name="confirm_password"
        id="registerConfirmPassword"
        label="Confirm password"
        :errors="errors"
      />

      <VeeCheckbox
        name="terms"
        id="registerTerms"
        label="I agree terms and conditions"
        :errors="errors"
      />

      <VeeSubmitBtn text="Sign up" :errors="errors" />
    </VeeForm>
  </div>
</template>
