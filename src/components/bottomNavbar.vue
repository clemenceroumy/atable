<template>
  <div>
    <v-bottom-nav absolute value="true" color="transparent" dark>
      <v-btn to="home" color="white" flat :value="$t('navbar.home')">
        <span>{{$t('navbar.home')}}</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn to="booking" color="white" flat :value="$t('navbar.reservation')">
        <span>{{$t('navbar.reservation')}}</span>
        <v-icon>restaurant_menu</v-icon>
      </v-btn>

      <v-btn to="account" color="white" flat :value="$t('navbar.account')">
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