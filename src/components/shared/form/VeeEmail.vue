<script>
import { Field, ErrorMessage } from 'vee-validate'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import clearServerErrors from '@/mixins/clearServerErrors';

export default {
  components: {
    Field,
    ErrorIcon,
    ErrorMessage
  },
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    label: { type: String, required: true },
    errors: { type: Object, required: true }
  },

  mixins: [clearServerErrors],

}
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <label :for="id" class="font-inter font-normal text-sm text-gray-700 leading-4">{{
      label
    }}</label>
    <div class="w-full relative">
      <Field
        @input="clearServerError"
        :name="name"
        :id="id"
        type="email"
        class="w-full border border-gray-300 rounded-[10px] py-[1.125rem] px-4 focus:outline-none focus:border-[0.1875rem] focus:border-purple-100 font-inter font-normal text-base leading-5 text-black placeholder:text-gray-500"
        :class="{ 'border-red-100': errors[name] }"
        placeholder="Example@gmail.com"
      />

      <div v-if="errors[name]" class="absolute top-6 right-4">
        <ErrorIcon />
      </div>
    </div>
    <ErrorMessage :name="name" class="font-inter font-normal text-sm text-red-500" />
  </div>
  <!-- SERVER ERRORS -->
  <div
    v-if="
      this.$store.getters['errors/getErrorStatus'] === 'LOGIN_WRONG_INPUT' ||
      this.$store.getters['errors/getErrorStatus'] === 'REGISTRATION_WRONG_INPUT'
    "
    class="font-inter font-normal text-sm text-red-500"
  >
    {{ this.$store.getters['errors/getErrorText'] }}
  </div>
</template>
