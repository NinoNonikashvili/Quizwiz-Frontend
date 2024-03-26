<script>
import { Form as VeeForm, Field } from 'vee-validate'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import '@/plugins/vee-validate/rules'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import VeePassword from '@/components/shared/form/VeePassword.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'

export default {
  components: {
    VeeForm,
    Field,
    ErrorIcon,
    CheckIcon,
    VeePassword,
    VeeSubmitBtn
  },

  data: () => ({
    min: 6,
    schema: {
      username: 'required:Username',
      email: 'required:Email|email',
      password: 'required:Password|minLength:3',
      confirmPassword: 'required:This field|confirmed:password',
      agreeTerms: 'required:This field'
    },
    showPassword: false,
    showConfirmedPassword: false
  }),
  methods: {
    submit(values) {
      console.log(values)
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
    >
      <!-- USERNAME -->
      <Field name="username" v-slot="{ field, errorMessage }">
        <div class="w-full flex flex-col gap-2">
          <label
            for="registerUsername"
            class="font-inter font-normal text-sm text-gray-700 leading-4"
            >Username</label
          >
          <div class="w-full relative">
            <input
              v-bind="field"
              id="registerUsername"
              type="text"
              class="w-full border border-gray-300 rounded-[10px] py-[1.125rem] px-4 focus:outline-none focus:border-[0.1875rem] focus:border-purple-100 font-inter font-normal text-base leading-5 text-black placeholder:text-gray-500"
              :class="{ 'border-red-100': errorMessage }"
              placeholder="type here"
            />
            <div v-if="errorMessage" class="absolute top-6 right-4">
              <ErrorIcon />
            </div>
          </div>
          <span v-if="errorMessage" class="font-inter font-normal text-sm text-red-500">{{
            errorMessage
          }}</span>
        </div>
      </Field>
      <!-- EMAIL -->

      <VeeEmail name="email" id="registerEmail" label="Email" />
      <!-- PASSWORD -->

      <VeePassword name="password" id="registerPassword" label="Create password" />
      <!-- CONFIRM PASSWORD -->

      <VeePassword name="confirmPassword" id="registerConfirmPassword" label="Confirm password" />
      <!-- AGREE TERMS -->
      <Field name="agreeTerms" v-slot="{ field, errorMessage }">
        <div class="w-full flex flex-col gap-2">
          <div class="w-full flex gap-3 items-center">
            <div class="relative group h-5">
              <input
                v-bind="field"
                id="registerTerms"
                type="checkbox"
                class="opacity-0 peer w-5 h-5"
              />
              <div
                class="absolute top-0 left-0 pointer-events-none w-5 h-5 flex justify-center items-center focus:outline-none border border-gray-300 rounded-full bg-white peer-checked:bg-black"
              >
                <div class="hidden group-has-[:checked]:inline-block">
                  <CheckIcon color="#ffffff" />
                </div>
              </div>
            </div>
            <label
              for="registerTerms"
              class="font-inter font-normal text-sm text-gray-700 leading-4"
            >
              I accept the terms and privacy policy
            </label>
          </div>
          <span v-if="errorMessage" class="font-inter font-normal text-sm text-red-500">{{
            errorMessage
          }}</span>
        </div>
      </Field>

      <VeeSubmitBtn text="Sign up" />
    </VeeForm>
  </div>
</template>
