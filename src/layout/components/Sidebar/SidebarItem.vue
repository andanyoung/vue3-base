<template>
  <template v-if="!item.hidden || item.hidden === undefined">
    <Link v-if="!hasOneShowingChild && !onlyOneChild" :item="item">
      <a-menu-item :key="item.id || item.name">
        <span> {{ title }} </span>
        <template v-if="item.meta && item.meta.icon" #icon>
          <svg-icon :name="item.meta.icon"></svg-icon>
        </template>
      </a-menu-item>
    </Link>
    <Link v-else-if="!hasOneShowingChild && onlyOneChild" :item="onlyOneChild">
      <a-menu-item :key="onlyOneChild.id || onlyOneChild.name">
        <span>{{
          onlyOneChild.meta ? onlyOneChild.meta.title : onlyOneChild.name
        }}</span>
        <template v-if="onlyOneChild.meta && onlyOneChild.meta.icon" #icon>
          <svg-icon :name="onlyOneChild.meta.icon"></svg-icon>
        </template>
      </a-menu-item>
    </Link>
    <template v-else>
      <a-sub-menu :key="item.id || item.name">
        <template v-if="item.meta && item.meta.icon" #icon>
          <svg-icon :name="item.meta.icon"></svg-icon>
        </template>
        <template #title>
          <span> {{ title }} </span>
        </template>
        <sidebar-item
          v-for="v in showingChildren"
          :key="v.id || v.name"
          :item="v"
        ></sidebar-item>
      </a-sub-menu>
    </template>
  </template>
</template>

<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import Link from './link.vue';
let props = defineProps({
  item: {
    type: Object,
  },
});

//需要展示的Children
const showingChildren = computed(() => {
  if (
    props.item.hidden ||
    !props.item.children ||
    props.item.children.length == 0
  ) {
    return null;
  }
  return props.item.children.filter((i) => {
    if (i.hidden) {
      return false;
    } else {
      return true;
    }
  });
});
/**
 * 是否展示子菜单
 */
let hasOneShowingChild = computed(() => {
  //没有要展示的Children
  if (!showingChildren.value || showingChildren.value.length == 0) {
    return false;
  }

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.value.length === 1) {
    return false;
  }
  return true;
});
//标题
let title = computed(() => {
  return props.item.meta ? props.item.meta.title : props.item.name;
});

let onlyOneChild = computed(() => {
  if (showingChildren.value && showingChildren.value.length === 1) {
    return Object.assign({ ...props.item }, showingChildren.value[0]);
  } else {
    return false;
  }
});
</script>
