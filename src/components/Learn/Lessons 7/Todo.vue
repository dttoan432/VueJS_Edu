<template>
    <div class="container">
        <div class="wrap">
            <h1>Todo App</h1>
            <input type="text" placeholder="Nhập công việc và nhấn enter để thêm"
                   v-model="work" @keypress.enter="addItem()">
            <TodoItem/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapMutations } from 'vuex'

export default {
    name: "Todo",
    components: {
        TodoItem
    },
    data() {
        return {
            work: ''
        }
    },
    methods: {
        ...mapMutations([
            'addWork'
        ]),
        addItem() {
            let item = {
                isActive: 0,
                work: this.work
            }

            this.addWork(item)
            this.work = ''
        }
    },
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/Todo";
</style>