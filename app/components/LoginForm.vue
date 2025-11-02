<script setup lang="ts">
const username = ref('')
const password = ref('')

const loading = ref(false)

async function onSubmit() {
  console.log('Submitting login form')
  loading.value = true
  console.log('Logging in with', { username: username.value, password: password.value })
  await new Promise((resolve) => setTimeout(resolve, 5000))
  loading.value = false
}
</script>

<template>
  <Form @submit="onSubmit">
    <FormField label="Username">
      <Input v-model="username" autofocus />
    </FormField>
    <FormField label="Password">
      <Input v-model="password" type="password" />
    </FormField>
    <Button mode="primary" type="submit" :loading="loading">
      {{ $t('logIn') }}
    </Button>
  </Form>
</template>
