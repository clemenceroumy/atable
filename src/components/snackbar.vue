<template>
  <div>
    <v-snackbar v-model="showSnackbar" :color="colorSnackbar">
      {{messageSnackbar}}
      <v-btn flat @click.native="() => $store.commit('closeSnackbar')">{{$t('close')}}</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "snackbar",
  computed: {
    ...mapState(["showSnackbar", "messageSnackbar", "colorSnackbar"])
  },
  //After 3sec, set snackbar value in store back to default
  watch: {
    showSnackbar: {
      handler: function() {
        if (this.showSnackbar) {
          setTimeout(() => this.$store.commit("closeSnackbar"), 3000);
        }
      }
    }
  }
};
</script>