<template>
    <div class="container">
        <div class="calculator">
            <div class="calculator_display">{{ display}}</div>
            <div class="calculator_button">
                <div class="item buttonFunction" @click="deleteAll()">C</div>
                <div class="item buttonFunction" @click="deleteCharacters()">del</div>
                <div class="item buttonFunction" @click="convertPercent()">%</div>
                <div class="item buttonOperator" @click="addKey('/')">/</div>
                <div class="item buttonNumber" @click="addKey('7')">7</div>
                <div class="item buttonNumber" @click="addKey('8')">8</div>
                <div class="item buttonNumber" @click="addKey('9')">9</div>
                <div class="item buttonOperator" @click="addKey('*')">*</div>
                <div class="item buttonNumber" @click="addKey('4')">4</div>
                <div class="item buttonNumber" @click="addKey('5')">5</div>
                <div class="item buttonNumber" @click="addKey('6')">6</div>
                <div class="item buttonOperator" @click="addKey('-')">-</div>
                <div class="item buttonNumber" @click="addKey('1')">1</div>
                <div class="item buttonNumber" @click="addKey('2')">2</div>
                <div class="item buttonNumber" @click="addKey('3')">3</div>
                <div class="item buttonOperator" @click="addKey('+')">+</div>
                <div class="item buttonNumber buttonMerge" @click="addKey('0')">0</div>
                <div class="item buttonNumber" @click="addKey('.')">.</div>
                <div class="item buttonOperator" @click="calculate()">=</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ex1_3",
    data() {
        return {
            display: '0',
            operators: [
                { operator: '+' },
                { operator: '-' },
                { operator: '*' },
                { operator: '/' },
                { operator: '%' },
                { operator: '.' },
            ]
        }
    },
    methods: {
        deleteCharacters() {
            if (this.display !== 'Không thể chia') {
                if (this.display.length > 1) {
                    this.display = this.display.slice(0, -1)
                } else {
                    this.display = '0'
                }
            } else {
                this.display = '0'
            }
        },
        deleteAll() {
            this.display = '0'
        },
        convertPercent () {
            if (this.display !== 'Không thể chia') {
                let flag = -1
                let check = false
                let key = 'a'
                let str = this.display
                for (var i = 0; i < str.length; i++){
                    this.operators.forEach((value) => {
                        if (str[i] === value.operator){
                            flag = i
                        }
                        if (str.charAt(str.length - 1) === value.operator){
                            check = true
                        }
                    })
                }
                if (flag !== -1) {
                    if (!check) {
                        key = str.slice(flag+1, str.length)
                        key = String(key/100)
                        this.display = str.slice(0, flag+1) + key
                    }
                } else {
                    key = str.slice(0, str.length)
                    key = String(key/100)
                    this.display = key
                }
            }
        },
        addKey(key) {
            if (this.display !== 'Không thể chia') {
                let str = this.display
                let flagKey = false
                let flagChar = false
                this.operators.forEach((value) => {
                    if (key === value.operator) {
                        flagKey = true
                    }
                    if (str.charAt(str.length - 1) === value.operator) {
                        flagChar = true
                    }
                })
                if (str.length === 1 && str.charAt(0) === '0') {
                    if (flagKey) {
                        this.display += key
                    } else {
                        this.display = key
                    }
                } else if (flagKey && flagChar) {
                    this.display = this.display.slice(0, -1) + key
                }
                else if (str.length > 1 && flagChar) {
                    if (!flagKey) {
                        this.display += key
                    }
                } else {
                    this.display += key
                }
            }
        },
        calculate() {
            if (this.display !== 'Không thể chia') {
                let flag = true
                this.operators.forEach((value) => {
                    if (this.display.charAt(this.display.length-1) === value.operator) {
                        flag = false
                    }
                })
                if (flag) {
                    this.display = String(eval(this.display))
                    if (this.display === 'NaN' || this.display === 'Infinity') {
                        this.display = 'Không thể chia'
                    }
                }
            }
        },
    }
}
</script>

<style scoped lang="scss">
    @import "src/assets/scss/color";
    @import "src/assets/scss/Ex1_3";
</style>