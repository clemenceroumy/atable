<template>
  <v-slide-y-transition mode="out-in">
    <div>
      <v-layout
        row
        wrap
        xs12
        class="headerRestaurant"
        :style="{background: 'url('+restaurant.logoRestaurant+') no-repeat scroll center center / cover' }"
      >
        <v-flex xs6 class="pa-3">
          <btnBack/>
        </v-flex>

        <v-layout xs6 column wrap align-end class="pa-3">
          <v-btn v-on:click="manageFavorite" icon color="white">
            <v-icon small color="#f46b45">{{logo}}</v-icon>
          </v-btn>
        </v-layout>
      </v-layout>

      <v-layout column wrap class="pa-4">
        <h1>{{ restaurant.nomRestaurant }}</h1>

        <h3 class="mb-2">
          <v-icon color="#f46b45">place</v-icon>
          {{restaurant.nomVille}}
        </h3>

        <v-rating color="#eea849" background-color="#eea849" :value="3" readonly class="mb-2"></v-rating>

        <h3 class="mb-4">{{ `${$t('restaurant.numberPlace')} : ${restaurant.nombrePlaces}`}}</h3>

        <p class="mb-4">{{ restaurant.descriptionRestaurant }}</p>

        <v-flex
          v-if="restaurant.types.length > 1 || restaurant.types[0].id != null"
          xs12
          class="mb-4"
        >
          <h1>Type</h1>
          <v-chip
            color="#f46b45"
            text-color="white"
            v-for="(type) in restaurant.types"
            :key="type.id"
          >{{type.libelle}}</v-chip>
        </v-flex>

        <v-flex
          v-if="restaurantSpecialite.length > 1 || restaurantSpecialite[0].id != null"
          xs12
          class="mb-4"
        >
          <h1>Specialite</h1>
          <v-chip
            color="#f46b45"
            text-color="white"
            v-for="(specialite) in restaurantSpecialite"
            :key="specialite.id"
          >{{specialite.libelle}}</v-chip>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center>
        <v-flex xs8>
          <Button
            color="white"
            :libelle="$t('booking.book')"
            :to="{name: 'booking', params:{idRestaurant: restaurant.idRestaurant}}"
          />
        </v-flex>
      </v-layout>
    </div>
  </v-slide-y-transition>
</template>

<script>
import btnBack from "../components/btnBack";
import Button from "../components/button";

import { mapState } from "vuex";
import restaurantDao from "../dao/restaurant.js";
import userDao from "../dao/user.js";

export default {
  name: "Restaurant",
  components: { btnBack, Button },
  data() {
    return {
      restaurantId: this.$route.params.idRestaurant,
      restaurant: {},
      restaurantSpecialite: [],
      logo: "favorite_border"
    };
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    restaurantDao.getRestaurantById(this.restaurantId).then(response => {
      this.restaurant = response.data;
    });

    restaurantDao
      .getRestaurantByIdSpecialite(this.restaurantId)
      .then(response => {
        console.log(response.data.specialite);
        this.restaurantSpecialite = response.data.specialite;
      });

    userDao
      .getFavoriteRestaurant(this.$store.state.user.idClient, this.restaurantId)
      .then(result => {
        if (result.data.isFavorite) {
          this.logo = "favorite";
        }
      });
  },
  methods: {
    manageFavorite() {
      //Get status of the restaurant (isFavorite: true OR false)
      userDao
        .getFavoriteRestaurant(
          this.$store.state.user.idClient,
          this.restaurantId
        )
        .then(result => {
          let item = {
            idClient: this.$store.state.user.idClient,
            idRestaurant: this.restaurantId
          };
          //IF restaurant is favorite => delete from fav
          if (result.data.isFavorite) {
            userDao.deleteFavoriteRestaurant(item).then(() => {
              this.logo = "favorite_border";
            });
          }
          //IF restaurant isn't favorite => add to fav
          else {
            userDao.addFavoriteRestaurant(item).then(() => {
              this.logo = "favorite";
            });
          }
        });
    }
  }
};
</script>

<style>
.headerRestaurant {
  height: 200px;
  border-radius: 0px 0px 25px 25px;
}
</style>
