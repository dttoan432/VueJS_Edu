<template>
    <div class="container">
        <div id="table-wrap1">
            <table>
                <tr>
                    <th style="width: 30px;">STT</th>
                    <th style="width: 370px;">Sản phẩm</th>
                    <th style="width: 100px;">Giá</th>
                    <th style="width: 100px;">Số lượng</th>
                    <th style="width: 100px;">Trạng thái</th>
                    <th style="width: 100px;">Hành động</th>
                </tr>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <div>
                            <img :src="product.image" alt="" v-if="product.image !== ''">
                            <img src="../../../../src/assets/default.png" alt="" v-else>
                            <div>{{ product.name }}</div>
                        </div>
                    </td>
                    <td>
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
                        <span v-if="product.quantity > 0" class="greenColor">Còn hàng</span>
                        <span v-else class="redColor">Hết hàng</span>
                    </td>
                    <td>
                        <button @click="addToCart(product)">Thêm vào giỏ</button>
                    </td>
                </tr>
            </table>
        </div>

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
                            <input type="number" @change="updateTotalMoney(index)" v-model="cart.quantityCart">
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
    </div>
</template>

<script>
export default {
    name: "Ex2_1",
    data() {
        return {
            carts: [],
            products: [
                {
                    id: 1,
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                    price: 32990000,
                    quantity: 566,
                },
                {
                    id: 2,
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                },
                {
                    id: 3,
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                    price: 16690000,
                    quantity: 0,
                },
                {
                    id: 4,
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                    price: 12190000,
                    quantity: 1023,
                },
                {
                    id: 5,
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 6,
                }
            ],
            totalMoney: 0
        }
    },
    methods: {
        updateTotalMoney(value){
            if(this.carts[value].quantityCart <= 0){
                this.carts.splice(value, 1);
            }
            this.totalMoney = 0;
            for (let i = 0 ; i < this.carts.length;i++){
                this.totalMoney += this.carts[i].quantityCart*this.carts[i].price
            }
        },
        addToCart(value) {
            let flag = false
            this.totalMoney = 0;
            if (value.quantity > 0) {
                if (this.carts.length > 0) {
                    for (let i = 0; i < this.carts.length; i++) {
                        if (value.id === this.carts[i].id) {
                            this.carts[i].quantityCart = parseInt(this.carts[i].quantityCart) + 1
                            this.carts.push([])
                            this.carts.pop()
                            flag = false
                            break
                        } else {
                            flag = true
                        }
                    }
                    if (flag) {
                        value.quantityCart = 1;
                        this.carts.push(value)
                    }
                } else {
                    value.quantityCart = 1;
                    this.carts.push(value)
                }
            } else {
                alert("Sản phẩm hết hàng")
            }

            for (let i = 0; i < this.carts.length; i++) {
                this.totalMoney += this.carts[i].quantityCart * this.carts[i].price
            }
        },
        destroyItem(value){
            this.totalMoney = 0;
            this.carts.splice(value, 1);
            for (let i = 0 ; i < this.carts.length;i++){
                this.totalMoney += this.carts[i].quantityCart * this.carts[i].price
            }
        },
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/Ex2_2";
</style>