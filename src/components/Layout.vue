<template>
  <section>
    <div>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 pa-3 v-for="(i, j) in contents" v-bind:key="j">
            <v-card :class="cardColor">
              <v-card-text class="white--text lighten-2">{{ i }} {{ randomColor() }}</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-btn class="orange" v-on:click="retrieveData()" v-show="domData">Load More</v-btn>
      </v-container>
    </div>
  </section>
</template>

<script>
let twisterData = [],
  i = 0;
import db from "../firebase/init";

export default {
  data() {
    return {
      contents: [],
      colors: [
        "cyan darken-1",
        "blue lighten-1",
        "green accent-4",
        "teal darken-1"
      ],
      cardColor: "",
      domData: false
    };
  },
  methods: {
    randomColor: function() {
      this.cardColor = this.colors[
        Math.floor(Math.random() * this.colors.length)
      ];
    },
    retrieveData: function() {
      db.collection("language")
        .doc(this.$route.name)
        .get()
        .then(doc => {
          (function randomTwister() {
            let dbData = doc.data().content;

            for (i = 0; i < 6; i++) {
              let randomValue =
                dbData[Math.floor(Math.random() * dbData.length)];
              twisterData.push(randomValue);
            }
          })();
          let retData = twisterData;
          retData = this.contents.concat(twisterData);
          twisterData = [];
          this.contents = retData;
          this.contents.id = doc.id;
        })
        .catch(err => {
          console.log("Errarta ", err);
        });
    }
  },
  created() {
    db.collection("language")
      .doc(this.$route.name)
      .get()
      .then(doc => {
        (function randomTwister() {
          let dbData = doc.data().content;

          for (i = 0; i < 6; i++) {
            let randomValue = dbData[Math.floor(Math.random() * dbData.length)];
            twisterData.push(randomValue);
          }
        })();
        this.contents = twisterData;
        this.contents.id = doc.id;
        twisterData = [];
        this.domData = true;
      })
      .catch(err => {
        console.log("Errarta: ", err);
      });
  }
};
</script>
