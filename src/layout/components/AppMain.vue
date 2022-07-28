<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <!-- 使用任何自定义过渡和回退到 `fade` -->
      <transition :name="route.meta.transition || 'fade'">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script setup name="AppMain">
// router.afterEach((to, from) => {
//   const toDepth = to.path.split('/').length
//   const fromDepth = from.path.split('/').length
//   to.meta.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
// })
</script>

<style lang="scss" scoped>
.app-main {
  padding: $content-padding;
}
</style>
