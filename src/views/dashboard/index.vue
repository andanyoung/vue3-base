<template>
  <svg-icon
    name="http://localhost:8086/bug.svg"
    class="icon"
    :size="300"
    :color="'blue'"
  ></svg-icon>
  <Logo></Logo>
</template>
<script setup name="dashboard">
import Logo from '@/components/Logo.vue';
import SvgIcon from '@/components/SvgIcon.vue';
</script>
