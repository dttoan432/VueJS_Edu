<template>
    <Ex5_1 :active="active">
        <template #contentHeader>
            <b>Hoạt động - Đơn hàng</b>
        </template>
        <template #contentMain>
            <h1>Quản lý đơn hàng của chi nhánh</h1>
        </template>
    </Ex5_1>
</template>

<script>
import Ex5_1 from "./Ex5_1";

export default {
    name: "BranchOrder",
    components: {
        Ex5_1
    },
    data() {
        return {
            active: '5-2'
        }
    }
}
</script>

<style scoped>

</style>