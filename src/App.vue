<template>
  <v-app v-bind:dark="nightMode">
    <Navbar v-on:switchMode="updateMode($event)"></Navbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      nightMode: null
    };
  },
  methods: {
    updateMode: function(mode) {
      this.nightMode = mode;
    }
  }
};
</script>
