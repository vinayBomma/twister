<template>
  <section>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-3 v-for="(i, j) in contents" v-bind:key="j">
          <v-card :style="cardColor[j]">
            <v-card-text class="subheading">{{ i }}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon v-on:click="bookmark(i)">bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon v-on:click="report(i)">report</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn
        style="background: linear-gradient(to right, #000000, #434343);"
        v-on:click="retrieveData()"
        v-show="domData"
        block
      >Load More</v-btn>
    </v-container>

    <v-dialog v-model="loading" persistent full-width>
      <v-card color="transparent">
        <v-layout v-model="loading" justify-center pa-3>
          <FingerprintSpinner v-show="loading === true" :size="55" color="red lighten-1" />
        </v-layout>
        <v-layout justify-center>
          <p text-align="center">Loading...</p>
        </v-layout>
      </v-card>
    </v-dialog>

    <v-dialog v-model="reportDialog" persistent full-width>
      <v-card>
        <v-card-title class="headline">Report Twist</v-card-title>
        <v-card-text>
          <v-textarea outline auto-grow label="What's Wrong?" v-model="reportText"></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-layout row justify-end mb-3>
            <v-btn round v-on:click="reportDialog = false">Cancel</v-btn>
            <v-btn round color="cyan darken-2" v-on:click="submitReport">Submit</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="timeout" multi-line bottom :color="color">
      {{ msg }}
      <v-btn flat @click="snackbar === false">Close</v-btn>
    </v-snackbar>
  </section>
</template>

<script>
import { db } from "../firebase/init";
// import {openDb} from 'idb';
import idb from '../firebase/idb'

import "epic-spinners/dist/lib/epic-spinners.min.css";
import FingerprintSpinner from "epic-spinners/src/components/lib/FingerprintSpinner";

export default {
  components: {
    FingerprintSpinner
  },
  data() {
    return {
      contents: [],
      twisterData: [],
      colors: [
        "background-image: linear-gradient( 111.8deg,  rgba(0,104,155,1) 19.8%, rgba(0,173,239,1) 92.1% );",
        "background-image: linear-gradient( 105.2deg,  rgba(255,78,78,1) 11.2%, rgba(253,176,71,1) 117.9% );",
        "background-image: linear-gradient( 69.5deg,  rgba(40,48,68,1) 2.3%, rgba(1,179,201,1) 97.6% );",
        "background-image: linear-gradient( 69.8deg,  rgba(25,49,108,1) 2.8%, rgba(1,179,201,1) 97.8% );",
        "background-image: linear-gradient( 109.6deg,  rgba(9,154,151,1) 11.2%, rgba(21,205,168,1) 91.1% );",
        "background-image: linear-gradient( 108deg,  rgba(0,166,81,1) 9.3%, rgba(0,209,174,1) 118.3% );",
        "background-image: linear-gradient( 106.3deg,  rgba(237,47,98,0.85) 33.1%, rgba(192,14,47,1) 88.9% );",
        "background-image: linear-gradient( 89.1deg,  rgba(55,64,77,1) 0.7%, rgba(66,156,193,1) 88.4% );"
      ],
      cardColor: [],
      domData: false,
      loading: false,
      reportDialog: false,
      style: "opacity: 1",
      snackbar: false,
      msg: null,
      timeout: 3000,
      color: undefined,
      reportText: null,
      reportedTwist: null
    };
  },
  methods: {
    async bookmark(twist) {
      
      // const indexDb = openDb('twisterData', 1, upgradeDB => {
      //   upgradeDB.createObjectStore('todos', {keypath: 'id'});
      // })
      await idb.getDb();
      await idb.bookmark(twist);

      this.msg = "Twist Bookmarked!";
      this.color = "green darken-1";
      this.snackbar = true;
    },
    report(twist) {
      this.reportDialog = true;
      this.reportedTwist = twist;
    },
    submitReport() {
      if (this.reportText) {
        this.msg = "Thank you for your feedback!";
        this.color = "grey darken-2";
        this.snackbar = true;
        this.reportDialog = false;
        console.log("Feedback Text: ", this.reportText);
        this.reportText = null;

        console.log("Report: ", this.reportedTwist);
      }
    },
    randomColor() {
      this.cardColor.push(
        this.colors[Math.floor(Math.random() * this.colors.length)]
      );
    },
    retrieveData() {
      this.loading = true;
      this.style = "opacity: 0.3";
      db.collection("language")
        .doc(this.$route.name)
        .get()
        .then(res => {
          this.loading = false;
          this.style = "opacity: 1";
          let dbData = res.data().content;

          for (let i = 0; i < 6; i++) {
            let randomValue = dbData[Math.floor(Math.random() * dbData.length)];
            this.twisterData.push(randomValue);
            this.randomColor();
          }

          this.contents = this.twisterData;
        });
    }
  },
  created() {
    this.loading = true;
    this.style = "opacity: 0.3";
    db.collection("language")
      .doc(this.$route.name)
      .get()
      .then(res => {
        this.loading = false;
        this.style = "opacity: 1";
        let dbData = res.data().content;

        for (let i = 0; i < 6; i++) {
          let randomValue = dbData[Math.floor(Math.random() * dbData.length)];
          this.twisterData.push(randomValue);
          this.randomColor();
        }

        this.contents = this.twisterData;
      });
    this.domData = true;
  }
};
</script>
