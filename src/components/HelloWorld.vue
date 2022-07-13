<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();
defineProps({
  msg: String,
});

const count = ref(0);
const env = import.meta.env.MODE;
console.log(import.meta, import.meta.env, import.meta.env.MODE);
console.log('useStore', store, store.state, store.state.user.name);
console.log('useStore', store.getters['user/name'], store.getters.username);
</script>

<template>
  <h1>{{ env }} {{ msg }} {{ store.getters.username }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
