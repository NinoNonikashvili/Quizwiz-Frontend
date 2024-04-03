<script>
import { Field, ErrorMessage } from 'vee-validate'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import ShowPassWordIcon from '@/components/icons/ShowPassWordIcon.vue'
import HidePassWordIcon from '@/components/icons/HidePassWordIcon.vue'

export default {
  components: {
    Field,
    ErrorIcon,
    ShowPassWordIcon,
    HidePassWordIcon,
    ErrorMessage
  },
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    label: { type: String, required: true },
    errors: { type: Object, required: true }
  },
  data: () => ({
    showPassword: false
  }),
  methods: {
    setPassword() {
      this.showPassword = true
    },
    unsetPassword() {
      this.showPassword = false
    }
  }
}
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <label :for="id" class="font-inter font-normal text-sm text-gray-700 leading-4">{{
      label
    }}</label>
    <div class="w-full relative">
      <Field
        :name="name"
        :id="id"
        :type="showPassword ? 'text' : 'password'"
        class="w-full border border-gray-300 rounded-[10px] py-[1.125rem] px-4 focus:outline-none focus:border-[0.1875rem] focus:border-purple-100 font-inter font-normal text-base leading-5 text-black placeholder:text-gray-500"
        :class="{ 'border-red-100': errors[name] }"
        placeholder="must be 8 characters"
      />

      <div v-if="errors[name]" class="absolute top-6 right-4">
        <ErrorIcon />
      </div>
      <div
        v-if="!errors[name] && showPassword"
        class="absolute top-6 right-4"
        @click="unsetPassword"
      >
        <ShowPassWordIcon />
      </div>
      <div
        v-if="!errors[name] && !showPassword"
        class="absolute top-6 right-4"
        @click="setPassword"
      >
        <HidePassWordIcon />
      </div>
    </div>

    <ErrorMessage :name="name" class="font-inter font-normal text-sm text-red-500" />
  </div>
</template>
