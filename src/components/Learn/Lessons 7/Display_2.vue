<template>
  <div class="infoWrap">
    <div class="infoLabel">
      Xin chào {{ username }}
      <h3>List task done</h3>
      <ul>
        <li v-for="(value, index) in doneTodos" :key="index">{{ value.text }}</li>
      </ul>
      <p></p>

      <h3>Total task done: {{ doneTodosCount }}</h3>
      <h3>Task 3: {{ getTodoById(3) }}</h3>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import axios from "axios";

export default {
  name: 'Display_2',
   data() {
     return {
        todo: []
     }
   },
  computed: {
    ...mapState('home', [
      'username',
      'age'
    ]),
    ...mapState('about', [
      'products',
    ]),
    ...mapGetters('home', [
      'doneTodos',
      'getTodoById',
      'doneTodosCount'
    ])
  },
   mounted() {
      axios({
         method: 'get',
         url: 'http://vuecourse.zent.edu.vn/api/todos',
      }).then((response) => {
         // handle success
         console.log(response.data.data.data);
         this.todo = response.data.data.data
      }).catch((error) => {
         // handle error
         console.log(error);
      });
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.infoWrap {
  background: #fff;
  border: 1px solid #6E6E6E;
  padding: 24px;
  height: 250px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 24px;

  .infoLabel {
    font-weight: bold;
    color: #00AAAA;
  }
}
</style>
