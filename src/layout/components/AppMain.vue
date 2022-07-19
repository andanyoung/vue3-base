<template>
  <section class="app-main">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component
          :is="Component"
          :key="route.meta.name ? route.path : undefined"
        />
      </keep-alive>
    </router-view>
  </section>
</template>
<script setup name="AppMain"></script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  // background-color: brown;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
