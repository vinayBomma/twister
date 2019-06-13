<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-toolbar-title>Test</v-toolbar-title> -->
      <v-spacer></v-spacer>

      <v-icon color="orange lighten-1">wb_sunny</v-icon>
      <span>
        <v-switch class="pt-3 pl-3" v-on:click="switchMode"></v-switch>
      </span>
      <v-icon color="blue lighten-2">brightness_3</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-tile v-for="link in links" v-bind:key="link.text" router v-bind:to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group no-action prepend-icon="language">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title class="grey--text">Languages</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(language, index) in languages"
            :key="index"
            router
            v-bind:to="language.route"
          >
            <v-list-tile-title class="grey--text" v-text="language.text"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  props: ["dark"],
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "info", text: "About", route: "/about" },
        { icon: "feedback", text: "Feedback", route: "/feedback" },
        { icon: "settings", text: "Settings", route: "/settings" }
      ],
      languages: [
        { text: "English", route: "/" },
        { text: "French", route: "/french" },
        { text: "Spanish", route: "/spanish" },
        { text: "Irish", route: "/irish" },
        { text: "Italian", route: "/italian" }
      ],
      nightMode: false
    };
  },
  methods: {
    switchMode: function() {
      this.nightMode = !this.nightMode;
      this.$emit("switchMode", this.nightMode);
    }
  }
};
</script>