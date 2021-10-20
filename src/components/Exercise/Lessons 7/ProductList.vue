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
      <tr v-for="(product, index) in drag" :key="index">
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
          <el-button type="warning" @click="updateItem(product.code)">Sửa</el-button>
          <el-button type="danger" @click="destroyItem(product.code)">Xóa</el-button>
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
import {mapState, mapMutations} from 'vuex'

export default {
  name: "ProductList",
  computed: {
    ...mapState([
      'name',
      'price',
      'quantity',
      'drag',
      'products',
      'codeProduct',
        'start',
        'end',
        'presentPage'
    ]),
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapMutations([
      'updateName',
      'updatePrice',
      'updateQuantity',
      'updateProducts',
      'updateDrag',
      'updateCodeProduct',
      'updateButtonName',
      'updateStart',
      'updateEnd',
      'updatePresentPage',
    ]),
    destroyItem(value) {
      let index = -1
      this.products.forEach((data, indexProduct) => {
        if (data.code === value) {
          index = indexProduct
        }
      })
      this.products.splice(index, 1)

      if (this.products.length > 0) {
        if (this.products.length < 6) {
          this.updateStart(1)
          this.updateEnd(this.products.length)
          this.updatePresentPage(1)
        } else {
          if (this.end > this.products.length) {
            this.updateEnd(this.products.length)
            if (this.start > this.end) {
              this.updateStart(this.start - 5)
              this.updatePresentPage(this.presentPage - 1)
            }
            this.updateDrag(this.products.slice(this.start - 1, this.end))
          }
        }
      } else {
        this.updateStart(0)
        this.updateEnd(0)
        this.updatePresentPage(1)
      }
    },
    updateItem(value) {
      let index = -1
      this.products.forEach((data, indexProduct) => {
        if (data.code === value) {
          index = indexProduct
        }
      })
      this.updateCodeProduct(this.products[index].code)
      this.updateName(this.products[index].name)
      this.updatePrice(this.products[index].price)
      this.updateQuantity(this.products[index].quantity)
      this.updateButtonName('Cập nhật')
    },
    next() {
      this.updateStart(this.start + 5)
      if (this.end + 5 > this.products.length){
        this.updateEnd(this.end + (this.products.length - this.end))
      } else {
        this.updateEnd(this.end + 5)
      }
      this.updatePresentPage(this.presentPage + 1)
      this.updateDrag(this.products.slice(this.start - 1, this.end))
    },
    prev() {
      this.updateStart(this.start - 5)
      if (this.end === this.products.length) {
        if (this.end % 5 !== 0) {
          this.updateEnd(this.end - this.end % 5)
        } else {
          this.updateEnd(this.end - 5)
        }
      } else {
        this.updateEnd(this.end - 5)
      }
      this.updatePresentPage(this.presentPage - 1)
      this.updateDrag(this.products.slice(this.start - 1, this.end))
    }
  },
  watch: {
    products() {
      if (this.products.length > 0 && this.products.length < 6) {
        this.updateStart(1)
        this.updateEnd(this.products.length)
        this.updateDrag(this.products)
      } else {
        this.updateDrag(this.products.slice(this.start - 1, this.end))
      }
    },
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/scss/ProductList";
</style>