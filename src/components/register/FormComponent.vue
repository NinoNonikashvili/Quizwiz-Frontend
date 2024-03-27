<script>
import { Form as VeeForm } from 'vee-validate'
import '@/plugins/vee-validate/rules'
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
      username: 'required:Username',
      email: 'required:Email|email',
      password: 'required:Password|minLength:3',
      confirmPassword: 'required:This field|confirmed:password',
      agreeTerms: 'required:checkbox',
      terms: 'required:terms'
    },
    showPassword: false,
    showConfirmedPassword: false
  }),
  methods: {
    submit(values) {
      console.log(values)
    },
    checkboxVal(val) {
      console.log(val.target.value)
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
        name="confirmPassword"
        id="registerConfirmPassword"
        label="Confirm password"
        :errors="errors"
      />

      <VeeCheckbox
        name="agreeTerms"
        id="registerTerms"
        label="I agree terms and conditions"
        :errors="errors"
      />

      <VeeSubmitBtn text="Sign up" :errors="errors" />
    </VeeForm>
  </div>
</template>
