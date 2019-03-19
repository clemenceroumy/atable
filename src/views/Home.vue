<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    axios
      .get(`http://localhost:3000/users/1`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>
