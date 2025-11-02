<script setup lang="ts">
defineEmits<{
  (e: 'submit'): void
}>()
</script>

<template>
  <form @submit.prevent="$emit('submit')">
    <slot />
  </form>
</template>
