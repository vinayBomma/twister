<template>
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
</template>

<script>
let counter = 6;
import db from '../firebase/init'
// import { functions } from 'firebase';
// import hello from '!raw-loader!../assets/English.txt'
export default {
  data () {
    return {
      contents: [],
      colors: [
        "cyan darken-1",
        "blue lighten-1",
        "green accent-4",
        "teal darken-1",
      ],
      cardColor: "",
      domData: false
    }
  },
  methods: {
    randomColor: function(){
      this.cardColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    retrieveData: function(){
      db.collection('language').doc('english').get()
      .then(doc => {
        counter += 6
        let content = doc.data().content.slice(0,counter)
        content.id = doc.id
        this.contents = content
        counter = this.contents.length
      }).catch(err => {
        console.log('Errarta ', err)
      })
    }
  },
  created(){
    db.collection('language').doc('english').get()
      .then(doc => {
        let content = doc.data().content.slice(0,counter)
        content.id = doc.id
        this.contents = content
        this.domData = true
        counter = this.contents.length
      }).catch(err => {
        console.log('Errarta: ', err)
      })
  }
};  

// let firetest = db.collection('language').doc('test')
// firetest.get()
//   .then(sn => {
//     let someData = sn.data().content.slice(0,3)
//     someData.id = sn.id
//     console.log(someData)
//   }).catch(err => {
//     console.log('some stupid error ', err)
//   })
// let test = hello.replace(/=========================/g, '')
// let some = test.split('\n')
// some.forEach(someFilter)
// // some = some[Math.floor(Math.random() * some.length]

// function someFilter(item, index){
//   if (item == "\r"){
//     some.splice(index,1)
//   }
// }
// console.log(some)

// let setDoc = db.collection('language').doc('test').set({
//   content: some
// })
</script>
