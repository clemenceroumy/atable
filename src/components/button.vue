<template>
  <v-btn v-if="to" :to="to" :color="color" round large block>{{libelle}}</v-btn>
  <v-btn v-else :color="color" v-on:click="action" round large block>{{libelle}}</v-btn>
</template>

<script>
export default {
  name: "Button",
  props: ["color", "action", "libelle", "to"]
};
</script>

<style>
</style>
