<template>
  <a-layout-sider>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="v in $store.getters.appRoutes" :key="v.id || v.name">
        <SidebarItem :item="v"></SidebarItem>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
// import { mapState } from 'vuex';
import SidebarItem from './SidebarItem.vue';
/** 当前选中的菜单项 key 数组*/
let selectedKeys = reactive([]);
</script>
