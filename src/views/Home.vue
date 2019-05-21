<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 pa-3>
          <v-card>
            <!-- <v-card-title>Lorem Ipsum</v-card-title> -->
            <!-- <v-card-text>{{ text.slice(0, text.indexOf('=')) }}</v-card-text> -->
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 pa-3>
          <!-- <v-card>
            <v-card-title>Lorem Ipsum</v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro exercitationem repellendus delectus asperiores! Debitis quis, reprehenderit consequatur dolorem nisi deleniti, quae, soluta at cupiditate officia quo doloremque corrupti quod ullam?</v-card-text>
          </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// import hello from '!raw-loader!./assets/helloworld.txt';
import hello from '!raw-loader!../assets/English.txt'
export default {
  components: {
    // hello
  },
  data () {
    return {

    }
  },
  methods: {

  }
};

let awee;
let test = hello.replace(/=========================/g, '')
let some = test.split('\n')
awee = some.forEach(someFilter)

function someFilter(item, index){
  if (item == "\r")
    console.log(`awesome ${index}`)
  else
    console.log(`[${index}]: ${item}`)
}

// let val = some.includes('\r')
// console.log(awee)
// console.log(test)  
// console.log(some.filter())
console.log(some)
// console.log('From Home: ', hello)
</script>
