<template>
    <div class="container">
        <div>
            <input type="text" placeholder="Nhập a" v-model="a">
            <input type="text" placeholder="Nhập b" v-model="b">
            <div>Kết quả: {{ result }}</div>
        </div>

        <div>
            <input type="text" placeholder="Nhập SĐT" v-model="phone">
            SĐT: {{ formatPhone }}
        </div>
        <br><br>

        <div class="box">
            <div class="borderColor" :style="background">
                <input type="number" v-model="number">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BT',
    props: {
        msg: String
    },
    data() {
        return {
            a: 1,
            b: 2,
            phone: '  aa đa dâd',
            number: '',
            background: 'background-color: white'
        }
    },
    computed: {
        result: function () {
            if (this.a == 0){
                if (this.b == 0){
                    return  "Vô số nghiệm";
                }else {
                    return 0;
                }
            }else {
                return  -this.b / this.a;
            }
        },
        formatPhone: function () {
            let phone = this.phone
            phone = phone.replace(/\s/g, '').replace(/[^0-9 ]/g, '');
            phone = phone.substr(0, 10)

            return phone
        }
    },
    watch: {
        number (value) {
            if (value >= 0 && value <= 100 && value != '') {
                if (value >= 0 && value <= 10) {
                    return this.background = 'background-color: #ccc'
                } else if(value >= 11 && value <= 30) {
                    return this.background = 'background-color: #00FF00'
                } else if(value >= 31 && value <= 50) {
                    return this.background = 'background-color: #00FFFF'
                } else if(value >= 51 && value <= 70) {
                    return this.background = 'background-color: #663399'
                } else if(value >= 71 && value <= 90) {
                    return this.background = 'background-color: #orange'
                } else if(value >= 91 && value <= 100) {
                    return this.background = 'background-color: red'
                }
            } else {
                return this.background = 'background-color: white'
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .box {
        display: flex;
        align-items: center;
        justify-content: center;

        .borderColor {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 250px;
            height: 250px;
            border: 1px solid black;
        }
    }
</style>
