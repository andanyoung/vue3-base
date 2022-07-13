<template>
  <div class="logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="logo-link" to="/">
        <img v-if="logo" :src="`src/assets/images/logo.png`" class="logo" />
        <h1 v-else class="title">{{ title }}</h1>
      </router-link>
      <router-link v-else key="expand" class="logo-link" to="/">
        <img v-if="logo" :src="logo" class="logo" />
        <h1 class="logo-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup name="logo">
let logo = ref(`src/assets/images/logo.png`);
let title = ref('Admin4j-Vue');
defineProps({
  collapse: Boolean,
  default: ref(true),
});
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .logo-link {
    height: 100%;
    width: 100%;

    & .logo {
      display: inline;
      width: 45px;
      height: 45px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .logo-title {
      display: inline;
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
