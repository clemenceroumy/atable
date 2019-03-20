import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    showSnackbar: false,
    messageSnackbar: "",
    colorSnackbar: ""
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setShowSnackbar: (state, value) => {
      state.showSnackbar = value;
    },
    setMessageSnackbar: (state, value) => {
      state.messageSnackbar = value;
    },
    setColorSnackbar: (state, value) => {
      state.colorSnackbar = value;
    }
  },
  actions: {}
});
