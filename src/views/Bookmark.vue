<template>
  <section>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-3 v-for="(i, j) in items" v-bind:key="i">
          <v-card :style="cardColor[j]">
            <v-card-text class="subheading">{{ i }}</v-card-text>
            <!-- <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon v-on:click="bookmark(i)">bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon v-on:click="report(i)">report</v-icon>
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import idb from "../firebase/idb";
export default {
  data() {
    return {
      items: [],
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
    };
  },
  methods: {
    randomColor() {
      this.cardColor.push(
        this.colors[Math.floor(Math.random() * this.colors.length)]
      );
    },
  },
  async created() {
    let db = await idb.getDb();

    return new Promise(resolve => {
      let trans = db.transaction(["items"], "readonly");
      trans.oncomplete = () => {
        resolve();
      };

      let store = trans.objectStore("items");
      // let items = [];

      store.openCursor().onsuccess = e => {
        let cursor = e.target.result;
        if (cursor) {
          this.items.push(cursor.value);
          cursor.continue();
          this.randomColor()
        }
      };
    });
  }
};
</script>