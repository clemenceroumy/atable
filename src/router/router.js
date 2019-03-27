import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Home from "@/views/Home";
import Restaurant from "@/views/Restaurant";

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
    },
    {
      path: "/restaurant/:idRestaurant",
      name: "restaurant",
      component: Restaurant
    }
  ]
});
