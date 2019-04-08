<template>
  <v-menu ref="menu" lazy transition="scale-transition" offset-y>
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="time"
        :label="$t('booking.time')"
        prepend-icon="access_time"
        readonly
        v-on="on"
      ></v-text-field>
    </template>
    <v-time-picker format="24hr" v-model="time" full-width v-on:input="emitTime"></v-time-picker>
  </v-menu>
</template>

<script>
export default {
  name: "timePicker",
  data() {
    return {
      time: ""
    };
  },
  methods: {
    emitTime() {
      this.$emit("timeChild", this.time);
    }
  }
};
</script>

<style>
</style>
