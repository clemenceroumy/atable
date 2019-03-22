<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-flex xs12 sm6 mx-auto>
        <div class="mx-auto pt-5 text-xs-center mb-4">
          <img src="../assets/resto_logo.png" alt>
          <h3 class="headline mb-0 mt-3">{{$t('connexion')}}</h3>
        </div>

        <div>
          <v-card-actions class="pb-5 pt-3">
            <v-flex sm12 md6 mx-auto>
              <v-form class="mx-auto">
                <v-text-field
                  class="pb-3"
                  :label="$t('email')"
                  append-icon="account_circle"
                  dark
                  color="#88879d"
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  :label="$t('password')"
                  append-icon="vpn_key"
                  dark
                  class="pb-4"
                  color="#88879d"
                  type="password"
                  v-model="password"
                ></v-text-field>

                <v-layout class="pt-2 pb-5">
                  <v-btn
                    v-on:click="connectUser"
                    color="#ffffff"
                    round
                    large
                    class="mx-auto"
                  >{{$t('connexion')}}</v-btn>
                </v-layout>
              </v-form>

              <div class="mx-auto pb-1 text-xs-center mb-4">
                <p class="indigo--text text--lighten-4">
                  {{$t('noAccount')}}
                  <span
                    class="white--text"
                    v-on:click="goToSignup()"
                  >{{$t('signup')}}</span>
                </p>
              </div>
            </v-flex>
          </v-card-actions>
        </div>
      </v-flex>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import config from "../config/config.js";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    connectUser() {
      axios
        .get(
          `${config.api}/users/connect?login=${this.email}&password=${
            this.password
          }`
        )
        .then(response => {
          if (response.data[0].haveAccount === 0) {
            this.$store.commit("setShowSnackbar", {
              value: true,
              message: this.$t("snackbar.errorLogin"),
              color: "red lighten-1"
            });
          } else {
            let user = {
              login: response.data[0].login,
              password: response.data[0].password
            };
            this.$store.commit("setUser", user);
            this.$router.push("home");
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    goToSignup() {
      this.$router.push("/signup");
    }
  }
};
</script>
