const state = () => ({
  current: null,
});

const mutations = {
  setCurrent(state, c) {
    console.log(c);
    state.current = c;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
