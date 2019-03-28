<template>
  <div>
    <v-menu lazy transition="scale-transition" offset-y :close-on-content-click="false">
      <v-btn slot="activator" color="success">{{ $t('restaurant.book') }}</v-btn>
      {{time}}
      <v-time-picker v-model="time" format="24hr">
        <v-btn color="success" @click="emitDateTime()">{{ $t('restaurant.book')}}</v-btn>
      </v-time-picker>
    </v-menu>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "DatePicker",
  data() {
    return {
      time: "",
      date: dayjs().format("YYYY-MM-DD")
    };
  },
  methods: {
    emitDateTime() {
      this.$emit("dateTimeChild", `${this.date} ${this.time}`);
    }
  }
};
</script>