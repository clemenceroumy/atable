<template>
  <div>
    <v-btn color="white" icon @click="goBack()">
      <v-icon color="#f46b45">arrow_back</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "BtnBack",
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
