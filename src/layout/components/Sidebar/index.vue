<template>
  <a-layout-sider>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="v in appRoutes" :key="v.id || v.name">
        <SidebarItem :item="v"></SidebarItem>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import SidebarItem from './SidebarItem.vue';
/** 当前选中的菜单项 key 数组*/
let selectedKeys = reactive([]);

let store = useStore();

let appRoutes = computed(() => {
  let appRoutes = store.getters.appRoutes;
  console.log('menu appRoutes', appRoutes);
  return appRoutes;
});

console.log('menu', appRoutes);
</script>
