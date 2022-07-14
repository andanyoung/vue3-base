<template>
  <a-layout>
    <a-layout-header class="header">
      <Logo></Logo>
    </a-layout-header>
    <a-layout>
      <!-- left sidebar -->
      <Sidebar />
      <a-layout-content>
        <AppMain></AppMain>
      </a-layout-content>
      <!-- right sidebar -->
      <!-- <a-layout-sider>Sider</a-layout-sider> -->
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script setup>
import Logo from '../components/Logo.vue';
import AppMain from './components/AppMain.vue';
import Sidebar from './components/Sidebar/index.vue';
</script>

<style scoped lang="scss">
// .header {
//   background-color: white;
// }
</style>
