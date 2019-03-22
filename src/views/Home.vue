<template>
  <div>{{`Bienvenue ${$store.state.user.login}`}}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["user"])
  }
};
</script>