<template>
  <div class="form-wrap">
    <h4>Sản phẩm</h4>
    <form action="">
      <div class="info">Tên sản phẩm <span class="error">(*)</span></div>
      <input type="text" placeholder="Nhập tên sản phẩm"
             @keyup="updateName($event.target.value)"
             v-model="name"
             :class="{ errorBorder: errorName }">
      <div v-if="errorName" class="error error-text">Tên sản phẩm không được để trống</div>

      <div class="info">Đơn giá <span class="error">(*)</span></div>
      <input type="number" placeholder="Nhập đơn giá sản phẩm"
             @keyup="updatePrice($event.target.value)"
             v-model="price"
             :class="{ errorBorder: errorPrice }">
      <span v-if="errorPrice" class="error error-text">Giá sản phẩm không được để trống</span>

      <div class="info">Số lượng <span class="error">(*)</span></div>
      <input type="number" placeholder="Nhập số lượng sản phẩm"
             @keyup="updateQuantity($event.target.value)"
             v-model="quantity"
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
import {mapState, mapMutations} from 'vuex'

export default {
  name: "ProductForm",
  // props: ['product'],
  computed: {
    ...mapState([
      'name',
      'price',
      'quantity',
      'errorName',
      'errorPrice',
      'errorQuantity',
      'data',
      'buttonName',
      'products',
      'codeProduct'
    ]),
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations([
      'updateName',
      'updatePrice',
      'updateQuantity',
      'updateErrorName',
      'updateErrorPrice',
      'updateErrorQuantity',
      'updateButtonName',
      'updateData',
      'updateProducts',
      'updateCodeProduct'
    ]),
    createProduct() {
      let flag = false;
      if (this.name === '' || this.name === undefined) {
        this.updateErrorName(true)
        flag = true
      }
      if (this.price === '' || this.price === undefined) {
        this.updateErrorPrice(true)
        flag = true
      }
      if (this.quantity === '' || this.quantity === undefined) {
        this.updateErrorQuantity(true)
        flag = true
      }

      if (!flag) {
        let codeItem = 'SP' + new Date().getTime();
        if (this.codeProduct !== '') {
          this.products.forEach((data) => {
            if (data.code === this.codeProduct) {
              data.name = this.name
              data.price = this.price
              data.quantity = this.quantity
            }
          })
          this.updateCodeProduct('')
        } else {
          let data = {
            code: codeItem,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
          }
          this.updateProducts(data)
        }

        // this.updateName('')
        // this.updatePrice('')
        // this.updateQuantity('')
        this.updateButtonName('Tạo mới')
      }
    },
    resetValue() {
      this.updateName('')
      this.updatePrice('')
      this.updateQuantity('')
      this.updateButtonName('Tạo mới')
      this.updateCodeProduct('')
    }
  },
  watch: {
    name(value) {
      (value !== '') ? this.updateErrorName(false) : ''
    },
    price(value) {
      (value !== '') ? this.updateErrorPrice(false) : ''
    },
    quantity(value) {
      (value !== '') ? this.updateErrorQuantity(false) : ''
    },
    product(value) {
      this.name = value.name
      this.price = value.price
      this.quantity = value.quantity
      this.buttonName = 'Cập nhật'
    }
  },
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/ProductForm";
</style>