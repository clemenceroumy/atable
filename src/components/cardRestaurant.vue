<template>
  <v-card
    :to="{name: 'restaurant', params:{idRestaurant: restaurant.idRestaurant}}"
    color="white"
    class="my-4"
    height="120px"
    :img="restaurant.logoRestaurant"
    hover
  >
    <v-layout align-end class="pb-2">
      <v-flex xs10 class="pl-2">
        <h1>{{ restaurant.nomRestaurant }}</h1>

        <h2>
          <v-icon color="white">place</v-icon>
          {{restaurant.nomVille}}
        </h2>
      </v-flex>

      <v-flex xs2>
        <v-btn fab dark small color="white">
          <v-icon color="orange">{{logo}}</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import userDao from "../dao/user.js";

export default {
  name: "cardRestaurant",
  props: ["restaurant"],
  data() {
    return {
      logo: "favorite_border"
    };
  },
  created() {
    userDao
      .getFavoriteRestaurant(
        this.$store.state.user.idClient,
        this.restaurant.idRestaurant
      )
      .then(result => {
        if (result.data.isFavorite) {
          this.logo = "favorite";
        }
      });
  }
};
</script>

<style>
.v-card {
  border-radius: 15px;
}

.v-card .layout {
  background: linear-gradient(
    to right,
    rgba(244, 110, 69, 0.5),
    rgba(238, 166, 73, 0.5)
  );
  color: white;
  height: 120px;
}
</style>
