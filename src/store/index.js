import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import about from './modules/about'
import product from './modules/product'
import receipt from './modules/receipt'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        home,
        about,
        product,
        receipt
    }

    // state: {
    //     // username: 'Toàn',
    //     // age: 21,
    //     // todos: [
    //     //     { id: 1, text: 'task 1', done: true },
    //     //     { id: 2, text: 'task 2', done: true },
    //     //     { id: 3, text: 'task 3', done: false }
    //     // ],
    //     // listWork: [],
    //
    //     //Ex 7.2
    //     // name: '',
    //     // price: '',
    //     // quantity: '',
    //     // errorName: false,
    //     // errorPrice: false,
    //     // errorQuantity: false,
    //     // data: '',
    //     // buttonName: 'Tạo mới',
    //     // products: [],
    //     // drag: [],
    //     // codeProduct: '',
    //     // start: 0,
    //     // end: 0,
    //     // presentPage: 1,
    //     //=====
    //
    //     //Ex 7.1
    //     products: [
    //         {
    //             id: 1,
    //             name: 'iPhone 12 Pro Max Chính Hãng',
    //             image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
    //             price: 32990000,
    //             quantity: 566,
    //         },
    //         {
    //             id: 2,
    //             name: 'iPhone 12 Chính Hãng (VN/A)',
    //             image: '',
    //             price: 21790000,
    //             quantity: 123,
    //         },
    //         {
    //             id: 3,
    //             name: 'iPhone 11 Chính hãng',
    //             image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
    //             price: 16690000,
    //             quantity: 0,
    //         },
    //         {
    //             id: 4,
    //             name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
    //             image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
    //             price: 12190000,
    //             quantity: 1023,
    //         },
    //         {
    //             id: 5,
    //             name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
    //             image: '',
    //             price: 26500000,
    //             quantity: 6,
    //         }
    //     ],
    //     carts: [],
    //     totalMoney: 0
    //     //====
    // },
    // getters: {
    //     // doneTodos: (state) => {
    //     //     return state.todos.filter(todo => todo.done)
    //     // },
    //     // doneTodosCount: (state, getters) => {
    //     //     return getters.doneTodos.length
    //     // },
    //     // getTodoById: (state) => (id) => {
    //     //     return state.todos.find(todo => todo.id === id)
    //     // }
    // },
    // mutations: {
    //     // updateUserName: (state, value) => {
    //     //     state.username = value
    //     // },
    //     // updateInput: (state, value) => {
    //     //     state.input = value
    //     // },
    //     // addWork: (state, value) => {
    //     //     state.listWork.push(value)
    //     // },
    //     // deleteWork: (state, index) => {
    //     //     state.listWork.splice(index,1)
    //     // },
    //     // tick: (state, obj) => {
    //     //     if (obj.event) {
    //     //         state.listWork[obj.index].isActive = 1
    //     //     } else {
    //     //         state.listWork[obj.index].isActive = 0
    //     //     }
    //     // },
    //
    //     //Ex 7.2
    //     // updateName: (state, value) => {
    //     //     state.name = value
    //     // },
    //     // updatePrice: (state, value) => {
    //     //     state.price = value
    //     // },
    //     // updateQuantity: (state, value) => {
    //     //     state.quantity = value
    //     // },
    //     // updateErrorName: (state, value) => {
    //     //     state.errorName = value
    //     // },
    //     // updateErrorPrice: (state, value) => {
    //     //     state.errorPrice = value
    //     // },
    //     // updateErrorQuantity: (state, value) => {
    //     //     state.errorQuantity = value
    //     // },
    //     // updateButtonName: (state, value) => {
    //     //     state.buttonName = value
    //     // },
    //     // updateData: (state, value) => {
    //     //     state.data = value
    //     // },
    //     // updateProducts: (state, value) => {
    //     //     state.products.push(value)
    //     // },
    //     // updateDrag: (state, value) => {
    //     //     state.drag = value
    //     // },
    //     // updateCodeProduct: (state, value) => {
    //     //     state.codeProduct = value
    //     // },
    //     // updateStart: (state, value) => {
    //     //     state.start = value
    //     // },
    //     // updateEnd: (state, value) => {
    //     //     state.end = value
    //     // },
    //     // updatePresentPage: (state, value) => {
    //     //     state.presentPage = value
    //     // },
    //     //======
    //
    //     //Ex 7.1
    //     updateCart: (state, value) => {
    //         state.carts.push(value)
    //     },
    //     spliceCart: (state, value) => {
    //       state.carts.splice(value, 1)
    //     },
    //     updateItemInCart: (state, value) => {
    //         state.carts[value.index].quantityCart = value.quantity
    //     },
    //     updateTotalMoney: (state, value) => {
    //         state.totalMoney = value
    //     }
    //     //=====
    // }
})

export default store