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
    let history = state.history.filter((todo) => todo['@id'] != n['@id']);
    console.log("après", history);

    history.unshift({ '@id': n['@id'], 've:name': n['ve:name'], 've:group': n['ve:group'] });
    state.history = history;
    console.log(history);
  },
  updateNode(n){
    console.log("todo find node byId and update",n)
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
