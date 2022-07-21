<template>
  <!-- Error page-->
  <div class="error-wrapper">
    <div class="m-8 sm:m-4 md:m-6">
      <Logo class="brand-logo"></Logo>
    </div>

    <div class="p-2 sm:p-4 max-w-7xl">
      <div class="w-4/5 text-center mx-auto">
        <a-typography-title class="mb-1">Page Not Found 🕵🏻‍♀️</a-typography-title>
        <p class="mb-2">
          Oops! 😖 The requested URL was not found on this server.
        </p>

        <router-link :to="'/'">
          <a-button
            type="primary"
            class="mb-2 w-full sm:w-full md:w-full lg:w-auto"
          >
            Back to home
          </a-button>
        </router-link>

        <!-- image -->
        <a-image
          :preview="false"
          :src="getAssetsImage('page_error.svg')"
          alt="Error page"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from '../../components/Logo.vue';
import { getAssetsImage } from '@/util/AssetsFileUtil';
</script>

<style lang="scss" scoped>
// .error-wrapper {
// }
// .brand-logo {
//   left: 2rem;
//   margin: 0;
//   // position: absolute;
//   top: 2rem;
//   // display: block;
// }
</style>
