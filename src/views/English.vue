<template>
  <Layout></Layout>
</template>

<script>
// import db from "../firebase/init"

const Layout = () => import('../components/Layout')
// import Layout from "../components/Layout"
// import hello from '!raw-loader!../assets/German.txt'
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

// let test = hello.replace(/=========================/g, '')
// let some = test.split('\n')
// some.forEach(someFilter)
// some = some[Math.floor(Math.random() * some.length)]

// function someFilter(item, index){
//   if (item == "\r"){
//     some.splice(index,1)
//   }
// }
// console.log(some)

// db.collection('language').doc('german').set({
//   content: some
// })
</script>
