<script setup lang="ts">
const props = defineProps({
  to: { default: '' },
  query: { default: null as any },
  blank: Boolean,
})
</script>

<template>
  <NuxtLink
    v-if="props.to"
    :to="props.query ? { path: props.to, query: props.query } : props.to"
    :target="props.blank ? '_blank' : undefined"
    :rel="props.blank ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </NuxtLink>
</template>
