<template>
    <div class="todo-container">
        <div class="todo-item" v-for="(value, index) in listWork" :key="index">
            <div class="todo-info">
                <input type="checkbox" @click="handleTick(index, $event)" :checked="value.isActive">
                <span :class="{ del: value.isActive }">{{ value.work }}</span>
            </div>
            <button @click="handleDeleteItem(index)" v-if="value.isActive">Xóa</button>
        </div>
        <div class="todo-null" v-if="listWork.length === 0">
            Chưa có task nào được thêm
        </div>
    </div>
</template>

<script>
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
            this.listWork.splice(index,1)
        },
        handleTick(index, event){
            if (event.target.checked) {
                this.listWork[index].isActive = 1
            } else {
                this.listWork[index].isActive = 0
            }
        }
    },
    watch: {
        todoItem (value) {
            this.listWork.push(value)
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/TodoItem.scss";
</style>