export default {
    namespaced: true,
    state: {
        products: [
            {
                name: 'Áo khoác',
                quantity: 11,
                price: 10000
            }, {
                name: 'Ô tô',
                quantity: 23,
                price: 15000
            }, {
                name: 'Xe máy',
                quantity: 12,
                price: 22000
            }, {
                name: 'Giày thể thao',
                quantity: 11,
                price: 45000
            }
        ],
        currentPage: 1,
        active: '2'
    },
    mutations: {
        deleteItem: (state, value) => {
            state.products.splice(value, 1)
        },
    }
}