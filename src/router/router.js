import Vue from "vue";
import Router from "vue-router";

import Login from "@/views/Login";
import Signup from "@/views/Signup";
import Home from "@/views/Home";
import Restaurant from "@/views/Restaurant";
import Booking from "@/views/Booking";
import History from "@/views/History.vue";

import Account from "@/views/Account/Account";
import ManageAccount from "@/views/Account/ManageAccount";

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
    },
    {
      path: "/booking/:idRestaurant",
      name: "booking",
      component: Booking
    },
    {
      path: "/history",
      name: "history",
      component: History
    },
    {
      path: "/account",
      name: "account",
      component: Account
    },
    {
      path: "/manageAccount",
      name: "manageAccount",
      component: ManageAccount
    }
  ]
});
