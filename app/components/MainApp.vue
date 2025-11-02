<script setup lang="ts">
import { headerHeightPx } from '~/constants/layout'
</script>

<template>
  <Main :style="{ paddingTop: headerHeightPx }">
    <Header />
    <slot />
  </Main>
</template>
