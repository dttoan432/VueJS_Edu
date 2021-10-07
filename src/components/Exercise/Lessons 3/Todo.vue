<template>
    <div class="container">
        <div class="wrap">
            <h1>Todo App</h1>
            <input type="text" placeholder="Nhập công việc và nhấn enter để thêm"
                   v-model="input" @keypress.enter="addItem()">
            <TodoItem :todoItem="data"/>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
export default {
    name: "Todo",
    components: {
        TodoItem
    },
    data() {
        return {
            input: '',
            data: ''
        }
    },
    methods: {
        addItem() {
            let item = {
                isActive: 0,
                work: this.input
            }

            this.data = item
            this.input = ''
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/Todo";
</style>