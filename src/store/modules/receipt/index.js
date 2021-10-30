export default {
    namespaced: true,
    state: {
        bill: [
            {
                name: 'Toàn',
                product: 'Áo khoác',
                total: 10000
            }, {
                name: 'Hùng',
                product: 'Áo khoác lông',
                total: 15000
            }, {
                name: 'Mai',
                product: 'Áo khoác cừu',
                total: 15000
            }
        ],
    },
    mutations: {
        deleteItem: (state, value) => {
            state.bill.splice(value, 1)
        },
    }
}