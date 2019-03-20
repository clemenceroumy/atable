<template>
  <v-slide-y-transition mode="out-in">
    <v-container fluid>
      <v-flex xs12 sm6 mx-auto>
        <v-card>
          <v-card-title primary-title class="text-xs-center">
            <div class="mx-auto pb-1 text-center">
              <h3 class="headline mb-0 mt-3">{{$t('connexion')}}</h3>
            </div>
          </v-card-title>
          {{this.user}}
          <v-card-actions class="pb-5 pt-3">
            <v-flex sm12 md6 mx-auto>
              <v-form class="mx-auto">
                <v-text-field
                  :label="$t('email')"
                  append-icon="account_circle"
                  single-line
                  outline
                  v-model="email"
                ></v-text-field>

                <v-text-field
                  :label="$t('password')"
                  append-icon="vpn_key"
                  single-line
                  outline
                  type="password"
                  v-model="password"
                ></v-text-field>

                <v-layout class="pt-2">
                  <v-btn
                    v-on:click="connectUser"
                    color="success"
                    round
                    large
                    class="mx-auto"
                  >{{$t('connexion')}}</v-btn>
                </v-layout>
              </v-form>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-container>
  </v-slide-y-transition>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "home",
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
          `http://localhost:3000/users/connect?login=${this.email}&password=${
            this.password
          }`
        )
        .then(response => {
          if (response.data[0].haveAccount === 0) {
            //TODO: show snackbar
          } else {
            //TODO: put user value in the store
            let user = {
              login: response.data[0].login,
              password: response.data[0].password
            };
            this.$store.commit("setUser", user);
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
