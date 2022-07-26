<template>
  <a-layout>
    <header theme="light">
      <!-- <div class="logo-container">
        <Logo />
      </div> -->
      <Sidebar />
    </header>

    <a-layout-content>
      <AppMain></AppMain>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout-content>

    <!-- left sidebar -->

    <!-- right sidebar -->
  </a-layout>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import AppMain from '../components/AppMain.vue';
import Sidebar from '../components/Sidebar/index.vue';
</script>

<style scoped lang="scss">
// .header {
//   background-color: white;
// }

.ant-layout {
  background-color: $body-bg;
  .logo-container {
    height: 64px;
    text-align: center;
    .brand-logo {
      margin: auto;
      height: 100%;
    }
  }
}
</style>
