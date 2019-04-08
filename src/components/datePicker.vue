<template>
  <div>
    <v-menu ref="menu" transition="scale-transition" offset-y>
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="date"
          :label="$t('booking.date')"
          prepend-icon="event"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker v-model="date" no-title scrollable v-on:input="emitDate" :min="todayDate"></v-date-picker>
    </v-menu>
  </div>
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