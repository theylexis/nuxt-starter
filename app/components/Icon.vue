<script setup lang="ts">
interface Props {
  name: string
}

const props = defineProps<Props>()
</script>

<template>
  <i :class="props.name" />
</template>

<style scoped>
i {
  display: inline-block;
}
</style>
