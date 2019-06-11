<template>
  <v-app>
    <Navbar></Navbar>

    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Home from "./views/Home"

export default {
  name: "App",
  components: {
    Navbar,
    Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
