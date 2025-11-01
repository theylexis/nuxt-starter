<script setup lang="ts">
interface Props {
  to?: string
}

const props = defineProps<Props>()

const attrs = useAttrs()
const hasClickHandler = computed(() => !!attrs.onClick)
</script>

<template>
  <Link v-if="props.to" :to="props.to">
    <slot />
  </Link>
  <button
    v-else-if="hasClickHandler"
    type="button"
  >
    <slot />
  </button>
  <div v-else>
    <slot />
  </div>
</template>
