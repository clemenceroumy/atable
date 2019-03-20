import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    showSnackbar: false,
    messageSnackbar: null,
    colorSnackbar: null
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setShowSnackbar: (state, values) => {
      state.showSnackbar = values.value;
      state.messageSnackbar = values.message;
      state.colorSnackbar = values.color;
    },
    closeSnackbar: state => {
      state.showSnackbar = false;
      state.messageSnackbar = null;
      state.colorSnackbar = null;
    }
  },
  actions: {}
});
