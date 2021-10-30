<template>
    <div class="todo-container">
        <div class="todo-item" v-for="(value, index) in listWork" :key="index">
            <div class="todo-info">
                <div>
                   <input type="checkbox" @click="handleTick(index, $event, value.id)" :checked="value.is_complete">
                   <span :class="{ del: value.is_complete }">{{ value.title }}</span>
                </div>
            </div>
            <button @click="handleDeleteItem(value.id)" v-if="value.is_complete === 1">Xóa</button>
        </div>
        <div class="todo-null" v-if="listWork.length === 0">
            Chưa có task nào được thêm
        </div>
    </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

export default {
    name: "TodoItem",
   props: ['todoItem'],
    data() {
        return {
            listWork: []
        }
    },
    methods: {
        handleDeleteItem(index) {
           axios({
              method: 'delete',
              url: `http://vuecourse.zent.edu.vn/api/todos/${index}`,
           }).then(() => {
              this.getTodoList()
           }).catch((error) => {
              // handle error
              console.log(error);
           });
        },
        handleTick(index, event, id){
           let done = ''
           if (event.target.checked) {
              this.listWork[index].isActive = 1
              done = 1
              this.listWork.push([])
              this.listWork.pop()
           } else {
              this.listWork[index].isActive = 0
              this.listWork.push([])
              this.listWork.pop()
              done = 0
           }
           axios({
              method: 'put',
              url:  `http://vuecourse.zent.edu.vn/api/todos/${id}`,
              data: {
                 is_complete: done,
              }
           }).then(() => {
              this.getTodoList()
              // alert('ok')
           }).catch(() => {
              //
           });
        },
        // ...mapMutations([
        //     'deleteWork',
        //     'tick'
        // ]),
       getTodoList() {
          axios({
             method: 'get',
             url: 'http://vuecourse.zent.edu.vn/api/todos',
          }).then((response) => {
             this.listWork = response.data.data.data
             this.listWork.forEach((data) => {
                data.isActive = 0
             })
          }).catch((error) => {
             // handle error
             console.log(error);
          });
       },
       addWork() {
          axios({
             method: 'post',
             url: 'http://vuecourse.zent.edu.vn/api/todos',
             data: {
                title: this.todoItem,
             }
          }).then(() => {
             this.getTodoList()
            // alert('ok')
          }).catch(() => {
             //
          });
       },
       handleDone(id) {
          axios({
             method: 'put',
             url:  `http://vuecourse.zent.edu.vn/api/todos/${id}`,
             data: {
                is_complete: 1,
             }
          }).then(() => {
             this.getTodoList()
             // alert('ok')
          }).catch(() => {
             //
          });
       }
    },
   mounted() {
       this.getTodoList()
   },
   watch: {
       todoItem() {
          this.addWork()
       }
   }
   // computed: {
    //     ...mapState([
    //         'listWork'
    //     ]),
    // }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/TodoItem.scss";
</style>