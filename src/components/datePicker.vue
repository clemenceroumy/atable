<template>
  <v-dialog ref="menu" transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-text-field
        v-model="date"
        :label="$t('booking.date')"
        prepend-icon="event"
        readonly
        v-on="on"
        color="#f46b45"
      ></v-text-field>
    </template>
    <v-date-picker
      locale="fr"
      color="#f46b45"
      v-model="date"
      scrollable
      v-on:input="emitDate"
      :min="todayDate"
    ></v-date-picker>
  </v-dialog>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "DatePicker",
  data() {
    return {
      date: "",
      todayDate: dayjs().format("YYYY-MM-DD")
    };
  },
  methods: {
    emitDate() {
      this.$emit("dateChild", this.date);
    }
  }
};
</script>

<style>
.v-dialog {
  box-shadow: none;
  display: flex;
  justify-content: center;
}
</style>
