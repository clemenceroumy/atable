<template>
  <div>
    <v-bottom-nav absolute value="value" :active.sync="bottomNavbar" color="transparent" dark>
      <v-btn color="white" flat :value="$t('navbar.home')">
        <span>{{$t('navbar.home')}}</span>
        <v-icon>home</v-icon>
      </v-btn>

      <v-btn color="white" flat :value="$t('navbar.reservation')">
        <span>{{$t('navbar.reservation')}}</span>
        <v-icon>restaurant_menu</v-icon>
      </v-btn>

      <v-btn color="white" flat :value="$t('navbar.account')">
        <span>{{$t('navbar.account')}}</span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: "BottomNavbar",
  data() {
    return {
      bottomNavbar: this.$t("navbar.home")
    };
  }
};
</script>