<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Test</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" flat>Language</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="lang in languages" v-bind:key="lang.text" router v-bind:to="lang.route">
            <v-list-tile-title>{{ lang.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-icon>wb_sunny</v-icon>
      <span>
        <v-switch class="pt-3 pl-3"></v-switch>
      </span>
      <v-icon>brightness_3</v-icon>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-tile v-for="link in links" v-bind:key="link.text" router v-bind:to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "info", text: "About", route: "/about" },
        { icon: "feedback", text: "Feedback", route: "/feedback" },
        { icon: "settings", text: "Settings", route: "/settings" },
      ],
      languages: [
        { text:'English', route:'/'}, 
        { text:'French', route: '/french'}, 
        { text:'Spanish', route: '/spanish'}, 
        { text:'Irish', route: '/irish'}, 
        { text:'Italian', route: '/italian'}
        ]
    };
  }
};
</script>