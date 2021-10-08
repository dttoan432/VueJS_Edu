<template>
    <div id="app">
<!--        <img alt="Vue logo" src="./assets/logo.png">-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--        <Ex1_1/>-->
<!--        <Ex1_3/>-->
<!--        <Ex2_1/>-->
<!--        <Ex2_2/>-->
<!--        <Todo/>-->
<!--        <NewsDetailPage/>-->
<!--        <ProductPage/>-->
        <Exercise/>
<!--        <For_example/>-->
<!--        <BT/>-->
<!--        <Page1/>-->
<!--        <Page2/>-->
    </div>
</template>

<script>
// import HelloWorld from './components/Learn/Lessons 1/HelloWorld.vue'
// import Ex1_1 from './components/Exercise/Lessons 1/Ex1_1'
// import Ex1_3 from './components/Exercise/Lessons 1/Ex1_3'
// import Ex2_1 from './components/Exercise/Lessons 2/Ex2_1'
// import Ex2_2 from './components/Exercise/Lessons 2/Ex2_2'
// import Todo from './components/Exercise/Lessons 3/Todo';
import Exercise from './components/Exercise/Lessons 3/Exercise';
// import BaseLayout_4_1 from "./components/Exercise/Lessons 4/BaseLayout_4_1";
// import NewsDetailPage from "./components/Exercise/Lessons 4/NewsDetailPage";
// import ProductPage from "./components/Exercise/Lessons 4/ProductPage";
// import For_example from './components/Learn/Lessons 2/For_example.vue'
// import For_example from './components/Learn/Lessons 3/For_example.vue'
// import For_example from './components/Learn/Lessons 4/For_example.vue'
// import BT from './components/Learn/Lessons 2/BT.vue'
// import Page1 from "./components/Learn/Lessons 4/Page1";
// import Page2 from "./components/Learn/Lessons 4/Page2";

export default {
    name: 'App',
    components: {
        // HelloWorld,
        // Ex1_1,
        // Ex1_3,
        // Ex2_1,
        // Ex2_2,
        // Todo,
        Exercise
        // BaseLayout_4_1,
        // NewsDetailPage,
        // ProductPage
        // For_example,gi
        // BT,
      // Page1,
      // Page2
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
    /*margin-top: 60px;*/
}
</style>
