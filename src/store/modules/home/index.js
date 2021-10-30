export default {
    namespaced: true,
    state: {
        username: 'Toàn',
        age: 21,
        todos: [
            { id: 1, text: 'task 1', done: true },
            { id: 2, text: 'task 2', done: true },
            { id: 3, text: 'task 3', done: false }
        ],
        listWork: [],
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        updateUserName: (state, value) => {
            state.username = value
        },
        updateInput: (state, value) => {
            state.input = value
        },
        addWork: (state, value) => {
            state.listWork.push(value)
        },
        deleteWork: (state, index) => {
            state.listWork.splice(index,1)
        },
        tick: (state, obj) => {
            if (obj.event) {
                state.listWork[obj.index].isActive = 1
            } else {
                state.listWork[obj.index].isActive = 0
            }
        },
    }
}