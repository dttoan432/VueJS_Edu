<template>
    <div class="container-list">
        <table>
            <tr>
                <th class="title-code">Mã sản phẩm</th>
                <th class="title-name">Tên sản phẩm</th>
                <th class="title-code">Giá</th>
                <th class="title-code">Số lượng</th>
                <th class="title-code">Trạng thái</th>
                <th class="title-code">Hoạt động</th>
            </tr>
            <tr v-for="(product, index) in products" :key="index">
                <td class="product-text-left">{{ product.code }}</td>
                <td class="product-text-left">{{ product.name }}</td>
                <td class="product-text-left">
                    {{
                        new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                        }).format(product.price)
                    }}
                </td>
                <td>{{ product.quantity }}</td>
                <td>
                    <span v-if="product.quantity > 0" style="color: #39cd74;">Còn hàng</span>
                    <span v-else style="color: red;">Hết hàng</span>
                </td>
                <td>
                    <el-button type="warning" @click="updateItem(index)">Sửa</el-button>
                    <el-button type="danger" @click="destroyItem(index)">Xóa</el-button>
                </td>
            </tr>
            <tr v-if="products.length === 0">
                <td colspan="6">Không có dữ liệu</td>
            </tr>
        </table>
        <div class="pagination-wrap">
            <span>Hiển thị {{ start }} - {{ end }} trên tổng {{ products.length }} ({{ presentPage }} trang)</span>
            <el-pagination background layout="prev, next" :total="products.length"
                           :page-size="5" @prev-click="prev()" @next-click="next()">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductList",
    props: ['item'],
    data() {
        return {
            products: [],
            start: 0,
            end: 0,
            presentPage: 1,
        }
    },
    methods: {
        destroyItem(value) {
            this.products.splice(value, 1)
        },
        updateItem(value) {
            this.$emit('productItemUpdate', this.products[value])
        },
        prev() {

        },
        next() {

        }
    },
    watch: {
        item(value) {
            let flag = true
            for (let i = 0; i < this.products.length; i++) {
                if (value.code === this.products[i].code) {
                    this.products[i] = value
                    this.products.push([])
                    this.products.pop()
                    flag = false
                }
            }

            if (flag) {
                this.products.push(value)
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/ProductList";
</style>