<template>
  <div
    v-if="isExternal"
    class="svg-external-icon svg-icon"
    aria-hidden="true"
    :style="{
      width: width,
      height: height,
      color: color,

      ...styleExternalIcon,
    }"
  />
  <svg
    v-else
    class="svg-icon"
    aria-hidden="true"
    :style="{ color, width, height }"
  >
    <use :href="symbolId" />
  </svg>
</template>

<script setup>
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
  },
  size: {
    type: [String, Number],
    default: '1em',
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const width = computed(() => {
  if (!props.size) {
    return '1em';
  } else if (props.size instanceof String) {
    return props.size;
  } else if (typeof props.size === 'number') {
    return props.size + 'px';
  } else if (props.size instanceof Object && props.size.value) {
    if (props.size.value === 'number') {
      return props.size.value + 'px';
    }
  }
  return props.size;
});

const height = computed(() => {
  if (!props.size) {
    return '1em';
  } else if (props.size instanceof String) {
    return props.size;
  } else if (typeof props.size === 'number') {
    return props.size + 'px';
  } else if (props.size instanceof Object && props.size.value) {
    if (props.size.value === 'number') {
      return props.size.value + 'px';
    }
  }
  return props.size;
});

const isExternal = computed(() => {
  return /^(https?:|mailto:|tel:)/.test(props.name);
});

const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`,
  };
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  /* 因icon大小被设置为和字体大小一致，而span等标签的下边缘会和字体的基线对齐，故需设置一个往下的偏移比例，来纠正视觉上的未对齐效果 */
  vertical-align: middle;
  fill: currentColor; /* 定义元素的颜色，currentColor是一个变量，这个变量的值就表示当前元素的color值，如果当前元素未设置color值，则从父元素继承 */
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
