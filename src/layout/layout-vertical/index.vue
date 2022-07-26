<template>
  <a-layout>
    <a-layout-sider
      breakpoint="sm"
      collapsible
      theme="light"
      width="260"
      :trigger="null"
    >
      <div class="logo-container">
        <Logo />
      </div>

      <Sidebar />
    </a-layout-sider>

    <a-layout theme="light">
      <a-layout-header theme="light"> </a-layout-header>
      <a-layout-content>
        <AppMain></AppMain>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>

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
