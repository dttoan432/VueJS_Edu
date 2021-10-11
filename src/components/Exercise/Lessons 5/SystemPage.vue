<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Cài đặt hệ thống</b>
        </template>
        <template #contentMain>
            <h1>Trang cài đặt hệ thống</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "SystemPage",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '6'
        }
    }
}
</script>

<style scoped>

</style>