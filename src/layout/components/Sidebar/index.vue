<template>
  <a-menu
    v-model:selectedKeys="selectedKeys"
    v-model:openKeys="openKeys"
    theme="light"
    mode="inline"
    class="menu"
  >
    <!-- <template #overflowedIndicator></template> -->
    <template v-for="v in $store.getters.appRoutes" :key="v.id || v.name">
      <MenuItem :item="v"></MenuItem>
    </template>
  </a-menu>
</template>

<script setup>
import { useRoute } from 'vue-router';
import MenuItem from './MenuItem/index.vue';
/** 当前选中的菜单项 key 数组*/
const route = useRoute();
let selectedKeys = ref([route.name]);
let openKeys = ref([route.name]);
</script>

<style lang="scss">
.menu {
  // width: 600px;
  font-size: 1.1rem;
}
</style>
