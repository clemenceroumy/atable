<template>
  <div>
    <v-btn icon @click="goBack()" dark>
      <v-icon>arrow_back_ios</v-icon>
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
