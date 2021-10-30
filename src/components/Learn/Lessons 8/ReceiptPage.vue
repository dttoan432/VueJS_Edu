<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Quản lý hóa đơn</b>
        </template>
        <template #contentMain>
            <h1>Trang quản lý hóa đơn</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "ReceiptPage",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '3'
        }
    }
}
</script>

<style scoped>

</style>