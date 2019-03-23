<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-flex xs12 sm6 mx-auto>
        <div class="mx-auto pt-5 text-xs-center mb-4">
          <img src="../assets/resto_logo.png" alt>
          <h3 class="headline mb-0 mt-3">{{$t('connexion')}}</h3>
        </div>

        <div>
          <v-card-actions class="pb-5 pt-2">
            <v-flex sm12 md6 mx-auto>
              <v-form class="mx-auto">
                <v-text-field
                  class="pb-1"
                  :label="$t('email')"
                  :rules="emailRule"
                  dark
                  color="#88879d"
                  v-model="login"
                ></v-text-field>

                <v-text-field
                  :label="$t('password')"
                  :rules="passwordRule"
                  dark
                  class="pb-1"
                  color="#88879d"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword =! showPassword"
                  v-model="password"
                ></v-text-field>

                <v-text-field
                  :label="$t('signupPage.name')"
                  dark
                  :rules="required"
                  class="pb-1"
                  color="#88879d"
                  v-model="lastName"
                ></v-text-field>

                <v-text-field
                  :label="$t('signupPage.firstName')"
                  dark
                  :rules="required"
                  class="pb-1"
                  color="#88879d"
                  v-model="firstName"
                ></v-text-field>

                <v-layout class="pt-4 pb-2">
                  <v-btn
                    v-on:click="signupUser()"
                    color="#ffffff"
                    round
                    large
                    class="mx-auto"
                  >{{$t('signupPage.signup')}}</v-btn>
                </v-layout>
              </v-form>
            </v-flex>
          </v-card-actions>
        </div>
      </v-flex>
    </v-container>
  </v-slide-y-transition>
</template>
<script>
import axios from "axios";
import config from "../config/config.js";
import {
  requiredRule,
  passwordRules,
  emailRules
} from "../helpers/validation.js";

export default {
  name: "Signup",
  data() {
    return {
      showPassword: false,

      login: "",
      password: "",
      lastName: "",
      firstName: "",

      required: requiredRule,
      passwordRule: passwordRules,
      emailRule: emailRules
    };
  },
  methods: {
    signupUser() {
      axios
        .post(`${config.api}/users/signup`, {
          login: this.login,
          password: this.password,
          lastName: this.lastName,
          firstName: this.firstName
        })
        .then(response => {
          if (typeof response.data === "object") {
            this.$store.commit("setShowSnackbar", {
              value: true,
              message: this.$t("signupPage.ok"),
              color: "green lighten-1"
            });
          } else {
            this.$store.commit("setShowSnackbar", {
              value: true,
              message: this.$t(response.data),
              color: "red lighten-1"
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>