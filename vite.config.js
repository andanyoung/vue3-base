import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { createHtmlPlugin } from 'vite-plugin-html';
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import';
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const path = require('path');

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      vueSetupExtend(),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      createHtmlPlugin({
        entry: '/src/main.js',
        inject: {
          data: {
            // 查找.env.test文件里面的VITE_PROJECT_TITLE，请以VITE_标识开头
            title: loadEnv(mode, process.cwd()).VITE_APP_TITLE,
            injectScript: `<script src="/inject.js"></script>`,
          },
        },
      }),
      // styleImport({
      //   resolves: [AndDesignVueResolve()],
      // }),
      AutoImport({
        imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),
    ],
    resolve: {
      // 配置路径别名
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      //css预处理
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/index.scss";',
        },
      },
    },
    server: {
      port: 8086,
      open: true,
      // proxy: {
      //   // "/":'http://localhost:8080',
      // },
    },
  });
};
