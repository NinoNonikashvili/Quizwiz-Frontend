<script>
import { Form as VeeForm } from 'vee-validate'
import VeeEmail from '@/components/shared/form/VeeEmail.vue'
import VeeSubmitBtn from '@/components/shared/form/VeeSubmitBtn.vue'

export default {
  components: {
    VeeEmail,
    VeeForm,
    VeeSubmitBtn
  },
  data() {
    return {
      schema: {
        email: 'required:Email|email'
      }
    }
  },
  methods: {
    submit(values) {
      console.log('send request')
      this.$store.dispatch('resetPassword/handleResetRequestSent', values)
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full xl:w-[26.625rem] mt-3">
    <h1
      class="text-center xl:text-start font-raleway font-extrabold leading-10 text-black text-3xl"
    >
      Forgot password?
    </h1>
    <span
      class="text-center xl:text-start font-inter font-normal text-sm leading-6 text-gray-600 mt-6 xl:mt-9"
      >Don’t worry! It happens. Please enter the email associated with your account.
    </span>
    <VeeForm
      class="w-full flex flex-col gap-6 mt-10"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <!-- EMAIL -->

      <VeeEmail name="email" id="loginEmail" label="Email" :errors="errors" />

      <!-- Submit -->
      <VeeSubmitBtn text="Send" :errors="errors" />
    </VeeForm>
  </div>
</template>
