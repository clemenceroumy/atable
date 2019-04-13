<template>
  <v-dialog v-model="dialog" persistent>
    <v-card>
      <v-card-title class="headline">{{$t('manageAccount.deleteText')}}</v-card-title>

      <v-card-text>{{$t('manageAccount.deleteExplain')}}</v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="green darken-1" flat="flat" @click="emitDialog">{{$t('cancel')}}</v-btn>

        <v-btn color="red darken-1" flat="flat" @click="deleteAccout">{{$t('confirm')}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import userDao from "../dao/user.js";
export default {
  name: "Dialog",
  props: ["dialog"],
  methods: {
    deleteAccout() {
      userDao.deleteUser(this.$store.state.user.idClient).then(result => {
        this.$router.push("/");
        this.$store.commit("disconnect");
      });
    },
    emitDialog() {
      this.$emit("emitDialog", false);
    }
  }
};
</script>

<style>
</style>
