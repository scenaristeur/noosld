const state = () => ({
  current: null,
  user: null,
  history: [],
});

const mutations = {
  setCurrent(state, c) {
    console.log(c);
    state.current = c;
    this.commit("core/pushToHistory", c);
  },
  setUser(state, u) {
    console.log(u);
    state.user = u;
  },
  pushToHistory(state, n) {
    let h = state.history;
    console.log("avant", h);
    let history = state.history.filter((todo) => todo.id != n.id);
    console.log("après", history);

    history.push({ id: n.id, name: n.name, group: n.group });
    state.history = history;
    console.log(history);
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
