import user from './user';
// 一个 store 列子
// initial state
const state = () => ({
  name: 'admin',
});

// getters
const getters = {
  name: (state, getters, rootGetters) => {
    return state.name;
  },
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  // 嵌套模块
  modules: {
    // 继承父模块的命名空间
    user,
  },
};
