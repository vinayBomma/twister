<template>
  <div class="about">
    <!-- <v-container>
      <h1 class="headline">Why Tongue Twisters?</h1>
      <p class="mt-2" style="font-size: 19px">Tongue twisters are a great way to practice and improve pronunciation and fluency. They can also help to improve accents by using alliteration, which is the repetition of one sound. They’re not just for kids, but are also used by actors, politicians, and public speakers who want to sound clear when speaking.</p>
    </v-container>-->
    <v-list>
      <!-- <v-list-tile>Why Tongue Twisters?</v-list-tile> -->
      <v-list-tile v-for="link in links" :key="link.text" avatar router v-bind:to="link.href">
        <v-list-tile-avatar>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>{{link.text}}</v-list-tile-title>
      </v-list-tile>

      <!-- <v-list-tile avatar v-on:click="verDialog = true">
        <v-list-tile-avatar>
          <v-icon>info</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-title>Version</v-list-tile-title>
      </v-list-tile> -->
    </v-list>

    <!-- <v-dialog v-model="verDialog">
      <v-card>
        <v-layout row align-center>
          <v-card-title style="text-align:center">
            <v-avatar>
              <img :src="logo" />
            </v-avatar>
          </v-card-title>
        </v-layout>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "assignment", text: "Privacy Policy", href: "/privacypolicy" }
      ],
      // verDialog: null,
      // logo: "https://twisterio.web.app/android-chrome-192x192.png"
    };
  }
};
</script>
