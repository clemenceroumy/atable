<template>
  <div>
    <v-bottom-nav fixed value="true">
      <v-btn to="home" flat color="#f46b45" :value="$t('navbar.home')">
        <span>{{$t('navbar.home')}}</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn to="history" flat color="#f46b45" :value="$t('navbar.reservation')">
        <span>{{$t('navbar.reservation')}}</span>
        <v-icon>restaurant_menu</v-icon>
      </v-btn>

      <v-btn to="account" flat color="#f46b45" :value="$t('navbar.account')">
        <span>{{$t('navbar.account')}}</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar"
};
</script>