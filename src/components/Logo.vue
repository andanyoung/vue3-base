<template>
  <div class="logo-container">
    <transition name="sidebarLogoFade">
      <router-link key="collapse" class="logo-link" to="/">
        <img v-if="logo" :src="logo" class="logo" />
        <h1 v-if="collapse" class="logo-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup name="logo">
import logo from '@/assets/images/logo.png';

let title = ref('Admin4j');
defineProps({
  collapse: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss" scoped>
.logo-container {
  display: inline;
  position: relative;
  // background-color: rgb(0, 255, 55);
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  & .logo-link {
    height: 100%;
    width: 100%;

    & .logo {
      display: inline-block;
      width: 45px;
      height: 45px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .logo-title {
      display: inline-block;
      margin: 0;
      color: red;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .logo {
      margin-right: 0px;
    }
  }
}
</style>
