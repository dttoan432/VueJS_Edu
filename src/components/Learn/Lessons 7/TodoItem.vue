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
import { mapState, mapMutations } from 'vuex'

export default {
    name: "TodoItem",
    data() {
        return {

        }
    },
    methods: {
        handleDeleteItem(index) {
            this.deleteWork(index)
        },
        handleTick(index, event){
            let obj = {
                index: index,
                event: 0
            }
            if (event.target.checked) {
                obj.event = 1
                this.tick(obj)
            } else {
                obj.event = 0
                this.tick(obj)
            }
        },
        ...mapMutations([
            'deleteWork',
            'tick'
        ]),
    },
    computed: {
        ...mapState([
            'listWork'
        ]),
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/TodoItem.scss";
</style>