<template>
  <!-- Error page-->
  <Logo class="pt-8 pl-8 absolute z-50"></Logo>
  <div
    class="h-full w-4/5 text-center mx-auto flex flex-col justify-center justify-items-center"
  >
    <a-typography-title class="mb-1">Page Not Found 🕵🏻‍♀️</a-typography-title>
    <p class="mb-2">Oops! 😖 The requested URL was not found on this server.</p>

    <router-link :to="'/'">
      <a-button
        type="primary"
        class="mb-2 w-full sm:w-full md:w-full lg:w-auto"
      >
        Back to home
      </a-button>
    </router-link>

    <!-- image -->
    <img
      :preview="false"
      :src="getAssetsImage('page_error.svg')"
      alt="Error page"
      class="max-w-lg mx-auto"
    />
  </div>
</template>

<script setup>
import Logo from '@/components/Logo.vue';
import { getAssetsImage } from '@/util/AssetsFileUtil';
</script>
