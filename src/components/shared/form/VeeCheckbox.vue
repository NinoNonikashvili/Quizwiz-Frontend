<script>
import { Field, ErrorMessage } from 'vee-validate'
import CheckIcon from '@/components/icons/CheckIcon.vue'

export default {
  components: {
    Field,
    ErrorMessage,
    CheckIcon
  },
  props: {
    name: { type: String, required: true },
    id: { type: String, required: true },
    label: { type: String, required: true },
    errors: { type: Object, required: true },
    width: { type: String, required: false, default: 'w-full' }
  }
}
</script>

<template>
  <div class="flex flex-col gap-2" :class="width">
    <div class="flex gap-3 items-center" :class="width">
      <div class="relative group h-5">
        <Field
          :name="name"
          type="checkbox"
          :id="id"
          :value="true"
          :unchecked-value="false"
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
      <label :for="id" class="font-inter font-normal text-sm text-gray-700 leading-4">
        {{ label }}
      </label>
    </div>

    <ErrorMessage :name="name" class="font-inter font-normal text-sm text-red-500" />
  </div>
</template>
