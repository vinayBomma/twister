<template>
  <Layout></Layout>
</template>

<script>
// import {db} from "../firebase/init"

const Layout = () => import('../components/Layout')

// import hello from '!raw-loader!../assets/Spanish.txt'
export default {
  components: {
    Layout
  },
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

// important
// let test = hello.replace(/=========================/g, '')
// let some = test.split('\n')
// some.forEach(someFilter)
// important

// some = some[Math.floor(Math.random() * some.length)]

// this too important
// function someFilter(item, index){
//   if (item == "\r"){
//     some.splice(index,1)
//   }
// }
// this too important

// console.log(some)

// Database updation
// db.collection('language').doc('spanish').set({
//   content: some
// })
// end of db 
</script>
