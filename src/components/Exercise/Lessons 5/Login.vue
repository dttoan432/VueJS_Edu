<template>
    <div class="container">
        <div class="wrap">
            <div class="box-1" v-if="flag">
                <img :src="url">
                <div class="login-form">
                    <div class="box-input">
                        <input type="text" placeholder="Email" v-model="email" :class="{ error_format: errorEmail }">
                        <div class="error-message" v-if="errorEmail">
                            <i class="el-icon-warning"></i>
                            {{ errorEmailMessage }}
                        </div>
                    </div>
                    <div class="box-input">
                        <input type="password" placeholder="Mật khẩu" v-model="password" :class="{ error_format: errorPassword }">
                        <div class="error-message" v-if="errorPassword">
                            <i class="el-icon-warning"></i>
                            {{ errorPasswordMessage }}
                        </div>
                    </div>

                    <div class="forget">
                        <button @click="function () {flag = false}">Quên mật khẩu?</button>
                        <div></div>
                    </div>

                    <button class="btn-login" @click="validate(0)">ĐĂNG NHẬP</button>
                </div>
            </div>

            <div class="box-1" v-else>
                <div class="title">LẤY LẠI MẬT KHẨU</div>
                <div class="note">
                    Bạn vui lòng nhập email đăng nhập vào ô bên dưới để nhận email hướng dẫn lấy lại mật khẩu.
                </div>
                <div class="login-form">
                    <div class="box-input">
                        <input placeholder="Email" v-model="email" :class="{ error_format: errorEmail }">
                        <div class="error-message" v-if="errorEmail">
                            <i class="el-icon-warning"></i>
                            {{ errorEmailMessage }}
                        </div>
                    </div>
                    <button class="btn-login" @click="validate(1)">GỬI EMAIL</button>
                </div>
                <div class="return-form">
                    <button @click="function () {flag = true}">
                        <i class="el-icon-back"></i>
                        Trở về trang đăng nhập
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            url: 'http://fms.flixgo.jp/static/media/logo-login.2d516aef.png',
            email: '',
            password: '',
            flag: true,
            errorEmail: false,
            errorPassword: false,
            errorEmailMessage: '',
            errorPasswordMessage: ''
        }
    },
    methods: {
        validate(flag) {
            let bool = true;
            (flag === 1) ? this.password = 1234567 : ''
            if (this.email === '') {
                this.errorEmail = true
                this.errorEmailMessage = 'Email không được để trống'
                bool = false
            } else {
                if (!this.validateEmail(this.email)) {
                    this.errorEmail = true
                    this.errorEmailMessage = 'Email sai định dạng, vui lòng nhập lại'
                    bool = false
                }
            }

            if (this.password === '') {
                this.errorPassword = true
                this.errorPasswordMessage = 'Mật khẩu không được để trống'
                bool = false
            } else {
                if (this.password.length < 7) {
                    this.errorPassword = true
                    this.errorPasswordMessage = 'Mật khẩu phải lớn hơn 6 ký tự'
                    bool = false
                }
            }


            if (bool) {
                (flag === 0) ? this.$router.push({ path: '/overview' }) : this.sendMail()
                this.email = this.password = ''
            }
        },
        validateEmail: function (email) {
            let data = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return data.test(email);
        },
        sendMail() {
            this.flag = true
            this.$message({
                message: 'Gửi email thành công.',
                type: 'success'
            });
        },
    },
    watch: {
        email(value) {
            if (value !== '') {
                this.errorEmail = false
            }
        },
        password(value) {
            if (value !== '') {
                this.errorPassword = false
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/assets/scss/Login";
</style>