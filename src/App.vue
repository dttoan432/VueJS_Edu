<template>
  <div id="app">
    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link> |-->
    <!--      <router-link to="/profile">Profile</router-link> |-->
    <!--        <button @click="pushT()">Push to profile</button>-->
    <!--        <button @click="pushT()">Push to post</button>-->
    <!--    </div>-->
<!--        <router-view/>-->
<!--        <Baselayout/>-->
<!--        <Lessons_7/>-->
<!--    <Todo/>-->
<!--    <Exercise/>-->
<!--    <Ex7_1/>-->
<!--    <Ex5_1/>-->
<!--    <Ex9_1/>-->
<!--    <Ex10_1/>-->
    <Ex10_2/>
<!--    <BT/>-->
  </div>
</template>

<script>
// import Baselayout from './components/Learn/Lessons 5/Baselayout'
// import Lessons_7 from './components/Learn/Lessons 7/For_example.vue'
// import BT from './components/Learn/Lessons 7/BT'
// import Ex5_1 from './components/Exercise/Lessons 5/Ex5_1'
// import Todo from './components/Learn/Lessons 7/Todo'
// import Exercise from './components/Exercise/Lessons 7/Exercise'
// import Ex7_1 from './components/Exercise/Lessons 7/Ex7_1'
// import Ex9_1 from './components/Exercise/Lessons 9/Ex9_1'
// import Ex10_1 from './components/Exercise/Lessons 10/Ex10_1'
import Ex10_2 from './components/Exercise/Lessons 10/Ex10_2'

export default {
  name: 'App',
  components: {
    // Baselayout
    // Lessons_7,
    //   Todo,
    // Exercise,
    // Ex7_1,
    // BT,
    // Ex5_1
    //  Ex9_1
    //  Ex10_1
     Ex10_2
  },
  methods: {
    // pushT() {
    //     this.$router.push({
    //         path: '/user/profile'
    //     })
    // }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
