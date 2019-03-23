import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Home from "@/views/Home";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/home",
      name: "home",
      component: Home
    }
  ]
});
