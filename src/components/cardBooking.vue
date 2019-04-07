<template>
  <v-card color="#88879d" class="ma-2">
    <v-layout>
      <v-flex xs12>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ date }}</div>
            <div>{{ booking.nomRestaurant }}</div>
            <div>{{ booking.nomVille }}</div>
          </div>
        </v-card-title>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import dayjs from "dayjs";

export default {
  name: "cardBooking",
  props: ["booking"],
  data() {
    return {
      date: dayjs(this.booking.date).format("DD/MM/YYYY HH[h]mm")
    };
  }
};
</script>