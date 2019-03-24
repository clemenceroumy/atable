<template>
  <div>
    {{`Bienvenue ${$store.state.user.login}`}}
    <searchBar/>
    <bottomNavbar/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import bottomNavbar from "../components/bottomNavbar";
import searchBar from "../components/searchBar";

export default {
  name: "home",
  components: { bottomNavbar, searchBar },
  data() {
    return {};
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>