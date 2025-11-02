<script setup lang="ts">
interface Props {
  to?: string
}

const props = defineProps<Props>()

const attrs = useAttrs()
const hasClickHandler = computed(() => !!attrs.onClick)
const isSubmitButton = computed(() => attrs.type === 'submit')
</script>

<template>
  <CustomLink v-if="props.to" :to="props.to">
    <slot />
  </CustomLink>
  <button
    v-else-if="hasClickHandler || isSubmitButton"
    v-bind="$attrs"
  >
    <slot />
  </button>
  <div v-else>
    <slot />
  </div>
</template>
