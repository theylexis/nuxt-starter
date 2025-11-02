<script setup lang="ts">
interface Props {
  autofocus?: boolean
}

const props = defineProps<Props>()

const modelValue = defineModel({
  type: String,
  default: '',
})

const input = useTemplateRef<HTMLInputElement>('input')

onMounted(() => {
  if (props.autofocus) {
    input.value?.focus()
  }
})
</script>

<template>
  <input
    ref="input"
    v-model="modelValue"
    class="px-2 py-0.5 outline-none rounded ring ring-muted focus-within:ring-primary"
    type="text"
  >
</template>
