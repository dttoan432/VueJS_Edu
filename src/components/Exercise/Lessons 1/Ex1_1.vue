<template>
    <div class="container">
        <div class="wrap">
            <div class="boxData">
                <div class="boxInput">
                    <h3 class="inputLabel">Nhập tiêu đề</h3>
                    <input type="text" v-model="title">
                </div>
                <div class="boxInput">
                    <h3 class="inputLabel">Nhập nội dung</h3>
                    <textarea v-model="content"></textarea>
                </div>
            </div>
            <div class="boxContent">
                <h3 class="inputLabel">{{ title }}</h3>
                <div v-html="content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ex1_1",
    data() {
        return {
            title: 'Zent Coding School',
            content: 'Happy class'
        }
    }
}
</script>

<style scoped lang="scss">
    @import "src/assets/scss/Ex1_1";
</style>