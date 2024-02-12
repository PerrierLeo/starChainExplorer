<script setup>

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-2xl">{{ msg }}</h1>
</template>


