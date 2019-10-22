<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon v-on:click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-if="$route.name === 'PrivacyPolicy'">Privacy Policy</v-toolbar-title>
      <v-toolbar-title  v-else>{{ ($route.name).charAt(0).toUpperCase() + ($route.name).slice(1) }}</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-icon color="orange lighten-1">wb_sunny</v-icon>
      <span>
        <v-switch class="pt-3 pl-3" v-on:click="switchMode"></v-switch>
      </span>
      <v-icon color="blue lighten-2">brightness_3</v-icon>-->
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" tile>
            <img :src="userPhoto" alt="Profile Photo" />
          </v-avatar>
          <p style="text-align:center; margin-top:10px;" class="display-1 grey--text font-weight-bold">Twister</p>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-tile v-for="link in links" v-bind:key="link.text" router v-bind:to="link.route">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group no-action prepend-icon="language">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Languages</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile>
            <v-text-field v-model="searchText" @keyup="langSearch()" placeholder="Search"></v-text-field>
          </v-list-tile>
          <v-list-tile
            v-for="(language, index) in languages"
            :key="index"
            router
            v-bind:to="language.route"
          >
            <v-list-tile-title v-text="language.text"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-tile v-if="!disabled">
          <v-btn @click="getMessagingToken" round block>Enable Notifications</v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {db} from '../firebase/init'
import firebase from 'firebase'

import axios from 'axios'
import { messaging } from '../firebase/init'

export default {
  props: ["dark"],
  data() {
    return {
      userPhoto: "https://twisterio.web.app/android-chrome-192x192.png",
      drawer: false,
      links: [
        { icon: "home", text: "Home", route: "/" },
        { icon: "info", text: "About", route: "/about" },
        // { icon: "feedback", text: "Feedback", route: "/feedback" },
        { icon: "assignment", text: "Privacy Policy", route: "/privacypolicy" },
        // { icon: "settings", text: "Settings", route: "/settings" }
      ],
      languages: [
        { text: "English", route: "/" },
        { text: "French", route: "/french" },
        { text: "Spanish", route: "/spanish" },
        { text: "German", route: "/german" },
        { text: "Irish", route: "/irish" },
        { text: "Italian", route: "/italian" },
      ],
      nightMode: false,
      searchText: "",
      allLanguages: [],
      defLang: [],
      disabled: false,
    };
  },
  methods: {
    switchMode: function() {
      this.nightMode = !this.nightMode;
      this.$emit("switchMode", this.nightMode);
    },
    langSearch() {
      if (this.searchText.toLowerCase() !== "") {
        this.defLang = this.languages.concat();
        for (let i = 0; i < this.defLang.length; i++) {
          if (
            !(((this.defLang[i].text)
              .toLowerCase())
              .includes(this.searchText.toLowerCase()))
          ) {
            this.languages.splice(this.languages.indexOf(this.defLang[i]), 1);
          }
        }
      } else if ((this.searchText).toLowerCase() === "") {
        this.languages = this.allLanguages.concat();
      }
    },
    getMessagingToken() {
      messaging
        .getToken()
        .then(async token => {
          if (token) {
            const currentMessageToken = window.localStorage.getItem(
              "messagingToken"
            );
            // console.log("token will be updated", currentMessageToken != token);

            if (currentMessageToken != token) {
              await this.saveToken(token);
            }
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
            this.notificationsPermisionRequest();
          }
        })
        .catch(function(err) {
          console.log("An error occurred while retrieving token. ", err);
        });
    },notificationsPermisionRequest() {
      messaging
        .requestPermission()
        .then(() => {
          this.getMessagingToken();
        })
        .catch(err => {
          alert("Couldn't enable push notifications. Your browser may not suppport it.")
          console.log("Unable to get permission to notify.", err);
        });
    },
    listenTokenRefresh() {
      const currentMessageToken = window.localStorage.getItem("messagingToken");
      // console.log("currentMessageToken", currentMessageToken);
      if (!currentMessageToken) {
        
        messaging.onTokenRefresh(function() {
          messaging
            .getToken()
            .then(function(token) {
              this.saveToken(token);
            })
            .catch(function(err) {
              console.log("Unable to retrieve refreshed token ", err);
            });
        });
      } else {
        this.disabled = true;
      }
    },
    saveToken(token) {
      console.log("tokens", token);
      axios
        .post(
          `https://us-central1-twisterio.cloudfunctions.net/GeneralSubscription`,
          {
            token
          }
        )
        .then(response => {
          window.localStorage.setItem("messagingToken", token);
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.listenTokenRefresh();
  },
  created() {
    this.allLanguages = this.languages.concat();
  }
};
</script>