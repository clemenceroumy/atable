<template>
  <v-dialog ref="menu" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="time"
        :label="$t('booking.time')"
        prepend-icon="access_time"
        readonly
        v-on="on"
        color="#f46b45"
      ></v-text-field>
    </template>
    <v-time-picker color="#f46b45" format="24hr" v-model="time" v-on:input="emitTime"></v-time-picker>
  </v-dialog>
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
