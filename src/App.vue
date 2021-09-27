<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Ex1_1/>
        <Ex1_3/>
    </div>
</template>

<script>
// import HelloWorld from './components/Learn/Lessons 1/HelloWorld.vue'
import Ex1_1 from './components/Exercise/Lessons 1/Ex1_1'
import Ex1_3 from './components/Exercise/Lessons 1/Ex1_3'

export default {
    name: 'App',
    components: {
        // HelloWorld,
        Ex1_1,
        Ex1_3,
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
