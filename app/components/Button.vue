<script setup lang="ts">
interface Props {
  icon?: string
  mode?: 'primary' | 'secondary'
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  icon: undefined,
  mode: 'primary',
  loading: false,
})

const buttonMode = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
}
</script>

<template>
  <ButtonConditional
  class="btn"
  :class="[buttonMode[props.mode], { 'pointer-events-none bg-opacity-80': props.loading }]">
    <Icon v-if="props.icon" :name="props.icon" />
    <slot />
    <div v-if="props.loading" class="loading-bar"></div>
  </ButtonConditional>
</template>

<style scoped>
.loading-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
  background: currentColor;
  background-size: 50% 100%;
  animation: loading-bar 1.5s infinite;
}

@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
