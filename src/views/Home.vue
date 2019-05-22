<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-3 v-for="text in someText" v-bind:key="text">
          <v-card :class="cardColor">
            <v-card-text class="white--text lighten-2">{{ text }} {{ randomColor() }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import hello from '!raw-loader!../assets/English.txt'
export default {
  components: {
  },
  data () {
    return {
      someText: some,
      colors: [
        "blue lighten-1",
        "cyan darken-1",
        "teal darken-1"
      ],
      cardColor: "",
    }
  },
  methods: {
    randomColor: function(){
      // this.cardColor = "teal darken-4"
         this.cardColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    }

  }
};

let test = hello.replace(/=========================/g, '')
let some = test.split('\n')
some.forEach(someFilter)
// some = some[Math.floor(Math.random() * some.length]

function someFilter(item, index){
  if (item == "\r"){
    some.splice(index,1)
  }
}

</script>
