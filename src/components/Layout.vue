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
let counter = 6;
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
      domData: false,
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
          counter += 6;
          let content = doc.data().content.slice(0, counter);
          content.id = doc.id;
          this.contents = content;
          counter = this.contents.length;
        })
        .catch(err => {
          console.log("Errarta ", err);
        });
    },
  },
  created() {

    console.log('Route: ',this.$route.name)

    db.collection("language")
      .doc(this.$route.name)
      .get()
      .then(doc => {
        let content = doc.data().content.slice(0, counter);
        content.id = doc.id;
        this.contents = content;
        this.domData = true;
        counter = this.contents.length;
      })
      .catch(err => {
        console.log("Errarta: ", err);
      });
  }
};
</script>
