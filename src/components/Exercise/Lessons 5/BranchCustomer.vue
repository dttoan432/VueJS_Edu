<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Hoạt động - Khách hàng</b>
        </template>
        <template #contentMain>
            <h1>Quản lý khách hàng của chi nhánh</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "BranchCustomer",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '5-3'
        }
    }
}
</script>

<style scoped>

</style>