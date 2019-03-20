<template>
  <div>
    <v-snackbar v-model="value">snackbarText
      <v-btn flat color="primary" @click.native="value = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "snackbar",
  data() {
    return {
      value: false
    };
  }
};
</script>