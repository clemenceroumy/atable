<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-layout column wrap>
        <v-img style="height: 100px;" :src="user.photoClient" contain/>
        <h1>{{`${user.prenomClient} ${user.nomClient}`}}</h1>
      </v-layout>

      <v-layout column wrap>
        <v-subheader>{{$t('manageAccount.changePassword')}}</v-subheader>

        <v-flex class="ma-3">
          <v-text-field
            :label="$t('manageAccount.currentPassword')"
            class="pb-1"
            color="#88879d"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword =! showPassword"
            v-model="currentPassword"
          ></v-text-field>

          <v-text-field
            :label="$t('manageAccount.newPassword')"
            :rules="passwordRule"
            class="pb-1"
            color="#88879d"
            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword =! showPassword"
            v-model="newPassword"
          ></v-text-field>

          <Button color="white" :action="updatePassword" :libelle="$t('confirm')"/>
        </v-flex>
      </v-layout>

      <v-layout column wrap>
        <v-subheader>{{$t('manageAccount.deleteTitle')}}</v-subheader>
        <p v-on:click="deleteAccout" color="error">{{$t('manageAccount.deleteAccount')}}</p>
      </v-layout>
    </div>
  </v-slide-y-transition>
</template>

<script>
import BtnBack from "../../components/btnBack";
import Button from "../../components/button";

import { passwordRules } from "../../helpers/validation.js";
import userDao from "../../dao/user.js";

export default {
  name: "ManageAccount",
  components: { BtnBack, Button },
  data() {
    return {
      user: {},
      currentPassword: "",
      newPassword: "",
      showPassword: false,
      passwordRule: passwordRules
    };
  },
  created() {
    userDao.getUser(this.$store.state.user.idClient).then(result => {
      this.user = result.data[0];
    });
  },
  methods: {
    updatePassword() {
      let user = {
        idClient: this.$store.state.user.idClient,
        currentPassword: this.currentPassword,
        newPassword: this.newPassword
      };
      userDao.updatePassword(user).then(result => {
        if (typeof result.data === "object") {
          this.$store.commit("setShowSnackbar", {
            value: true,
            message: this.$t("manageAccount.passwordChangedSnack"),
            color: "green lighten-1"
          });
        } else {
          this.$store.commit("setShowSnackbar", {
            value: true,
            message: this.$t(result.data),
            color: "red lighten-1"
          });
        }
      });
    },

    deleteAccout() {
      userDao.deleteUser(this.$store.state.user.idClient).then(result => {
        this.$router.push("/");
        this.$store.commit("disconnect");
      });
    }
  }
};
</script>

<style>
</style>
