<template>
  <router-link class="brand-logo" to="/">
    <img v-if="logo" :src="logo" class="logo" />
    <h1 v-if="collapse" class="brand-text">{{ $store.getters.title }}</h1>
  </router-link>
</template>

<script setup name="logo">
import logo from '@/assets/images/logo.png';

defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
});
</script>
