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
          <p style="text-align:center; margin-top:10px;font-family: 'Calibri'; font-size:35px;letter-spacing:2px;" class="grey--text font-weight-bold">Twister</p>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

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
        { icon: "bookmark", text: "Bookmarks", route: "/bookmarks" },
        // { icon: "assignment", text: "Privacy Policy", route: "/privacypolicy" },
        // { icon: "settings", text: "Settings", route: "/settings" }
      ],
      languages: [
        { text: "Acholi", route: "/acholi" },
        { text: "Afrikaans", route: "/afrikaans" },
        { text: "Akan", route: "/akan" },
        { text: "Albanian", route: "/albanian" },
        { text: "Alur", route: "/alur" },
        { text: "Amharic", route: "/amharic" },
        { text: "Arabic", route: "/arabic" },
        { text: "Aragonese", route: "/aragonese" },
        { text: "Armenian", route: "/armenian" },
        { text: "Assamese", route: "/assamese" },
        { text: "Azerbaijani", route: "/azerbaijani" },
        { text: "Basque", route: "/basque" },
        { text: "Bengali", route: "/bengali" },
        { text: "Breton", route: "/breton" },
        { text: "Catalan", route: "/catalan" },
        { text: "Croatian", route: "/croatian" },
        { text: "Czech", route: "/czech" },
        { text: "Danish", route: "/danish" },
        { text: "Dutch", route: "/dutch" },
        { text: "Emilian", route: "/emilian" },
        { text: "English", route: "/" },
        { text: "Esperanto", route: "/esperanto" },
        { text: "Estonian", route: "/estonian" },
        { text: "Finnish", route: "/finnish" },
        { text: "French", route: "/french" },
        { text: "Frisian", route: "/frisian" },
        { text: "Fulah", route: "/fulah" },
        { text: "Ga", route: "/ga" },
        { text: "Galician", route: "/galician" },
        { text: "Ganda", route: "/ganda" },
        { text: "German", route: "/german" },
        { text: "Guarani", route: "/guarani" },
        { text: "Gujarati", route: "/gujarati" },
        { text: "Hausa", route: "/hausa" },
        { text: "Hawaiian", route: "/hawaiian" },
        { text: "Hebrew", route: "/hebrew" },
        { text: "Hindi", route: "/hindi" },
        { text: "Hungarian", route: "/hungarian" },
        { text: "Ibanag", route: "/ibanag" },
        { text: "Icelandic", route: "/icelandic" },
        { text: "Igbo", route: "/igbo" },
        { text: "Indonesian", route: "/indonesian" },
        { text: "Irish", route: "/irish" },
        { text: "Italian", route: "/italian" },
        { text: "Japanese", route: "/japanese" },
        { text: "Javanese", route: "/javanese" },
        { text: "Jersey", route: "/jersey" },
        { text: "Kannada", route: "/kannada" },
        { text: "Kikuyu", route: "/kikuyu" },
        { text: "Kurdish", route: "/kurdish" },
        { text: "Latin", route: "/latin" },
        { text: "Latvian", route: "/latvian" },
        { text: "Letzeburgesch", route: "/letzeburgesch" },
        { text: "Lithuanian", route: "/lithuanian" },
        { text: "Loglan", route: "/loglan" },
        { text: "Lombard", route: "/lombard" },
        { text: "Luo", route: "/luo" },
        { text: "Madurese", route: "/madurese" },
        { text: "Malay", route: "/malay" },
        { text: "Malayalam", route: "/malayalam" },
        { text: "Maltese", route: "/maltese" },
        { text: "Maori", route: "/maori" },
        { text: "Marathi", route: "/marathi" },
        { text: "Mizo", route: "/mizo" },
        { text: "Mongolian", route: "/mongolian" },
        { text: "Norwegian", route: "/norwegian" },
        { text: "Occitan", route: "/occitan" },
        { text: "Panjabi", route: "/panjabi" },
        { text: "Pashto", route: "/pashto" },
        { text: "Persian", route: "/persian" },
        { text: "Polish", route: "/polish" },
        { text: "Portuguese", route: "/portuguese" },
        { text: "Rhaeto", route: "/rhaeto" },
        { text: "Romanian", route: "/romanian" },
        { text: "Rwanda", route: "/rwanda" },
        { text: "Sardinian", route: "/sardinian" },
        { text: "Scots", route: "/scots" },
        { text: "Scottish", route: "/scottish" },
        { text: "Shona", route: "/shona" },
        { text: "Sicilian", route: "/sicilian" },
        { text: "Slovak", route: "/slovak" },
        { text: "Slovenian", route: "/slovenian" },
        { text: "Soga", route: "/soga" },
        { text: "Somali", route: "/somali" },
        { text: "Spanish", route: "/spanish" },
        { text: "Sukuma", route: "/sukuma" },
        { text: "Swahili", route: "/swahili" },
        { text: "Swedish", route: "/swedish" },
        { text: "Tagalog", route: "/tagalog" },
        { text: "Tamil", route: "/tamil" },
        { text: "Telugu", route: "/telugu" },
        { text: "Thai", route: "/thai" },
        { text: "Tibetan", route: "/tibetan" },
        { text: "Turkish", route: "/turkish" },
        { text: "Urdu", route: "/urdu" },
        { text: "Uzbek", route: "/uzbek" },
        { text: "Visayan", route: "/visayan" },
        { text: "Welsh", route: "/welsh" },
        { text: "Wolof", route: "/wolof" },
        { text: "Xhosa", route: "/xhosa" },
        { text: "Yiddish", route: "/yiddish" },
        { text: "Yoruba", route: "/yoruba" },
        { text: "Zulu", route: "/zulu" },
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