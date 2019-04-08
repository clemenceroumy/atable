<template>
  <v-autocomplete
    :items="cities"
    item-text="name"
    item-value="id"
    :label="$t('home.searchBar')"
    v-model="cityId"
    v-on:input="getCity"
    color="#88879d"
    background-color="#f4f6fa"
    height="50"
    hide-details
    solo
  ></v-autocomplete>
</template>

<script>
import axios from "axios";
import config from "../config/config.js";

export default {
  name: "SearchBar",
  data() {
    return {
      cityId: "",
      cities: []
    };
  },
  created() {
    axios
      .get(`${config.api}/cities`)
      .then(response => {
        for (let property in response.data) {
          this.cities.push({
            id: response.data[property].idVille,
            name: response.data[property].nomVille
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  methods: {
    getCity() {
      this.$emit("cityIdChild", this.cityId);
    }
  }
};
</script>

<style>
.v-input__slot {
  border-radius: 50px !important;
}
</style>
