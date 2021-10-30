export default {
    namespaced: true,
    state: {
        products: [
            { id: 1, text: 'product 1', done: true },
            { id: 2, text: 'product 2', done: true },
            { id: 3, text: 'product 3', done: false }
        ],
    },
    getters: {
        // doneTodos: (state) => {
        //     return state.todos.filter(todo => todo.done)
        // },
    },
    mutations: {

    }
}