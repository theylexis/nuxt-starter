<script setup lang="ts">
import { headerHeightPx } from '~/constants/layout'
</script>

<template>
  <nav
    class="px-4 bg-canvas flex gap-4 items-center left-0 right-0 top-0 justify-between fixed z-50"
    :style="{ height: headerHeightPx }"
  >
    <BrandLink />

    <div class="flex gap-3 items-center">
      <Button mode="primary" to="/login">
        {{ $t('logIn') }}
      </Button>
      <ColorModeButton />
    </div>
  </nav>
</template>
