<script>
import { Form as VeeForm } from 'vee-validate'
import '@/plugins/vee-validate/rules'
import VeePassword from '@/components/shared/form/VeePassword.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'

export default {
  components: {
    VeeForm,
    VeePassword,
    VeeSubmitBtn
  },

  data: () => ({
    schema: {
      password: 'required:Password|minLength:3',
      confirmPassword: 'required:This field|confirmed:password'
    },
    showPassword: false
  }),
  methods: {
    submit(values) {
      console.log(values)
      console.log(this.$route.query)
      let data = {
        email: this.$route.query.email,
        token: this.$route.query.token,
        password: values.password,
        password_confirmation: values.confirmPassword
      }
      this.$store.dispatch('resetPassword/handleSendNewPassword', data)
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full xl:w-[26.625rem] mt-3">
    <h1
      class="text-center xl:text-start font-raleway font-extrabold leading-10 text-black text-3xl"
    >
      Reset password
    </h1>
    <span
      class="text-center xl:text-start font-inter font-normal text-sm leading-6 text-gray-600 mt-6 xl:mt-9"
      >Please type something you’ll remember
    </span>
    <VeeForm
      class="w-full flex flex-col gap-6 mt-10"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <!-- PASSWORD -->

      <VeePassword name="password" id="newPassword" label="New Password" :errors="errors" />
      <!-- CONFIRM PASSWORD -->
      <VeePassword
        name="confirmPassword"
        id="confirmNewPassword"
        label="Confirm Password"
        :errors="errors"
      />

      <!-- Submit -->
      <VeeSubmitBtn text="Reset password" :errors="errors" />
    </VeeForm>
    <span class="text-start font-inter font-normal text-base text-black opacity-70 mt-6 xl:mt-9"
      >Already have an account?
      <RouterLink :to="{ name: 'login' }" class="font-inter font-semibold text-base text-purple-500"
        >Sign in</RouterLink
      ></span
    >
  </div>
</template>
