<template>
    <div class="form-wrap">
        <h4>Sản phẩm</h4>
        <form action="">
            <div class="info">Tên sản phẩm <span class="error">(*)</span></div>
            <input type="text" placeholder="Nhập tên sản phẩm" v-model="name"
                   :class="{ errorBorder: errorName }">
            <div v-if="errorName" class="error error-text">Tên sản phẩm không được để trống</div>

            <div class="info">Đơn giá <span class="error">(*)</span></div>
            <input type="number" placeholder="Nhập đơn giá sản phẩm" v-model="price"
                   :class="{ errorBorder: errorPrice }">
            <span v-if="errorPrice" class="error error-text">Giá sản phẩm không được để trống</span>

            <div class="info">Số lượng <span class="error">(*)</span></div>
            <input type="number" placeholder="Nhập số lượng sản phẩm" v-model="quantity"
                   :class="{ errorBorder: errorQuantity }">
            <span v-if="errorQuantity" class="error error-text">Số lượng sản phẩm không được để trống</span>

            <div class="btn-form">
                <button type="reset" class="btn-reset" @click="resetValue()">Hủy</button>
                <el-button type="primary" @click="createProduct()">{{ buttonName }}</el-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProductForm",
    props: ['product'],
    data() {
        return {
            name: '',
            price: '',
            quantity: '',
            errorName: false,
            errorPrice: false,
            errorQuantity: false,
            data: '',
            buttonName: 'Tạo mới'
        }
    },
    methods: {
        createProduct() {
            let flag = false;
            (this.name === '' || this.name === undefined) ? this.errorName = flag = true : '';
            (this.price === '' || this.price === undefined) ? this.errorPrice = flag = true : '';
            (this.quantity === '' || this.quantity === undefined) ? this.errorQuantity = flag = true : '';

            if (!flag) {
                let codeItem = 'SP' + new Date().getTime();
                (this.product !== '') ? codeItem = this.product.code : ''
                this.data = {
                    code: codeItem,
                    name: this.name,
                    price: this.price,
                    quantity: this.quantity,
                }
                this.$emit('productItem', this.data)
                this.buttonName = 'Tạo mới'
                this.name = this.price = this.quantity = ''
            }
        },
        resetValue() {
            this.name = this.price = this.quantity = ''
            this.buttonName = 'Tạo mới'
        }
    },
    watch: {
        name(value) {
            (value !== '') ? this.errorName = false : ''
        },
        price(value) {
            (value !== '') ? this.errorPrice = false : ''
        },
        quantity(value) {
            (value !== '') ? this.errorQuantity = false : ''
        },
        product(value) {
            this.name = value.name
            this.price = value.price
            this.quantity = value.quantity
            this.buttonName = 'Cập nhật'
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/ProductForm";
</style>