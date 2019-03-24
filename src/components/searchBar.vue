<template>
  <div>
    {{searchValue}}
    <v-autocomplete
      :items="cities"
      item-text="name"
      item-value="id"
      :label="$t('home.searchBar')"
      color="#88879d"
      v-model="searchValue"
      outline
      dark
    ></v-autocomplete>
  </div>
</template>

<script>
import axios from "axios";
import config from "../config/config.js";

export default {
  name: "SearchBar",
  data() {
    return {
      searchValue: "",
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
  }
};
</script>

<style>
</style>
