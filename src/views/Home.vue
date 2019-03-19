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
                  <v-btn color="success" round large class="mx-auto">{{$t('connexion')}}</v-btn>
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

export default {
  name: "home",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/users/1`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
