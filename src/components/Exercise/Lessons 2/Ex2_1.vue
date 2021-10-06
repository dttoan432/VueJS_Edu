<template>
    <div class="container">
        <div class="search-wrapper">
            <div class="search-box">
                <input type="text" placeholder="Tìm kiếm theo tên sản phẩm" v-model="search" @keyup.enter="searchProduct()">
                <div class="search-icon">
                    <div class="search">
                        <div class="search-circle"></div>
                        <div class="search-rectangle"></div>
                    </div>
                </div>
                <div class="close-icon" v-if="isClose" @click="deleteAll()">
                    <div class="close">
                        <div class="right"></div>
                        <div class="left"></div>
                    </div>
                </div>
            </div>
        </div>
        <table>
            <tr>
                <th style="width: 30px;">STT</th>
                <th style="width: 370px;">Sản phẩm</th>
                <th style="width: 100px;">Giá</th>
                <th style="width: 100px;">Số lượng</th>
                <th style="width: 100px;">Trạng thái</th>
            </tr>
            <tr v-for="(product, index) in productData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                    <div>
                        <img :src="product.image" alt="" v-if="product.image !== ''">
                        <img src="../../../../src/assets/default.png" alt="" v-else>
                        <div>{{ product.name }}</div>
                    </div>
                </td>
                <td>
                    {{ new Intl.NumberFormat('de-DE', {
                        style: 'currency',
                        currency: 'VND',
                        minimumFractionDigits: 0
                    }).format(product.price) }}
                </td>
                <td>{{ product.quantity }}</td>
                <td>
                    <span v-if="product.isAvailable" class="greenColor">Còn hàng</span>
                    <span v-else class="redColor">Hết hàng</span>
                </td>
            </tr>
            <tr  v-if="productData.length === 0">
                <td colspan="5">Không có dữ liệu</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Ex2_1",
    data() {
        return {
            search: '',
            products: [
                {
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            productData: [
                {
                    name: 'iPhone 12 Pro Max Chính Hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_2020-10-13_22-12-24.jpg_1_2.png',
                    price: 32990000,
                    quantity: 566,
                    isAvailable: true
                },
                {
                    name: 'iPhone 12 Chính Hãng (VN/A)',
                    image: '',
                    price: 21790000,
                    quantity: 123,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Chính hãng',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/_/0/_0004_layer_5.jpg',
                    price: 16690000,
                    quantity: 0,
                    isAvailable: false
                },
                {
                    name: 'Apple iPhone XR 64GB Chính hãng(VN/A)',
                    image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-xr_5_.jpg',
                    price: 12190000,
                    quantity: 1023,
                    isAvailable: true
                },
                {
                    name: 'iPhone 11 Pro Max Chính hãng(VN/A)',
                    image: '',
                    price: 26500000,
                    quantity: 45,
                    isAvailable: true
                }
            ],
            isClose: false
        }
    },
    methods: {
        deleteAll() {
            this.search = ''
        },
        searchProduct() {
            let str = this.search.trim().toLowerCase()
            this.productData = []
            if (this.search === '') {
                this.productData = this.products
            } else {
                this.productData = this.products.filter(data => data.name.toLowerCase().indexOf(str) !== -1);
            }
            console.log(this.productData)

            // console.log(this.productData)
        }
    },
    watch: {
        search (value) {
            if (value !== '') {
                this.isClose = true
            } else {
                this.isClose = false
                this.productData = this.products
            }
        }
    }
}
</script>

<style scoped lang="scss">
    .container {
        width: 50%;
        margin: 0 auto;

        .search-wrapper {
            display: flex;
            align-items: center;
            justify-content: left;
            margin-bottom: 20px;

            .search-box {
                position: relative;

                input {
                    padding: 10px 30px 10px 40px;
                    width: 250px;
                    border: 1px solid black;
                }
                input:focus {
                    outline-color: #0080dd;
                }
                input:hover {
                    border-color: #0080dd;
                }

                .search-icon {
                    position: absolute;
                    left: 10px;
                    top: 8px;

                    .search {
                        left: 0;
                        position: relative;
                        margin: 0 auto;
                        text-align: center;

                        .search-circle {
                            left: 0;
                            width: 15px;
                            height: 15px;
                            border: 1px solid #333;
                            border-radius: 50%;
                        }

                        .search-rectangle {
                            position: absolute;
                            right: -5px;
                            bottom: -2px;
                            width: 7px;
                            transform: rotate(45deg);
                            border: 1px solid #333;
                        }
                    }
                }

                .close-icon {
                    position: absolute;
                    right: 20px;
                    top: 18px;
                    cursor: pointer;

                    .close {
                        position: relative;

                        .right {
                            position: absolute;
                            width: 10px;
                            border: 1px solid black;
                            transform: rotate(45deg);
                        }
                        .left {
                            position: absolute;
                            width: 10px;
                            border: 1px solid black;
                            transform: rotate(135deg);
                        }
                    }
                }
            }
        }

        table, th, td {
            border: 1px solid black;
            border-collapse: collapse;

            th {
                padding: 20px;
                background-color: #f2f6fe;
            }

            td {
                border-bottom: none;
                border-top: none;
                padding: 5px 10px;

                div {
                    display: flex;
                    align-items: center;

                    img {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                        float: left;
                    }
                }

                .greenColor {
                    color: limegreen;
                }
                .redColor {
                    color: red;
                }
            }
        }
    }
</style>