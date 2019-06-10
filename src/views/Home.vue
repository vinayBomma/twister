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
    </v-container>
  </div>
</template>

<script>
import db from '../firebase/init'
// import hello from '!raw-loader!../assets/English.txt'
export default {
  components: {

  },
  data () {
    return {
      contents: [],
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
      this.cardColor = "teal darken-4"
      this.cardColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    }
  },
  created(){
    db.collection('language').doc('test').get()
      .then(doc => {
        let content = doc.data().content.slice(0,5)
        content.id = doc.id
        // console.log(content.content)
        this.contents = content
      }).catch(err => {
        console.log('Errarta')
      })
    
    // console.log(db.collection('langauge').orderBy('content'))
    // .then(snapshot => {
    //   snapshot.forEach(doc => {
    //     let content = doc.data()
    //     content.id = doc.idc
    //     this.contents = (content.text)
    //   })
    // })
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
