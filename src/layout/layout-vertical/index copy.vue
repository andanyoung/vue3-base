<template>
  <div class="vertical-layout h-100">
    <header class="header header-shadow"></header>

    <div class="main-menu">
      <div class="logo-container">
        <Logo />
      </div>

      <Sidebar />
    </div>
  </div>
  <a-layout>
    <a-layout-sider
      breakpoint="sm"
      collapsible
      theme="light"
      width="260"
      :trigger="null"
    >
    </a-layout-sider>

    <a-layout>
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
.header {
  background-color: white;
  min-height: $navbar-height;
  transition: 300ms ease all, background 0s;
  z-index: 997;

  &.header-shadow {
    box-shadow: $box-shadow;
  }
}

.ant-layout {
  background-color: $body-bg;
  .logo-container {
    height: $navbar-height;
    text-align: center;
    .brand-logo {
      margin: auto;
      height: 100%;
    }
  }
}
</style>
