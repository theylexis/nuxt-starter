<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <Button
      :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
      mode="primary"
      :aria-label="$t('switchToColorMode', { mode: isDark ? $t('light') : $t('dark') })"
      @click="isDark = !isDark"
    >
      {{ $t('colorMode', { mode: isDark ? $t('light') : $t('dark') }) }}
    </Button>

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>
