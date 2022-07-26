<template>
  <Link v-if="!hasOneShowingChild && !onlyOneChild" :item="item">
    <a-menu-item :key="item.id || item.name">
      <template v-if="item.meta && item.meta.icon" #icon>
        <svg-icon :name="item.meta.icon"></svg-icon>
      </template>
      <span> {{ title }} </span>
    </a-menu-item>
  </Link>
</template>
<script setup>
import Link from './link.vue';
let props = defineProps({
  item: {
    type: Object,
  },
});

//标题
let title = computed(() => {
  return props.item.meta ? props.item.meta.title : props.item.name;
});
</script>
