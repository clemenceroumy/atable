<template>
  <v-app>
    <v-content>
      <v-container pa-0 fluid fill-height align-content-center align-center>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      //
    };
  }
};
</script>
