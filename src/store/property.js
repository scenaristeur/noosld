const state = () => ({
  });
  
  const mutations = {
    setCurrent(state, c) {
      console.log(c);
      state.current = c;
      this.commit("core/pushToHistory", c);
    },

  };
  
  const actions = {};
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
  };
  