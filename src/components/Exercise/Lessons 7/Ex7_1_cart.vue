<template>
  <div class="wrap-cart">
    <h4>Giỏ hàng</h4>
    <div class="cart-item">
      <table>
        <tr v-for="(cart,index) in carts" :key="index">
          <td>
            <img :src="cart.image" alt="" v-if="cart.image !== ''">
            <img src="../../../../src/assets/default.png" alt="" v-else>
          </td>
          <td>
            <div style="font-weight: bold;">{{ cart.name }}</div>
            <span>
              {{
                new Intl.NumberFormat('de-DE', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(cart.price)
              }}
            </span>
          </td>
          <td>
            <input type="number" @change="updateTotalMoneyy(index)" v-model="cart.quantityCart">
          </td>
          <td>
            <button @click="destroyItem(index)">Xóa</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="totalMoney">
      <b>
        Tổng tiền : {{
          new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
          }).format(totalMoney)
        }}
      </b>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "Ex7_1_cart",
  computed: {
    ...mapState([
      'carts',
      'totalMoney'
    ]),
  },
  methods: {
    ...mapMutations([
      'updateCart',
      'updateTotalMoney',
      'spliceCart'
    ]),
    updateTotalMoneyy(value) {
      if (this.carts[value].quantityCart <= 0) {
        this.spliceCart(value)
      }
      this.updateTotalMoney(0)
      for (let i = 0; i < this.carts.length; i++) {
        this.updateTotalMoney(this.totalMoney + (this.carts[i].quantityCart * this.carts[i].price))
      }
    },
    destroyItem(value) {
      this.updateTotalMoney(0)
      this.spliceCart(value)
      let total = 0
      for (let i = 0; i < this.carts.length; i++) {
        total += this.carts[i].quantityCart * this.carts[i].price
      }
      this.updateTotalMoney(total)
    },
  }
}
</script>

<style scoped>

</style>