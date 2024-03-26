<script>
import { Form as VeeForm, Field } from 'vee-validate'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import '@/plugins/vee-validate/rules'
import ShowPassWordIcon from '@/components/icons/ShowPassWordIcon.vue'
import HidePassWordIcon from '@/components/icons/HidePassWordIcon.vue'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import VeePassword from '@/components/shared/form/VeePassword.vue'

export default {
  components: {
    VeeForm,
    Field,
    ErrorIcon,
    ShowPassWordIcon,
    CheckIcon,
    HidePassWordIcon,
    VeePassword
  },

  data: () => ({
    schema: {
      email: 'required:Email|email',
      password: 'required:Password|minLength:3',
      pass1: 'required:Password|minLength:3',
      pass2: 'required:Password|minLength:3'
    },
    showPassword: false
  }),
  methods: {
    setPassword() {
      this.showPassword = true
    },
    unsetPassword() {
      this.showPassword = false
    },

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
    >
      <!-- EMAIL -->
      <Field name="email" v-slot="{ field, errorMessage }">
        <div class="w-full flex flex-col gap-2">
          <label for="loginEmail" class="font-inter font-normal text-sm text-gray-700 leading-4"
            >Email</label
          >
          <div class="w-full relative">
            <input
              v-bind="field"
              id="loginEmail"
              type="email"
              class="w-full border border-gray-300 rounded-[10px] py-[1.125rem] px-4 focus:outline-none focus:border-[0.1875rem] focus:border-purple-100 font-inter font-normal text-base leading-5 text-black placeholder:text-gray-500"
              :class="{ 'border-red-100': errorMessage }"
              placeholder="Example@gmail.com"
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
      <!-- PASSWORD -->
      <Field name="password" v-slot="{ field, errorMessage }">
        <div class="w-full flex flex-col gap-2">
          <label for="loginPassword" class="font-inter font-normal text-sm text-gray-700 leading-4"
            >Password</label
          >
          <div class="w-full relative">
            <input
              v-bind="field"
              id="loginPassword"
              :type="showPassword ? 'text' : 'password'"
              class="w-full border border-gray-300 rounded-[10px] py-[1.125rem] px-4 focus:outline-none focus:border-[0.1875rem] focus:border-purple-100 font-inter font-normal text-base leading-5 text-black placeholder:text-gray-500"
              :class="{ 'border-red-100': errorMessage }"
              placeholder="must be 8 characters"
            />
            <div v-if="errorMessage" class="absolute top-6 right-4">
              <ErrorIcon />
            </div>
            <div
              v-if="!errorMessage && showPassword"
              class="absolute top-6 right-4"
              @click="unsetPassword"
            >
              <ShowPassWordIcon />
            </div>
            <div
              v-if="!errorMessage && !showPassword"
              class="absolute top-6 right-4"
              @click="setPassword"
            >
              <HidePassWordIcon />
            </div>
          </div>
          <span v-if="errorMessage" class="font-inter font-normal text-sm text-red-500">{{
            errorMessage
          }}</span>
        </div>
      </Field>
      <VeePassword name="pass1" id="pass1" />
      <VeePassword name="pass2" id="pass2" />

      <div class="flex w-full justify-between">
        <!-- REMEMBER PASSWORD -->
        <Field name="rememberPass" v-slot="{ field, errorMessage }">
          <div class="w-fit flex flex-col gap-2">
            <div class="w-full flex gap-3 items-center">
              <div class="relative group h-5">
                <input
                  v-bind="field"
                  id="rememberPass"
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
                for="rememberPass"
                class="font-inter font-normal text-sm text-gray-700 leading-4"
              >
                Remember for 30 days
              </label>
            </div>
            <span v-if="errorMessage" class="font-inter font-normal text-sm text-red-500">{{
              errorMessage
            }}</span>
          </div>
        </Field>
        <button class="bg-transparent font-inter font-normal text-sm leading-4 text-gray-700">
          Forgot password?
        </button>
      </div>

      <button
        class="mt-9 rounded-[0.625rem] font-inter font-semibold text-base bg-black text-white py-[1.125rem]"
      >
        Log in
      </button>
    </VeeForm>
  </div>
</template>
