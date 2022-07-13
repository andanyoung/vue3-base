import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8086,
  },
});
