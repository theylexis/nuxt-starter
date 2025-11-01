<script setup lang="ts">
interface Props {
  icon?: string
  mode?: 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  icon: undefined,
  mode: 'primary',
})

const buttonMode = {
  primary: 'btn-primary',
}
</script>

<template>
  <ButtonConditional class="btn" :class="[buttonMode[props.mode]]">
    <Icon v-if="props.icon" :name="props.icon" />
    <slot />
  </ButtonConditional>
</template>
