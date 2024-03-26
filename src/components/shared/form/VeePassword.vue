<script>
import { Field } from 'vee-validate'
import ErrorIcon from '@/components/icons/ErrorIcon.vue'
import ShowPassWordIcon from '@/components/icons/ShowPassWordIcon.vue'
import HidePassWordIcon from '@/components/icons/HidePassWordIcon.vue'

export default {
  components: {
    Field,
    ErrorIcon,
    ShowPassWordIcon,
    HidePassWordIcon
  },
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    errorText: { type: String, required: false }
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
  <Field :name="name" v-slot="{ field, errorMessage }">
    <div class="w-full flex flex-col gap-2">
      <label :for="id" class="font-inter font-normal text-sm text-gray-700 leading-4"
        >Password</label
      >
      <div class="w-full relative">
        <input
          v-bind="field"
          :id="id"
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
</template>
