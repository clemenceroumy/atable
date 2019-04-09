<template>
  <v-btn :color="color" v-on:click="action" round class="mx-auto" large>{{libelle}}</v-btn>
</template>

<script>
export default {
  name: "Button",
  props: ["color", "action", "libelle"]
};
</script>

<style>
</style>
