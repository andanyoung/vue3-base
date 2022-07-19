<template>
  <!-- Error page-->
  <div class="misc-wrapper">
    <Logo class="brand-logo"></Logo>

    <div class="misc-inner p-2 sm:p-4 max-w-7xl">
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
.misc-wrapper {
  width: 100%;
  display: flex;
  flex-basis: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  .brand-logo {
    width: auto;
    left: 2rem;
    margin: 0;
    position: absolute;
    top: 2rem;
    display: inline;
  }
  .misc-inner {
    position: relative;
    // max-width: 750px;
  }
}
</style>
