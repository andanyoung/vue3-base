import { createStore, createLogger } from 'vuex';

// Modules

import * as getters from './getters';

const debug = import.meta.env.MODE !== 'production';

const modules = {};
const files = import.meta.globEager('./modules/*.js');

/**
 * 动态导入所有 vuex Module 子模块模块，自动加入namespaced:true，用于解决vuex命名冲突，
 */
Object.keys(files).forEach((key) => {
  //key => ./modules/user.js
  modules[key.substring(10, key.length - 3)] = files[key].default;
});

Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true;
});

// 创建一个新的 store 实例
export default createStore({
  modules,
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
