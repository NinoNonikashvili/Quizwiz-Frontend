<script>
export default {
  beforeUnmount() {
    alert('beforeUnmount: The text inside the p-tag is: ')
  }
}
</script>

<template>
  <routerView />
</template>
