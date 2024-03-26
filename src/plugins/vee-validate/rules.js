import { defineRule } from 'vee-validate'

defineRule('required', (value, [field]) => {
  if (!value || !value.length) {
    return `${field} is required!`
  }
  return true
})
defineRule('email', (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true
  }
  // Check if email
  if (!/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(value)) {
    return `This field must be a valid email`
  }
  return true
})
defineRule('minLength', (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true
  }
  if (value.length < limit) {
    return `This field must be at least ${limit} characters`
  }
  return true
})

defineRule('confirmed', (value, [target], ctx) => {
  if (value === ctx.form[target]) {
    return true
  }
  return 'Passwords must match'
})
