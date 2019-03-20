<template>
  <v-app>
    <v-content>
      <snackbar/>

      <v-container pa-0 fluid fill-height align-content-center align-center>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import snackbar from "./components/snackbar";

export default {
  name: "App",
  components: { snackbar },
  data() {
    return {
      //
    };
  }
};
</script>
