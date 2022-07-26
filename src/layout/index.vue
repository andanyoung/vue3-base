<template><component :is="component"></component></template>

<script setup>
import LayoutVertical from './layout-vertical/index.vue';
import LayoutHorizontal from './layout-horizontal/index.vue';

const component = LayoutVertical;
</script>
