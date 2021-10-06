<template>
    <div class="container">
        <div class="loginWrap">
            <div class="inputWrap">
                <div class="inputLabel">Tên đăng nhập</div>
                <input type="text" v-model="username">
                <p class="error" v-if="failUsername">{{ errorUserName }}</p>
            </div>
            <div class="inputWrap">
                <div class="inputLabel">Mật khẩu</div>
                <input type="password" v-model="password">
                <p class="error" v-if="failPassword"> {{ errorPassword }}</p>
            </div>
            <button @click="validate()" class="loginButton">Đăng nhập</button>
        </div>
        <div class="infoWrap">
            <div class="block">
                <div v-if="age >= 6 && age <= 11">
                    Học sinh cấp 1
                </div>
                <div v-else-if="age >= 12 && age <= 15">
                    Học sinh cấp 2
                </div>
                <div v-else-if="age >= 16 && age <= 18">
                    Học sinh cấp 3
                </div>
                <div v-else>
                    Đã tốt nghiệp cấp 3
                </div>
            </div>

            <div class="block">
                <ul id="example-1">
                    <li v-for="(item) in items" :key="item">
                        {{ item.name }}
                    </li>
                </ul>

                <ul id="v-for-object" class="demo">
                    <li v-for="(value, key) in object" :key="key">
                        {{ value }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'For_example',
    props: {
        msg: String
    },
    data() {
        return {
            name: '<i>Tiến Toàn</i>',
            username: '',
            password: '',
            age: '19',
            items: [
                { name: 'Cà phê' },
                { name: 'Trà đặc' },
                { name: 'Bò húc' }
            ],
            object: {
                'họ': 'Bành',
                'tên': 'Tổ',
                'tuổi': 800
            },
            errorUserName: '',
            errorPassword: '',
            failUsername: false,
            failPassword: false,
        }
    },
    methods: {
        changeName() {
            this.name = 'Toàn'
        },
        validate() {
            if (this.username == '') {
                this.errorUserName = 'Tên đăng nhập không được để trống';
                this.failUsername = true;
            } else {
                this.failUsername = false;
            }
            if (this.password == '') {
                this.errorPassword = 'Mật khẩu không được để trống';
                this.failPassword = true;
            } else {
                if (this.password.length < 7) {
                    this.errorPassword = 'Mật khẩu phải có độ dài ít nhất 6 ký tự';
                    this.failPassword = true;
                } else {
                    this.failUsername = false;
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;

    .loginWrap {
        background: #f5f5f5;
        border: 1px solid #6E6E6E;
        padding: 24px;
        height: 250px;
        width: 300px;

        .inputWrap {
            margin-bottom: 12px;

            .inputLabel {
                font-weight: bold;
                margin-bottom: 8px;
                text-align: left;
            }

            input {
                width: 292px;
                height: 30px;
            }

            .error {
                color: red;
            }
        }

        button {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            margin-top: 20px;
            background: #0080dd;
            color: #fff;
            border: unset;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
        }
    }

    .infoWrap {
        background: #fff;
        border: 1px solid #6E6E6E;
        padding: 24px;
        width: 250px;
        margin-left: 24px;

        .infoLabel {
            font-weight: bold;
            color: #00AAAA;
        }

        .block{
            display: block;
        }
    }
}
</style>
