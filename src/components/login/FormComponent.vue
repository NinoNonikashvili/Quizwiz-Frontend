<script>
import { Form as VeeForm, Field } from 'vee-validate'
import '@/plugins/vee-validate/rules'
import CheckIcon from '@/components/icons/CheckIcon.vue'
import VeePassword from '@/components/shared/form/VeePassword.vue'
import VeeEmail from '@/components/shared/form/VeeEmail.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'

export default {
  components: {
    VeeForm,
    Field,
    CheckIcon,
    VeePassword,
    VeeEmail,
    VeeSubmitBtn
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
    >
      <!-- EMAIL -->

      <VeeEmail name="email" id="loginEmail" label="Email" />

      <!-- PASSWORD -->

      <VeePassword name="password" id="loginPassword" label="Password" />

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
        <RouterLink
          :to="{ name: 'resetPass' }"
          class="bg-transparent font-inter font-normal text-sm leading-4 text-gray-700"
        >
          Forgot password?
        </RouterLink>
      </div>

      <!-- Submit -->
      <VeeSubmitBtn text="Log in" />
    </VeeForm>
  </div>
</template>
