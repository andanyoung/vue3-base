<template>
  <template v-if="!item.hidden">
    <Link v-if="!hasOneShowingChild" :item="item">
      <a-menu-item :key="item.id || item.name">
        <span>{{ title }}</span>
        <template v-if="item.meta && item.meta.icon" #icon>
          <svg-icon :name="item.meta.icon"></svg-icon>
        </template>
      </a-menu-item>
    </Link>
    <template v-else>
      <a-sub-menu :key="item.id || item.name">
        <template #icon>
          <svg-icon :name="item.meta.icon"></svg-icon>
        </template>
        <template #title>
          <span>
            {{ title }}
          </span>
        </template>
        <sidebar-item
          v-for="v in item.children"
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

//需要展示的item
let showItem = computed(() => props.item);
//标题
let title = computed(() =>
  props.item.meta ? props.item.meta.title : props.item.mame
);
/**
 * 是否展示子菜单
 */
let hasOneShowingChild = computed(() => {
  console.log('hasOneShowingChild', this);

  if (
    props.item.hidden ||
    !props.item.children ||
    props.item.children.length == 0
  ) {
    return false;
  }

  //需要展示的Children
  const showingChildren = props.item.children.filter((i) => {
    if (i.hidden) {
      return false;
    } else {
      //   this.onlyOneChild = i;
      return true;
    }
  });

  //没有要展示的Children
  if (showingChildren.length == 0) {
    return false;
  }

  // When there is only one child router, the child router is displayed by default
  if (showingChildren.length === 1) {
    // this.onlyOneChild = { ...props.item, path: '', noShowingChildren: true };
    return false;
  }
  return true;
});
</script>
