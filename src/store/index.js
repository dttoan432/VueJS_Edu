import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // username: 'Toàn',
        // age: 21,
        // todos: [
        //     { id: 1, text: 'task 1', done: true },
        //     { id: 2, text: 'task 2', done: true },
        //     { id: 3, text: 'task 3', done: false }
        // ],
        // listWork: [],
        name: '',
        price: '',
        quantity: '',
        errorName: false,
        errorPrice: false,
        errorQuantity: false,
        data: '',
        buttonName: 'Tạo mới',
        products: [],
        drag: [],
        codeProduct: '',
        start: 0,
        end: 0,
        presentPage: 1,
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
        // updateUserName: (state, value) => {
        //     state.username = value
        // },
        // updateInput: (state, value) => {
        //     state.input = value
        // },
        // addWork: (state, value) => {
        //     state.listWork.push(value)
        // },
        // deleteWork: (state, index) => {
        //     state.listWork.splice(index,1)
        // },
        // tick: (state, obj) => {
        //     if (obj.event) {
        //         state.listWork[obj.index].isActive = 1
        //     } else {
        //         state.listWork[obj.index].isActive = 0
        //     }
        // },
        updateName: (state, value) => {
            state.name = value
        },
        updatePrice: (state, value) => {
            state.price = value
        },
        updateQuantity: (state, value) => {
            state.quantity = value
        },
        updateErrorName: (state, value) => {
            state.errorName = value
        },
        updateErrorPrice: (state, value) => {
            state.errorPrice = value
        },
        updateErrorQuantity: (state, value) => {
            state.errorQuantity = value
        },
        updateButtonName: (state, value) => {
            state.buttonName = value
        },
        updateData: (state, value) => {
            state.data = value
        },
        updateProducts: (state, value) => {
            state.products.push(value)
        },
        updateDrag: (state, value) => {
            state.drag = value
        },
        updateCodeProduct: (state, value) => {
            state.codeProduct = value
        },
        updateStart: (state, value) => {
            state.start = value
        },
        updateEnd: (state, value) => {
            state.end = value
        },
        updatePresentPage: (state, value) => {
            state.presentPage = value
        },

    }
})

export default store