<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ $t('uiAdd') }}</h1>
</template>

<style scoped></style>
