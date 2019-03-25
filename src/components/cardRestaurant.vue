<template>
  <v-card color="indigo" dark>
    <v-layout>
      <v-flex xs5>
        <v-img :src="restaurant.logoRestaurant" contain></v-img>
      </v-flex>
      <v-flex xs7>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ restaurant.nomRestaurant }}</div>
            <div>{{ restaurant.descriptionRestaurant }}</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: "cardRestaurant",
  props: ["restaurant"]
};
</script>