<script setup lang="ts">
interface Props {
  label?: string
  inputId?: string
}

const props = withDefaults(defineProps<Props>(), {
  inputId: '',
  label: '',
})

const id = useId();
</script>

<template>
  <div class="mb-4">
    <label
      v-if="props.label || $slots.label"
      class="text-sm font-medium mb-1 block"
      :for="id"
    >
      <slot name="label">{{ props.label }}</slot>
    </label>
    <slot :id="id" />
  </div>
</template>
