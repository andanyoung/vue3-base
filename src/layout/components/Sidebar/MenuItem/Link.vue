<template>
  <component :is="type" v-bind="linkProps(item)"> <slot /></component>
</template>

<script setup>
let props = defineProps({
  item: {
    type: Object,
  },
});

let isExternal = /^(https?:|mailto:|tel:)/.test(props.item.path);

let type = computed(() => {
  return isExternal ? 'a' : 'router-link';
});

function linkProps(item) {
  if (isExternal) {
    return {
      href: item.path,
      target: '_blank',
      rel: 'noopener',
    };
  } else {
    return {
      to: { name: item.name },
    };
  }
}
</script>
