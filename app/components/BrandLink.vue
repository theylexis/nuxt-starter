<script setup lang="ts">
</script>

<template>
  <NuxtLink
    class="flex h-full items-center"
    to="/"
    :title="$t('home')"
  >
    <BrandLogo class="transition-transform duration-200 ease-in-out hover:scale-110" />
  </NuxtLink>
</template>
