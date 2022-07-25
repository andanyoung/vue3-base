import constantRoutes from '@/router/constantRoutes';

const state = () => ({
  routes: constantRoutes,
  title: 'Admin4j',
});

// actions
const actions = {
  addRoute({ commit }, val) {
    commit('ADD_MENUS', val);
  },
  setRoute({ commit }, val) {
    commit('SET_MENUS', val);
  },
};

// mutations
const mutations = {
  SET_MENUS(state, val) {
    state.menus = val;
  },
  ADD_MENUS(state, val) {
    state.menus = state.menus.concat(val);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
